package tests;

import java.sql.Date;
import java.util.Dictionary;
import java.util.Hashtable;
import java.util.Iterator;
import java.util.List;

import enums.Rol;
import ttps.spring.clasesDAO.*;
import ttps.spring.clasesDAOHibernateJPA.*;
import ttps.spring.model.Mascota;
import ttps.spring.model.Usuario;

public class TestDBRelacionesTablas {

	public static void main(String[] args) {
		
		Usuario d = new Usuario();
		d.setNombre("Dueño");
		d.setApellido("1");
		d.setTelefono("2212121212");
		d.setEmail("dueño@asd.com");
		d.setPassword("contrasena");
		d.setRolUsuario(Rol.DUE�O);
		UsuarioDAO uDAO = DaoFactory.getUsuarioDAO();
		uDAO.persistir(d); // Creo y persisto un usuario dueño (sin mascotas).
		
		Usuario v = new Usuario();
		v.setNombre("Veterinario");
		v.setApellido("1");
		v.setTelefono("2212121212");
		v.setEmail("vet@asd.com");
		v.setPassword("contrasena");
		v.setRolUsuario(Rol.VETERINARIO);
		uDAO.persistir(v); // Creo y persisto un usuaro veterinario (sin mascota asignada).
		
		Mascota m = new Mascota();
		m.setNombre("Pancho");
		m.setFechaNacimiento(Date.valueOf("2017-07-22"));
		m.setEspecie("Perro");
		m.setRaza("Salchicha");
		m.setSexo('M');
		m.setColor("Verde Fosforescente");
		m.setSe�as("Guiña el ojo");
		m.setFoto("/Dueño/pancho.jpg");
		m.setDue�o(d); // Seteo el dueño anteriormente persistido.
		m.setVeterinario(v); // Seteo el veterinario anteriormente persistido.
		
		Mascota m2 = new Mascota();
		m2.setNombre("Firulais");
		m2.setFechaNacimiento(Date.valueOf("2017-07-22"));
		m2.setEspecie("Perro");
		m2.setRaza("Golden");
		m2.setSexo('M');
		m2.setColor("Violeta Fosforescente");
		m2.setSe�as("Se rasca");
		m2.setFoto("/Dueño/firulais.jpg");
		m2.setDue�o(d); // Seteo el dueño anteriormente persistido.
		
		MascotaDAO mDAO = DaoFactory.getMascotaDAO();
		mDAO.persistir(m);
		mDAO.persistir(m2); // Creo dos mascotas y las persisto.
		
		System.out.println("Checkeo las mascotas asignadas al dueño: ");
		
		Usuario test = uDAO.recuperar("dueño@asd.com");
		List<Mascota> asd = test.getMascotas();
		for(Mascota x : asd) {
			System.out.println(x.getNombre());
		}
		
		Dictionary<String,String> params = new Hashtable<String,String>();
		params.put("especie", "Perro");
		params.put("raza", "Salchicha");
		
		List<Mascota> listaMascotas = mDAO.recuperarMascotasPor(params);
		Iterator<Mascota> it = listaMascotas.iterator();
		
		System.out.println("Print mascotas buscadas con filtro de diccionario:");
		
		while(it.hasNext()) {
			System.out.println(it.next().getNombre());
		}
		
		Usuario test2 = uDAO.recuperar("vet@asd.com");
		
		List<Mascota> asignadas = test2.getMascotasAsignadas();
		
		Iterator<Mascota>iter = asignadas.iterator();
		
		System.out.println("Print mascotas asignadas a "+test2.getNombre()+":");
		
		while(iter.hasNext()) {
			System.out.println(iter.next().getNombre());
		}
		
		System.out.println(asignadas.size());
		
		Dictionary<String,String> d2 = new Hashtable<String,String>();
		d2.put("nombre", "Pancho");
		Mascota probar = mDAO.recuperarMascotasPor(d2).get(0);
		probar.setVeterinario(null);
		mDAO.actualizar(probar);
		
		Usuario test3 = uDAO.recuperar("vet@asd.com");
		
		List<Mascota> asignadas1 = test3.getMascotasAsignadas();
		
		Iterator<Mascota>iter1 = asignadas1.iterator();
		
		System.out.println("Print mascotas asignadas a "+test3.getNombre()+":");
		
		while(iter1.hasNext()) {
			System.out.println(iter1.next().getNombre());
		}
		
		System.out.println(asignadas1.size());
	}

}
