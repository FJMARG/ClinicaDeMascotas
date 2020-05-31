package ttps.spring.clasesDAO;

import java.util.Dictionary;
import java.util.List;

import ttps.spring.model.Mascota;

public interface MascotaDAO extends GenericDAO<Mascota> {
	public List<Mascota> recuperarMascotasPor(Dictionary<String, String> d);
	public List<Mascota> buscarMascotas(String term);
}
