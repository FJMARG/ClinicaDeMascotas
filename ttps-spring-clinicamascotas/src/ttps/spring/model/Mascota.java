package ttps.spring.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Component
public class Mascota {
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String nombre;
	private Date fechaNacimiento;
	private String especie;
	private String raza;
	private char sexo;
	private String color;
	private String senas;
	private String foto;
	@ManyToOne(optional = true)
	@JoinColumn(name="id_dueno")
	private Usuario dueno;
	@ManyToOne(optional = true)
	@JoinColumn(name="id_veterinario")
	private Usuario veterinario;
	@OneToMany(mappedBy="mascota")
	@JsonIgnore
	private List<Visita> visitas;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public Date getFechaNacimiento() {
		return fechaNacimiento;
	}
	public void setFechaNacimiento(Date fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}
	public String getEspecie() {
		return especie;
	}
	public void setEspecie(String especie) {
		this.especie = especie;
	}
	public String getRaza() {
		return raza;
	}
	public void setRaza(String raza) {
		this.raza = raza;
	}
	public char getSexo() {
		return sexo;
	}
	public void setSexo(char sexo) {
		this.sexo = sexo;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getSenas() {
		return senas;
	}
	public void setSenas(String senas) {
		this.senas = senas;
	}
	public String getFoto() {
		return foto;
	}
	public void setFoto(String foto) {
		this.foto = foto;
	}
	public Usuario getDueno() {
		return dueno;
	}
	public void setDueno(Usuario dueno) {
		this.dueno = dueno;
	}
	public Usuario getVeterinario() {
		return veterinario;
	}
	public void setVeterinario(Usuario veterinario) {
		this.veterinario = veterinario;
	}
	public List<Visita> getVisitas() {
		return visitas;
	}
	public void setVisitas(List<Visita> visitas) {
		this.visitas = visitas;
	}
	@Override
	public boolean equals(Object o) {
		if (!(o instanceof Mascota)){
            return false;
        }
		Mascota temp = (Mascota)o;
		return this.id == temp.getId();
	}
	
}
