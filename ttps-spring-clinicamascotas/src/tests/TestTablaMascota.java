package tests;

import java.sql.Date;
import java.util.Dictionary;
import java.util.Hashtable;
import java.util.List;

import enums.Rol;
import ttps.spring.clasesDAO.MascotaDAO;
import ttps.spring.clasesDAO.UsuarioDAO;
import ttps.spring.clasesDAOHibernateJPA.DaoFactory;
import ttps.spring.model.Mascota;
import ttps.spring.model.Usuario;

public class TestTablaMascota {
	public static void main(String[] args) {
		
		/*
		 -----------------------------------------------------------------------------------------------------------------------------------------------
		 Esta parte no es parte de mascotas, se va a instanciar un dueño ya que la mascota debe tener un dueño asignado porque es cargada por el dueño.
		 -----------------------------------------------------------------------------------------------------------------------------------------------
		 */
		
		Usuario du = new Usuario();
		du.setNombre("Dueño");
		du.setApellido("1");
		du.setTelefono("2212121212");
		du.setEmail("dueño@asd.com");
		du.setPassword("contrasena");
		du.setRolUsuario(Rol.DUENO);
		UsuarioDAO uDAO = DaoFactory.getUsuarioDAO();
		uDAO.persistir(du);
		
		/*
		 -----------------------------------------------------------------------------------------------------------------------------------------------
		 Fin instanciacion y persistencia de dueño. Se validara existencia de la misma en detalle, en su propio test.
		 -----------------------------------------------------------------------------------------------------------------------------------------------
		 */
		
		Mascota m = new Mascota();
		m.setNombre("Pancho");
		m.setFechaNacimiento(Date.valueOf("2017-07-22"));
		m.setEspecie("Perro");
		m.setRaza("Salchicha");
		m.setSexo('M');
		m.setColor("Verde Fosforescente");
		m.setSenas("Guiña el ojo");
		m.setFoto("/Dueño/pancho.jpg");
		m.setDueno(uDAO.recuperar("dueño@asd.com"));
		MascotaDAO mDAO = DaoFactory.getMascotaDAO();
		mDAO.persistir(m);
		
		Dictionary<String,String> d = new Hashtable<String,String>();
		d.put("nombre", "Pancho");
		d.put("raza", "Salchicha");
		
		List<Mascota> dbMList = mDAO.recuperarMascotasPor(d);
		Mascota dbM = dbMList.get(0);
		
		System.out.println("Existe el objeto persistido?:"+mDAO.existe(dbM.getId()));
		
		dbM.setColor("Amarillo patito");
		mDAO.actualizar(dbM);
		
		dbMList = mDAO.recuperarMascotasPor(d);
		dbM = dbMList.get(0);
		
		System.out.println("Verifico modificacion del color de la mascota:"+dbM.getColor());
		
		mDAO.borrar(dbM);
		
		System.out.println("Verificar si luego de eliminar, existe en la base de datos: ");
		
		if (mDAO.existe(dbM.getId()) == false)
			System.out.println("No existe, por lo que se borro exitosamente.");
		else
			System.out.println("Existe, no se borro.");
		
	}
}
