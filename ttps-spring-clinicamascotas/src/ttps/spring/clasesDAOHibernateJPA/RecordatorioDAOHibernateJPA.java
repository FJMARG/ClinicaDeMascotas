package ttps.spring.clasesDAOHibernateJPA;

import org.springframework.stereotype.Repository;

import ttps.spring.clasesDAO.RecordatorioDAO;
import ttps.spring.model.Recordatorio;

@Repository
public class RecordatorioDAOHibernateJPA extends GenericDAOHibernateJPA<Recordatorio> implements RecordatorioDAO{
 
	public RecordatorioDAOHibernateJPA() {
		super(Recordatorio.class);
		// TODO Auto-generated constructor stub
	}

}
