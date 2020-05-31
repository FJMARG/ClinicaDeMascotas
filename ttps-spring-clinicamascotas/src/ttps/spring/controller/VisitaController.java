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
import ttps.spring.clasesDAO.VisitaDAO;
import ttps.spring.model.Clinica;
import ttps.spring.model.ConfigFichaPublica;
import ttps.spring.model.Mascota;
import ttps.spring.model.Recordatorio;
import ttps.spring.model.Usuario;
import ttps.spring.model.Visita;

@RestController
@RequestMapping(path = "/visita", produces = MediaType.APPLICATION_JSON_VALUE)
public class VisitaController {
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
	@Autowired
	VisitaDAO vDAO;
	
	@PostMapping("/mascota/{id}/veterinario/{vid}")
	public ResponseEntity <Void> altaVisita(@RequestBody Visita v, @PathVariable("id") long id, @PathVariable("vid") long vid) {
		Usuario u = uDAO.recuperar(vid);
		if (u == null) {
			System.out.println("Usuario no encontrado");
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		if (u.getRolUsuario() != Rol.VETERINARIO) {
			System.out.println("Rol no es veterinario");
			return new ResponseEntity<Void>(HttpStatus.FORBIDDEN);
		}
		Mascota m = mDAO.recuperar(id);
		if(m == null) {
			System.out.println("Mascota no encontrado");
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		if(m.getVeterinario()==null) {
			System.out.println("La mascota no posee veterinario asignado");
			return new ResponseEntity<Void>(HttpStatus.FORBIDDEN);
		}
		if(m.getVeterinario().getId()!=u.getId()) {
			System.out.println("No es veterinario asignado a mascota");
			return new ResponseEntity<Void>(HttpStatus.FORBIDDEN);
		}
		if(!u.getMascotasAtendidas().contains(m)) {
			u.addMascotaAtendida(m);
			uDAO.actualizar(u);
		}
		v.setMascota(m);
		v.setVeterinario(u);
		vDAO.persistir(v);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity <List<Visita>> recuperarVisitas() {
		List<Visita> v = vDAO.recuperarTodos(null);
		return new ResponseEntity<List<Visita>>(v,HttpStatus.CREATED);
	}
	
}
