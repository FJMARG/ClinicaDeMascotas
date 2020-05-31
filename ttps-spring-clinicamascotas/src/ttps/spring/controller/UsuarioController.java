package ttps.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import enums.Rol;
import ttps.spring.clasesDAO.ClinicaDAO;
import ttps.spring.clasesDAO.ConfigFichaPublicaDAO;
import ttps.spring.clasesDAO.MascotaDAO;
import ttps.spring.clasesDAO.RecordatorioDAO;
import ttps.spring.clasesDAO.UsuarioDAO;
import ttps.spring.model.Clinica;
import ttps.spring.model.ConfigFichaPublica;
import ttps.spring.model.Mascota;
import ttps.spring.model.Recordatorio;
import ttps.spring.model.Usuario;

@RestController
@RequestMapping(path = "/usuario", produces = MediaType.APPLICATION_JSON_VALUE)
public class UsuarioController {
	@Autowired
	UsuarioDAO uDAO;
	@Autowired
	ConfigFichaPublicaDAO fDAO;
	@Autowired
	ClinicaDAO cDAO;
	@Autowired
	RecordatorioDAO rDAO;
	@Autowired
	MascotaDAO mDAO;
	
	@GetMapping
	public ResponseEntity <List<Usuario>> listarUsuarios(){
		List<Usuario> usuarios = uDAO.recuperarTodos(null);
		if (usuarios.isEmpty())
			return new ResponseEntity<List<Usuario>>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Usuario>>(usuarios,HttpStatus.OK);
	}
	
	@GetMapping("/rol/{rol}")
	public ResponseEntity <List<Usuario>> listarUsuarios(@PathVariable("rol") Rol r){
		List<Usuario> usuarios = uDAO.recuperarPorRol("apellido", r);
		if (usuarios.isEmpty())
			return new ResponseEntity<List<Usuario>>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Usuario>>(usuarios,HttpStatus.OK);
	}
	
