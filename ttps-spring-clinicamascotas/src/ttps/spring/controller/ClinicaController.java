package ttps.spring.controller;

import ttps.spring.clasesDAO.ClinicaDAO;
import ttps.spring.model.Clinica;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping(path = "/clinica", produces = MediaType.APPLICATION_JSON_VALUE)
public class ClinicaController {
	@Autowired
	ClinicaDAO cDAO;
	@GetMapping
	public ResponseEntity <List<Clinica>> listarClinicaPor(){
		List<Clinica> clinicas = cDAO.recuperarClinicas();
		if (clinicas.isEmpty())
			return new ResponseEntity<List<Clinica>>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Clinica>>(clinicas,HttpStatus.OK);
	}
}