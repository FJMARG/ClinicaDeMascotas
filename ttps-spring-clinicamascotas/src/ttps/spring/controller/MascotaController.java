package ttps.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ttps.spring.clasesDAO.MascotaDAO;
import ttps.spring.clasesDAO.UsuarioDAO;
import ttps.spring.model.Mascota;
import ttps.spring.model.Usuario;

@RestController
@RequestMapping(path = "/mascota", produces =  MediaType.APPLICATION_JSON_VALUE)

public class MascotaController {
	@Autowired
	MascotaDAO mDAO;
	
	@Autowired
	UsuarioDAO uDAO;
	
	// HashMap<Long,String> sessionTokens = new HashMap<Long,String>();
	
	@Transactional
	@GetMapping("/dueno/{id_dueno}")
	public ResponseEntity <List<Mascota>> listarMascotas(@PathVariable("id_dueno") long id_dueno) { //, @RequestHeader("token") String token) {
		/*Dictionary<String,String> dict_Usuario = new Hashtable<String,String>();
		dict_Usuario.put("id_dueno", String.valueOf(id_dueno));
		List<Mascota> mascotas = mDAO.recuperarMascotasPor(dict_Usuario);*/
		if (!uDAO.existe(id_dueno))
			return new ResponseEntity<List<Mascota>>(HttpStatus.NOT_FOUND);
		Usuario u = uDAO.recuperar(id_dueno);
		List<Mascota> mascotas = u.getMascotas();
		if (mascotas.isEmpty())
			return new ResponseEntity<List<Mascota>>(HttpStatus.NO_CONTENT);
		
		/* if (token != sessionTokens.get(u.getId()))
			return new ResponseEntity<List<Mascota>>(HttpStatus.UNAUTHORIZED); */
		
		return new ResponseEntity<List<Mascota>>(mascotas,HttpStatus.OK);
	}
	
	@PostMapping("/agregar_mascota/{id_dueno}")
	public ResponseEntity<Mascota> altaMascota(@RequestBody Mascota mascota, @PathVariable("id_dueno") long id_dueno) { //, @RequestHeader("token") String token) {
		
		if (mDAO.existe(mascota.getId())) {
			System.out.println("Ya existe una mascota con nombre " + mascota.getNombre());
			return new ResponseEntity<Mascota> (HttpStatus.CONFLICT); //Código de respuesta 409
		}
		
		if (!uDAO.existe(id_dueno)) {
			System.out.println("No existe un usuario con id " + id_dueno);
			return new ResponseEntity<Mascota> (HttpStatus.CONFLICT); //Código de respuesta 409
		}
		
		mascota.setDueno(uDAO.recuperar(id_dueno));
		mDAO.persistir(mascota);
		return new ResponseEntity<Mascota> (mascota, HttpStatus.CREATED);
	}
}