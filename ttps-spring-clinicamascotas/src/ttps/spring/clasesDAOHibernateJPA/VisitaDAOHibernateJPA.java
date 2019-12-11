package ttps.spring.clasesDAOHibernateJPA;

import org.springframework.stereotype.Repository;

import ttps.spring.clasesDAO.VisitaDAO;
import ttps.spring.model.Visita;

@Repository
public class VisitaDAOHibernateJPA extends GenericDAOHibernateJPA<Visita> implements VisitaDAO{
	
	public VisitaDAOHibernateJPA() {
		super(Visita.class);
		// TODO Auto-generated constructor stub
	}

}
