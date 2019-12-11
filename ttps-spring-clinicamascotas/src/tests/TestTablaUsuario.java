package tests;

import enums.Rol;
import ttps.spring.clasesDAO.UsuarioDAO;
import ttps.spring.clasesDAOHibernateJPA.DaoFactory;
import ttps.spring.model.Usuario;

public class TestTablaUsuario {
	public static void main(String[] args) {
		Usuario d = new Usuario();
		d.setNombre("Due�o");
		d.setApellido("1");
		d.setTelefono("2212121212");
		d.setEmail("due�o@asd.com");
		d.setPassword("contrasena");
		d.setRolUsuario(Rol.DUE�O);
		UsuarioDAO uDAO = DaoFactory.getUsuarioDAO();
		uDAO.persistir(d);
		Usuario dbD = uDAO.recuperar("due�o@asd.com");
		System.out.println("Verifico si se persistio en la base de datos: "+uDAO.existe(dbD.getId()));
		dbD.setApellido("Modificado");
		uDAO.actualizar(dbD);
		dbD = uDAO.recuperar("due�o@asd.com");
		System.out.println("Verifico si se actualizo el apellido del usuario due�o: "+dbD.getApellido());
		uDAO.borrar(dbD);
		
		System.out.println("Verificar si luego de eliminar, existe en la base de datos: ");
		
		if (uDAO.existe(dbD.getId()) == false)
			System.out.println("No existe, por lo que se borro exitosamente.");
		else
			System.out.println("Existe, no se borro.");
	}
}
