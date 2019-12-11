package tests;

import java.sql.Date;

import enums.Rol;
import ttps.spring.clasesDAO.MascotaDAO;
import ttps.spring.clasesDAO.RecordatorioDAO;
import ttps.spring.clasesDAO.UsuarioDAO;
import ttps.spring.clasesDAOHibernateJPA.DaoFactory;
import ttps.spring.model.Mascota;
import ttps.spring.model.Recordatorio;
import ttps.spring.model.Usuario;

public class TestTablaRecordatorio {
	public static void main(String[] args) {
		
		/*
		 -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		 Esta parte no es parte de recordatorio, se va a instanciar un dueño y una mascota ya que la mascota debe tener un dueño asignado porque es cargada por el dueño y lo mismo el recordatorio.
		 -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		 */
		
		Usuario du = new Usuario();
		du.setNombre("Dueño");
		du.setApellido("1");
		du.setTelefono("2212121212");
		du.setEmail("dueño@asd.com");
		du.setPassword("contrasena");
		du.setRolUsuario(Rol.DUE�O);
		UsuarioDAO uDAO = DaoFactory.getUsuarioDAO();
		uDAO.persistir(du);
		
		
		
		Mascota m = new Mascota();
		m.setNombre("Pancho");
		m.setFechaNacimiento(Date.valueOf("2017-07-22"));
		m.setEspecie("Perro");
		m.setRaza("Salchicha");
		m.setSexo('M');
		m.setColor("Verde Fosforescente");
		m.setSe�as("Gui�a el ojo");
		m.setFoto("/Due�o/pancho.jpg");
		m.setDue�o(uDAO.recuperar("dueño@asd.com"));
		MascotaDAO mDAO = DaoFactory.getMascotaDAO();
		mDAO.persistir(m);
		
		/*
		 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		 Fin instanciacion y persistencia de dueño y mascota. Se validara existencia de las mismas en DB en detalle, en su propio test.
		 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		 */
		
		Recordatorio r = new Recordatorio();
		r.setFecha(Date.valueOf("2019-12-23"));
		r.setDescripcion("Llevar a vacunar");
		r.setMascota(m);
		
		RecordatorioDAO rDAO = DaoFactory.getRecordatorioDAO();
		
		rDAO.persistir(r);
		
		Recordatorio rDB = rDAO.recuperar((long)3);
		
		System.out.println("Se verifica si se persistio en la base de datos: "+rDAO.existe(rDB.getId()));
		
		rDB.setDescripcion("Llevar a cortar el pelo");
		rDAO.actualizar(rDB);
		rDB = rDAO.recuperar(rDB.getId());
		
		System.out.println("Se verifica si se realizo la actualizacion de la descripcion del recordatorio: "+rDB.getDescripcion());
		
		rDAO.borrar(rDB);
		
		System.out.println("Verificar si luego de eliminar, existe en la base de datos: ");
		
		if (rDAO.existe(rDB.getId()) == false)
			System.out.println("No existe, por lo que se borro exitosamente.");
		else
			System.out.println("Existe, no se borro.");
	}
}
