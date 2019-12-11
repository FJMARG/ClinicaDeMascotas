package ttps.spring.clasesDAO;

import java.util.List;

import ttps.spring.model.Clinica;

public interface ClinicaDAO extends GenericDAO<Clinica> {
	
	public Clinica borrar(String direccion);
	public boolean existe(String direccion);
	public Clinica recuperar(String direccion);
	public List<Clinica> recuperarClinicas();

}
