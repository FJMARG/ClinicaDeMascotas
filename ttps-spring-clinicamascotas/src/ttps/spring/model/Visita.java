package ttps.spring.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.stereotype.Component;

import enums.Motivo;
@Entity
@Component
public class Visita {
	@Id @GeneratedValue
	private long id;
	@ManyToOne(optional = false)
	@JoinColumn(name = "id_veterinario")
	private Usuario veterinario;
	@ManyToOne(optional = false)
	@JoinColumn(name = "id_mascota")
	private Mascota mascota;
	private Date fecha;
	private String descripcion;
	private String diagnostico;
	private int peso;
	private String indicaciones;
	private String droga;
	@Enumerated (EnumType.STRING)
	private Motivo motivoVisita;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Usuario getVeterinario() {
		return veterinario;
	}
	public void setVeterinario(Usuario veterinario) {
		this.veterinario = veterinario;
	}
	public Mascota getMascota() {
		return mascota;
	}
	public void setMascota(Mascota mascota) {
		this.mascota = mascota;
	}
	public Date getFecha() {
		return fecha;
	}
	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public String getDiagnostico() {
		return diagnostico;
	}
	public void setDiagnostico(String diagnostico) {
		this.diagnostico = diagnostico;
	}
	public int getPeso() {
		return peso;
	}
	public void setPeso(int peso) {
		this.peso = peso;
	}
	public String getIndicaciones() {
		return indicaciones;
	}
	public void setIndicaciones(String indicaciones) {
		this.indicaciones = indicaciones;
	}
	public String getDroga() {
		return droga;
	}
	public void setDroga(String droga) {
		this.droga = droga;
	}
	public Motivo getMotivoVisita() {
		return motivoVisita;
	}
	public void setMotivoVisita(Motivo motivoVisita) {
		this.motivoVisita = motivoVisita;
	}
}
