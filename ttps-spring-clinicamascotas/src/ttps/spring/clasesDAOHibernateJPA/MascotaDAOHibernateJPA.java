package ttps.spring.clasesDAOHibernateJPA;

import java.util.Dictionary;
import java.util.Enumeration;
import java.util.List;

import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import ttps.spring.clasesDAO.MascotaDAO;
import ttps.spring.model.Mascota;

@Repository
public class MascotaDAOHibernateJPA extends GenericDAOHibernateJPA<Mascota> implements MascotaDAO{
 
	public MascotaDAOHibernateJPA() {
		super(Mascota.class);
		// TODO Auto-generated constructor stub
	}

	@Override
	public List<Mascota> recuperarMascotasPor(Dictionary<String, String> criterios) {
		String filter = "";
		if(criterios != null) {
			if (!criterios.isEmpty()) {
				Enumeration<String> elements = criterios.elements();
				Enumeration<String> keys = criterios.keys();
				filter = " where e."+keys.nextElement()+" like '%"+elements.nextElement()+"%'";
				while(keys.hasMoreElements()) {
					filter=filter+" and e."+keys.nextElement()+" like '%"+elements.nextElement()+"%'";
				}
			}
		}
		Query consulta= this.getEntityManager().createQuery("select e from " + getPersistentClass().getSimpleName()+" e"+filter);
		@SuppressWarnings("unchecked")
		List<Mascota> resultado = (List<Mascota>)consulta.getResultList();
		return resultado;
	}
	
	@Override
	public List<Mascota> buscarMascotas(String termino){
		Query consulta= this.getEntityManager().createQuery("select e from " + getPersistentClass().getSimpleName()+" e where e.nombre LIKE '%"+termino+"%' or e.especie LIKE '%"+termino+"%' or e.raza LIKE '%"+termino+"%' or e.dueno.nombre LIKE '%"+termino+"%' or e.dueno.apellido LIKE '%"+termino+"%'");
		@SuppressWarnings("unchecked")
		List<Mascota> resultado = (List<Mascota>)consulta.getResultList();
		return resultado;
	}

}
