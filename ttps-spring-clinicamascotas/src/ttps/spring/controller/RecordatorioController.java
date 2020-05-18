package ttps.spring.controller;

import ttps.spring.clasesDAO.RecordatorioDAO;
import ttps.spring.model.Recordatorio;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping(path = "/registros", produces = MediaType.APPLICATION_JSON_VALUE)

public class RecordatorioController {
	@Autowired
	RecordatorioDAO rDAO;
	@GetMapping
	public ResponseEntity <List<Recordatorio>> listarRecordatorios(){
		List<Recordatorio> recordatorios = rDAO.recuperarTodos(null); // revisar
		if (recordatorios.isEmpty())
			return new ResponseEntity<List<Recordatorio>>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Recordatorio>>(recordatorios,HttpStatus.OK);
	}
}
	
	
	

