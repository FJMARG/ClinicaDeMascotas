package ttps.spring.clasesDAOHibernateJPA;




import java.util.List;

import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import ttps.spring.clasesDAO.ClinicaDAO;
import ttps.spring.model.Clinica;

@Repository
public class ClinicaDAOHibernateJPA extends GenericDAOHibernateJPA<Clinica> implements ClinicaDAO{
	
 
	public ClinicaDAOHibernateJPA() {
		super(Clinica.class);
		// TODO Auto-generated constructor stub
	}

	@Override
	public Clinica borrar(String direccion) {
		Query consulta= this.getEntityManager().createQuery("select e from " + getPersistentClass().getSimpleName()+" e where e.direccion = '"+direccion+"'");
		Clinica entity = (Clinica)consulta.getSingleResult();
		if (entity != null) {
			this.borrar(entity);
		}
		return entity;
	}

	@Override
	public boolean existe(String direccion) {
		Query consulta= this.getEntityManager().createQuery("select e from " + getPersistentClass().getSimpleName()+" e where e.direccion = '"+direccion+"'");
		int res = consulta.getResultList().size();
		return (res != 0);
	}

	@Override
	public Clinica recuperar(String direccion) {
		Query consulta= this.getEntityManager().createQuery("select e from " + getPersistentClass().getSimpleName()+" e where e.direccion = '"+direccion+"'");
		Clinica entity = (Clinica)consulta.getSingleResult();
		return entity;
	}
	
	@Override
	public List<Clinica> recuperarClinicas() {
		Query consulta= this.getEntityManager().createQuery("select e from " + getPersistentClass().getSimpleName()+" e");
		@SuppressWarnings("unchecked")
		List<Clinica> resultado = (List<Clinica>)consulta.getResultList();
		return resultado;
	}
	
}
