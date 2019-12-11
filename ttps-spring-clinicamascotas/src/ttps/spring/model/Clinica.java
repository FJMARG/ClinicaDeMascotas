package ttps.spring.model;

import javax.persistence.*;

import org.springframework.stereotype.Component;
@Entity
@Component
public class Clinica {
	@Id @GeneratedValue
	private long id;
	private String nombre;
	private String direccion;
	public Clinica() {
		
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
}
