package ttps.spring.clasesDAOHibernateJPA;

import ttps.spring.clasesDAO.ClinicaDAO;
import ttps.spring.clasesDAO.ConfigFichaPublicaDAO;
import ttps.spring.clasesDAO.MascotaDAO;
import ttps.spring.clasesDAO.RecordatorioDAO;
import ttps.spring.clasesDAO.UsuarioDAO;
import ttps.spring.clasesDAO.VisitaDAO;

public class DaoFactory {
	public static ClinicaDAO getClinicaDAO() {
		return new ClinicaDAOHibernateJPA();
	}
	public static ConfigFichaPublicaDAO getConfigFichaPublicaDAO() {
		return new ConfigFichaPublicaDAOHibernateJPA();
	}
	public static MascotaDAO getMascotaDAO() {
		return new MascotaDAOHibernateJPA();
	}
	public static RecordatorioDAO getRecordatorioDAO() {
		return new RecordatorioDAOHibernateJPA();
	}
	public static UsuarioDAO getUsuarioDAO() {
		return new UsuarioDAOHibernateJPA();
	}
	public static VisitaDAO getVisitaDAO() {
		return new VisitaDAOHibernateJPA();
	}
}
