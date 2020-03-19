package ttps.spring.clasesDAO;

import java.util.List;

import enums.Rol;
import ttps.spring.model.Usuario;

public interface UsuarioDAO extends GenericDAO<Usuario>{

	public Usuario borrar(String email);

	public boolean existe(String email);

	public Usuario recuperar(String email);

	public List<Usuario> recuperarPorRol(String columnOrder, Rol rol);
	
	public List<Usuario> recuperarVeterinariosValidos(String columnOrder);

	public List<Usuario> recuperarVeterinariosNoValidos(String columnOrder);

}