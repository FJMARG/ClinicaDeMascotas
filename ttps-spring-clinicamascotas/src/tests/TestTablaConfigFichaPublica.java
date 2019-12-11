package tests;

import ttps.spring.clasesDAO.ConfigFichaPublicaDAO;
import ttps.spring.clasesDAOHibernateJPA.DaoFactory;
import ttps.spring.model.ConfigFichaPublica;

public class TestTablaConfigFichaPublica {
	public static void main(String[] args) {
		ConfigFichaPublicaDAO fDAO = DaoFactory.getConfigFichaPublicaDAO();
		ConfigFichaPublica f = new ConfigFichaPublica();
		f.setApellidoDueño(true);
		f.setEmailDueño(true);
		f.setNombreDueño(true);
		f.setTelefonoDueño(true);
		f.setEspecieMascota(true);
		f.setFotoMascota(true);
		f.setColorMascota(true);
		f.setRazaMascota(true);
		f.setFechaNacimientoMascota(true);
		f.setNombreMascota(true);
		f.setSexoMascota(true);
		f.setSeñasMascota(true);
		fDAO.persistir(f); // Creo y persisto una ficha.
		
		ConfigFichaPublica dbFicha = fDAO.recuperar((long)1);
		
		System.out.println("Existe ficha: "+fDAO.existe(dbFicha.getId()));
		
		System.out.println("Valor de email dueÃ±o de Ficha que se persistio en la DB: "+dbFicha.isEmailDueño());
		
		dbFicha.setEmailDueño(false);
		fDAO.actualizar(dbFicha);
		
		dbFicha = fDAO.recuperar(dbFicha.getId());
		
		System.out.println("Valor de email dueÃ±o de Ficha que se actualizo en la DB: "+dbFicha.isEmailDueño());
	
		System.out.println("Se va a eliminar la ficha: ");
		
		fDAO.borrar(dbFicha);
				
		System.out.println("Verificar si luego de eliminar, existe en la base de datos: ");
		
		if (fDAO.existe(dbFicha.getId()) == false)
			System.out.println("No existe, por lo que se borro exitosamente.");
		else
			System.out.println("Existe, no se borro.");
	}
}
