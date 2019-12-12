package ttps.spring.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import enums.Rol;
import ttps.spring.clasesDAO.ClinicaDAO;
import ttps.spring.clasesDAO.ConfigFichaPublicaDAO;
import ttps.spring.clasesDAO.UsuarioDAO;
import ttps.spring.model.Clinica;
import ttps.spring.model.ConfigFichaPublica;
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
	
	HashMap<Long,String> sessionTokens= new HashMap<Long, String>();
	
	@GetMapping
	public ResponseEntity <List<Usuario>> listarUsuarios(){
		List<Usuario> usuarios = uDAO.recuperarTodos(null);
		if (usuarios.isEmpty())
			return new ResponseEntity<List<Usuario>>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Usuario>>(usuarios,HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity <Usuario> getUsuario(@PathVariable("id") long id, @RequestHeader("token") String token) {
		Usuario u = uDAO.recuperar(id);
		if (u == null) {
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
		
		if (!sessionTokens.get(u.getId()).equals(token))
			return new ResponseEntity<Usuario>(HttpStatus.UNAUTHORIZED);
		return new ResponseEntity<Usuario>(u, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity <Void> crearUsuario(@RequestBody Usuario usuario) {
		if (uDAO.existe(usuario.getEmail())) {
			return new ResponseEntity<Void>(HttpStatus.CONFLICT); //C�digo de respuesta 409
		}
		ConfigFichaPublica c = usuario.getFichaPublica();
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
	
	@RequestMapping("/autenticacion")
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
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Usuario> actualizarUsuario(@PathVariable("id") long id, @RequestBody Usuario usuario) {
		Usuario usuarioActual = uDAO.recuperar(id);
		if (usuarioActual == null) {
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
		usuarioActual.setNombre(usuario.getNombre());
		usuarioActual.setApellido(usuario.getApellido());
		usuarioActual.setEmail(usuario.getEmail());
		usuarioActual.setPassword(usuario.getPassword());
		usuarioActual.setTelefono(usuario.getTelefono());
		usuarioActual.setRolUsuario(usuario.getRolUsuario());
		uDAO.actualizar(usuarioActual);
		return new ResponseEntity<Usuario>(usuarioActual, HttpStatus.OK);
	}
	
	
}