	@GetMapping("/veterinariosNoValidos")
	public ResponseEntity <List<Usuario>> listarVeterinariosSinValidar(){
		List<Usuario> usuarios = uDAO.recuperarVeterinariosNoValidos("apellido");
		if (usuarios.isEmpty())
			return new ResponseEntity<List<Usuario>>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Usuario>>(usuarios,HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity <Usuario> getUsuario(@PathVariable("id") long id) {
		Usuario u = uDAO.recuperar(id);
		if (u == null) {
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Usuario>(u, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity <Void> crearUsuario(@RequestBody Usuario usuario) {
		if (uDAO.existe(usuario.getEmail())) {
			return new ResponseEntity<Void>(HttpStatus.CONFLICT); //C�digo de respuesta 409
		}
		ConfigFichaPublica c = usuario.getFichaPublica();
		System.out.println(c.isEmailDueno());
		fDAO.persistir(c);
		if (usuario.getRolUsuario()!=Rol.DUENO){
			Clinica cl = usuario.getClinica();
			cDAO.persistir(cl);
		}
		uDAO.persistir(usuario);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	/*
	 
	 Probado con Postman, method POST, con JSON colocado en Body, raw, JSON
	 
	{
		"nombre":"Primero",
		"apellido":"First",
		"telefono":2221212121,
		"email":"email@hotmail.com",
		"password":1234,
		"rolUsuario":"DUENO"
	}
	 
	 */
	
	/*@RequestMapping("/autenticacion")
	@PostMapping
	public ResponseEntity <Void> autenticar(@RequestHeader("usuario") String email, @RequestHeader("clave") String password) {
		if (!uDAO.existe(email)) {
			return new ResponseEntity<Void>(HttpStatus.FORBIDDEN); //C�digo de respuesta 403
		}
		Usuario dbUsuario = uDAO.recuperar(email);
		if (!dbUsuario.getPassword().equals(password)) {
			return new ResponseEntity<Void>(HttpStatus.FORBIDDEN); //C�digo de respuesta 403
		}
		HttpHeaders responseHeaders = new HttpHeaders();
		String tmp = dbUsuario.getId()+"123456";
		sessionTokens.put(dbUsuario.getId(), tmp);
	    responseHeaders.set("token", tmp);
		return new ResponseEntity<Void>(responseHeaders,HttpStatus.NO_CONTENT); //C�digo de respuesta 204
	}*/
	
	@PutMapping("/{id}")
	public ResponseEntity<Usuario> actualizarUsuario(@PathVariable("id") long id, @RequestBody Usuario usuario) {
		Usuario usuarioActual = uDAO.recuperar(id);
		if (usuarioActual == null) {
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
		Usuario temp = uDAO.recuperar(usuario.getEmail());
		if (temp != null && (!usuarioActual.getEmail().equals(usuario.getEmail())))
			return new ResponseEntity<Usuario>(HttpStatus.CONFLICT);
		usuarioActual.setNombre(usuario.getNombre());
		usuarioActual.setApellido(usuario.getApellido());
		usuarioActual.setEmail(usuario.getEmail());
		usuarioActual.setPassword(usuario.getPassword());
		usuarioActual.setTelefono(usuario.getTelefono());
		usuarioActual.setRolUsuario(usuario.getRolUsuario());
		ConfigFichaPublica cActual = usuarioActual.getFichaPublica();
		ConfigFichaPublica c = usuario.getFichaPublica();
		cActual.setApellidoDueno(c.isApellidoDueno());
		cActual.setEmailDueno(c.isEmailDueno());
		cActual.setTelefonoDueno(c.isTelefonoDueno());
		fDAO.actualizar(cActual);
		if (usuarioActual.getRolUsuario()!=Rol.DUENO){
			Clinica clActual = usuarioActual.getClinica();
			Clinica cl = usuario.getClinica();
			clActual.setNombre(cl.getNombre());
			clActual.setDireccion(cl.getDireccion());
			cDAO.actualizar(clActual);
		}
		uDAO.actualizar(usuarioActual);
		return new ResponseEntity<Usuario>(usuarioActual, HttpStatus.OK);
	}
	
	@GetMapping("/recordatorios/{id}")
	public ResponseEntity <List<Recordatorio>> recuperarRecordatorios(@PathVariable("id") long id){
		System.out.println("Entro");
		List<Recordatorio> r = uDAO.recuperarRecordatoriosDe(id);
		if (r.isEmpty())
			return new ResponseEntity<List<Recordatorio>>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Recordatorio>>(r,HttpStatus.OK);
	}
	
	@PostMapping("/recordatorios/agregar/{id}/{mascota}")
	public ResponseEntity <Void> agregarRecordatorioUsuario(@RequestBody Recordatorio r, @PathVariable("id") long id, @PathVariable("mascota") long mascotaid) {
		Usuario u = uDAO.recuperar(id);
		Mascota m = mDAO.recuperar(mascotaid);
		if ((u == null) || (m == null)){
			return new ResponseEntity<Void>(HttpStatus.CONFLICT); //C�digo de respuesta 409
		}
		r.setMascota(m);
		u.addRecordatorio(r);
		rDAO.persistir(r);
		uDAO.actualizar(u);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	@PutMapping("/validarVeterinarios")
	public ResponseEntity<List<Usuario>> actualizarUsuario(@RequestBody List<Usuario> vets) {
		if (vets == null)
			return new ResponseEntity<List<Usuario>>(HttpStatus.NOT_FOUND);
		for (Usuario v : vets) {
			Usuario u = uDAO.recuperar(v.getId());
			if (u == null) {
				return new ResponseEntity<List<Usuario>>(HttpStatus.NOT_FOUND);
			}
			u.setVeterinarioValido(v.isVeterinarioValido());
			uDAO.actualizar(u);
		}
		return new ResponseEntity<List<Usuario>>(vets, HttpStatus.OK);
	}
	
	@GetMapping("/veterinariosValidos")
	public ResponseEntity <List<Usuario>> listarVeterinariosValidos(){
		List<Usuario> usuarios = uDAO.recuperarVeterinariosValidos("apellido");
		if (usuarios.isEmpty())
			return new ResponseEntity<List<Usuario>>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Usuario>>(usuarios,HttpStatus.OK);
	}
	
	@GetMapping("/mascotasasignadas/{id}")
	public ResponseEntity <List<Mascota>> retornarMascotasAsignadas(@PathVariable("id") long id) {
		Usuario v = uDAO.recuperar(id);
		if (v == null){
			return new ResponseEntity<List<Mascota>>(HttpStatus.CONFLICT); //C�digo de respuesta 409
		}
		if (v.getRolUsuario() != Rol.VETERINARIO) {
			return new ResponseEntity<List<Mascota>>(HttpStatus.CONFLICT); //C�digo de respuesta 409
		}
		List<Mascota> masc = v.getMascotasAsignadas();
		return new ResponseEntity <List<Mascota>>(masc,HttpStatus.OK);
	}
	
	@PutMapping("/aceptarmascotas/{id}")
	public ResponseEntity <Void> aceptarMascota(@PathVariable("id") long id, @RequestBody long[] mids) {
		Usuario v = uDAO.recuperar(id);
		if (v == null){
			System.out.println("No existe usuario");
			return new ResponseEntity<Void>(HttpStatus.CONFLICT); //C�digo de respuesta 409
		}
		if (v.getRolUsuario() != Rol.VETERINARIO) {
			System.out.println("No tiene rol veterinario");
			return new ResponseEntity<Void>(HttpStatus.CONFLICT); //C�digo de respuesta 409
		}
		List<Mascota> lista = v.getMascotasPendientes();
		if (lista == null) {
			System.out.println("No tiene lista de mascotas pendientes");
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
		for (long mid : mids) {
			Mascota m = mDAO.recuperar(mid);
			if (m == null) {
				System.out.println("Una mascota no existe");
				return new ResponseEntity<Void>(HttpStatus.CONFLICT);
			}
			if (!lista.contains(m)) {
				System.out.println("La mascota existe pero no es mascota pendiente del veterinario");
				return new ResponseEntity<Void>(HttpStatus.CONFLICT);
			}
			v.addMascotaAsignada(m);
			m.setVeterinario(v);
			mDAO.actualizar(m);
			lista.remove(m);
		}
		v.setMascotasPendientes(lista);
		uDAO.actualizar(v);
		return new ResponseEntity <Void>(HttpStatus.OK);
	}
	
	@GetMapping("/mascotaspendientes/{id}")
	public ResponseEntity <List<Mascota>> retornarMascotasPendientes(@PathVariable("id") long id) {
		Usuario v = uDAO.recuperar(id);
		if (v == null){
			return new ResponseEntity<List<Mascota>>(HttpStatus.CONFLICT); //C�digo de respuesta 409
		}
		if (v.getRolUsuario() != Rol.VETERINARIO) {
			return new ResponseEntity<List<Mascota>>(HttpStatus.CONFLICT); //C�digo de respuesta 409
		}
		List<Mascota> masc = v.getMascotasPendientes();
		return new ResponseEntity <List<Mascota>>(masc,HttpStatus.OK);
	}
	
}
