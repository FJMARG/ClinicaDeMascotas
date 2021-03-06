package ttps.spring.clasesDAOHibernateJPA;

import java.util.List;

import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import enums.Rol;
import ttps.spring.clasesDAO.UsuarioDAO;
import ttps.spring.model.Mascota;
import ttps.spring.model.Recordatorio;
import ttps.spring.model.Usuario;

@Repository
public class UsuarioDAOHibernateJPA extends GenericDAOHibernateJPA<Usuario> implements UsuarioDAO {
	
	public UsuarioDAOHibernateJPA() {
		super(Usuario.class);
		// TODO Auto-generated constructor stub
	}

	@Override
	public Usuario borrar(String email) {
		Query consulta= this.getEntityManager().createQuery("select e from " + getPersistentClass().getSimpleName()+" e where e.email = '"+email+"'");
		Usuario entity = (Usuario)consulta.getSingleResult();
		if (entity != null) {
			this.borrar(entity);
		}
		return entity;
	}

	@Override
	public boolean existe(String email) {
		Query consulta= this.getEntityManager().createQuery("select e from " + getPersistentClass().getSimpleName()+" e where e.email = '"+email+"'");
		return (!consulta.getResultList().isEmpty());
	}

	@Override
	public Usuario recuperar(String email) {
		Query consulta= this.getEntityManager().createQuery("select e from " + getPersistentClass().getSimpleName()+" e where e.email = '"+email+"'");
		if (!consulta.getResultList().isEmpty()) {
			Usuario entity = (Usuario)consulta.getSingleResult();
			return entity;
		}
		return null;
	}

	@Override
	public List<Usuario> recuperarPorRol(String columnOrder, Rol rol) {
		Query consulta= this.getEntityManager().createQuery("select e from " + getPersistentClass().getSimpleName()+" e where e.rolUsuario = '"+rol.name()+"' order by e."+columnOrder);
		@SuppressWarnings("unchecked")
		List<Usuario> resultado = (List<Usuario>)consulta.getResultList();
		return resultado;
	}
	
	@Override
	public List<Usuario> recuperarVeterinariosValidos(String columnOrder){
		Query consulta= this.getEntityManager().createQuery("select e from " + getPersistentClass().getSimpleName()+" e where e.rolUsuario = '"+Rol.VETERINARIO.name()+"' and e.veterinarioValido = 1 order by e."+columnOrder);
		@SuppressWarnings("unchecked")
		List<Usuario> resultado = (List<Usuario>)consulta.getResultList();
		return resultado;
	}
	
	@Override
	public List<Usuario> recuperarVeterinariosNoValidos(String columnOrder){
		Query consulta= this.getEntityManager().createQuery("select e from " + getPersistentClass().getSimpleName()+" e where e.rolUsuario = '"+Rol.VETERINARIO.name()+"' and e.veterinarioValido = 0 order by e."+columnOrder);
		@SuppressWarnings("unchecked")
		List<Usuario> resultado = (List<Usuario>)consulta.getResultList();
		return resultado;
	}

	@Override
	public List<Recordatorio> recuperarRecordatoriosDe(long id) {
		Query consulta= this.getEntityManager().createQuery("select e.recordatorios from " + getPersistentClass().getSimpleName()+" e where e.id = '"+id+"'");
		@SuppressWarnings("unchecked")
		List<Recordatorio> resultado = (List<Recordatorio>)consulta.getResultList();
		return resultado;
	}
	
	//public List<Mascota> recuperarMascotasAsignadas(long id) {
	//	Query consulta= this.getEntityManager().createQuery("select e.mascotasAsignadas from " + getPersistentClass().getSimpleName()+" e where e.id = '"+id);
	//	@SuppressWarnings("unchecked")
	//	List<Mascota> resultado = (List<Mascota>)consulta.getResultList();
	//	return resultado;
	//}
	
	
}
