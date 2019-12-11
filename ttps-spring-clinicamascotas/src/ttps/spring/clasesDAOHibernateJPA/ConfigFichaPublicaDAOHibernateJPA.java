package ttps.spring.clasesDAOHibernateJPA;

import org.springframework.stereotype.Repository;

import ttps.spring.clasesDAO.ConfigFichaPublicaDAO;
import ttps.spring.model.ConfigFichaPublica;

@Repository
public class ConfigFichaPublicaDAOHibernateJPA extends GenericDAOHibernateJPA<ConfigFichaPublica> implements ConfigFichaPublicaDAO {
 
	public ConfigFichaPublicaDAOHibernateJPA() {
		super(ConfigFichaPublica.class);
		// TODO Auto-generated constructor stub
	}

}
