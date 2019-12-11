package tests;

import java.sql.Date;

import enums.Motivo;
import enums.Rol;
import ttps.spring.clasesDAO.MascotaDAO;
import ttps.spring.clasesDAO.UsuarioDAO;
import ttps.spring.clasesDAO.VisitaDAO;
import ttps.spring.clasesDAOHibernateJPA.DaoFactory;
import ttps.spring.model.Mascota;
import ttps.spring.model.Usuario;
import ttps.spring.model.Visita;

public class TestTablaVisita {
	public static void main(String[] args) {
		
		/*
		 -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		 Esta parte no es parte de recordatorio, se va a instanciar un veterinario y una mascota(con dueño) ya que la visita debe tener un veterinario y una mascota.
		 -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		 */
		
		Usuario vet = new Usuario();
		vet.setNombre("Veterinario");
		vet.setApellido("1");
		vet.setTelefono("2212121212");
		vet.setEmail("veterinario@asd.com");
		vet.setPassword("contrasena");
		vet.setRolUsuario(Rol.VETERINARIO);
		UsuarioDAO uDAO = DaoFactory.getUsuarioDAO();
		uDAO.persistir(vet);
		// No se setea clinica porque no es obligatorio en la base de datos.
		
		Usuario du = new Usuario();
		du.setNombre("Dueño");
		du.setApellido("1");
		du.setTelefono("2212121212");
		du.setEmail("dueño@asd.com");
		du.setPassword("contrasena");
		du.setRolUsuario(Rol.DUEÑO);
		uDAO.persistir(du);
		
		Mascota m = new Mascota();
		m.setNombre("Pancho");
		m.setFechaNacimiento(Date.valueOf("2017-07-22"));
		m.setEspecie("Perro");
		m.setRaza("Salchicha");
		m.setSexo('M');
		m.setColor("Verde Fosforescente");
		m.setSeñas("Guiña el ojo");
		m.setFoto("/Dueño/pancho.jpg");
		m.setDueño(uDAO.recuperar("dueño@asd.com"));
		MascotaDAO mDAO = DaoFactory.getMascotaDAO();
		mDAO.persistir(m);
		
		/*
		 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		 Fin instanciacion y persistencia de veterinario y mascota(con dueño). Se validara existencia de las mismas en DB en detalle, en su propio test.
		 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		 */
		
		
		Visita v = new Visita();
		v.setMotivoVisita(Motivo.VACUNACION);
		v.setDescripcion("Aplica vacuna parvovirus");
		v.setDiagnostico("Dosis aplicada");
		v.setDroga("Parvovirus");
		v.setFecha(Date.valueOf("2019-11-01"));
		v.setIndicaciones("Aplicada en un gluteo");
		v.setMascota(m);
		v.setPeso(40);
		v.setVeterinario(vet);
		VisitaDAO vDAO = DaoFactory.getVisitaDAO();
		vDAO.persistir(v);
		
		Visita dbV = vDAO.recuperar((long)4);
		
		System.out.println("Se verifica si se persistio correctamente en la base de datos: "+vDAO.existe(dbV.getId()));
		
		dbV.setDescripcion("Aplica vacuna para el virus parvo");
		
		vDAO.actualizar(dbV);
		
		dbV = vDAO.recuperar(dbV.getId());
		
		System.out.println("Se va a verificar si se modifico la descripcion de la Visita: "+dbV.getDescripcion());
		
		vDAO.borrar(dbV);
		
		System.out.println("Verificar si luego de eliminar, existe en la base de datos: ");
		
		if (vDAO.existe(dbV.getId()) == false)
			System.out.println("No existe, por lo que se borro exitosamente.");
		else
			System.out.println("Existe, no se borro.");
		
	}
}
