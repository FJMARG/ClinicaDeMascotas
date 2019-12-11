package ttps.spring.clasesDAOHibernateJPA;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Query;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import ttps.spring.clasesDAO.GenericDAO;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
@Transactional
public class GenericDAOHibernateJPA<T> implements GenericDAO<T> {
	
	protected Class<T> clasePersistente;
	
	//@Autowired
	private EntityManager entityManager;

	public GenericDAOHibernateJPA(Class<T> clase) {
		clasePersistente = clase;
	 }
	
	protected Class<T> getPersistentClass(){
		return clasePersistente;
	}
	
	@PersistenceContext
	public void setEntityManager(EntityManager em) {
		this.entityManager = em;
	}
	
	public EntityManager getEntityManager() {
		return entityManager;
	}

	@Override
	public T persistir(T entity) {
		this.getEntityManager().persist(entity);
		return entity;
	}

	public T actualizar(T entity) {
		T ent = this.getEntityManager().merge(entity);
		return ent;
	}

	@Override
	public void borrar(T entity) {
		this.getEntityManager().remove(this.getEntityManager().contains(entity) ? entity : this.getEntityManager().merge(entity)); // Linea modificada
	}

	public T borrar(Serializable id) {
		T entity = this.getEntityManager().find(this.getPersistentClass(), id);
		if (entity != null) {
			this.borrar(entity);
		}
		return entity;
	}
	
	@Override
	public List<T> recuperarTodos(String columnOrder) {
		String order = "";
		if (columnOrder != null)
			order+=" order by e."+columnOrder;
		Query consulta= this.getEntityManager().createQuery("select e from " + getPersistentClass().getSimpleName()+" e"+order);
		@SuppressWarnings("unchecked")
		List<T> resultado = (List<T>)consulta.getResultList();
		return resultado;
	}

	@Override
	public boolean existe(Serializable id) {
		T entity = this.getEntityManager().find(this.getPersistentClass(), id);
		return (entity != null);
	}

	@Override
	public T recuperar(Serializable id) {
		T entity = this.getEntityManager().find(this.getPersistentClass(), id);
		return entity;
	}

}
