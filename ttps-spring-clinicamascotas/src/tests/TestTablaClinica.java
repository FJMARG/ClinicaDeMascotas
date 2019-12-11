package tests;

import ttps.spring.clasesDAO.ClinicaDAO;
import ttps.spring.clasesDAOHibernateJPA.DaoFactory;
import ttps.spring.model.Clinica;

public class TestTablaClinica {
	public static void main(String[] args) {
		ClinicaDAO cDAO = DaoFactory.getClinicaDAO();
		Clinica c = new Clinica();
		c.setDireccion("La Plata, 50 y 120");
		c.setNombre("Clinica Informatica");
		cDAO.persistir(c); // Creo y persisto una clinica.
		
		System.out.println("Existe clinica 'Clinica Informatica'?: "+cDAO.existe("La Plata, 50 y 120"));
		
		Clinica dbClinica = cDAO.recuperar("La Plata, 50 y 120");
		
		System.out.println("Nombre de clinica que se persistio en la DB: "+dbClinica.getNombre());
		
		dbClinica.setDireccion("Springfield, Avenida siempre viva");
		cDAO.actualizar(dbClinica);
		
		dbClinica = cDAO.recuperar("Springfield, Avenida siempre viva");
		
		System.out.println("Direccion de clinica que se actualizo en la DB: "+dbClinica.getDireccion());
	
		System.out.println("Se va a eliminar la clinica: ");
		
		cDAO.borrar(dbClinica);
				
		System.out.println("Verificar si luego de eliminar, existe la clinica en la base de datos: ");
		
		if (cDAO.existe("Springfield, Avenida siempre viva") == false)
			System.out.println("No existe, por lo que se borro exitosamente.");
		else
			System.out.println("Existe, no se borro.");
		
	}
}
