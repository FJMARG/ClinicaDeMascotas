package ttps.spring.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.internal.Nullable;

import enums.Rol;
@Entity
@Component
public class Usuario {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String nombre;
	private String apellido;
	private String telefono;
	private String email;
	private String password;
	@Enumerated (EnumType.STRING)
	private Rol rolUsuario;
	@OneToOne(optional = true)
	private Clinica clinica;
	@OneToMany (mappedBy = "veterinario")
	@JsonIgnore
	private List<Visita> visitas;
	private boolean veterinarioValido;
	@OneToMany(fetch = FetchType.EAGER)
	@JsonIgnore
	private List<Recordatorio> recordatorios;
	@OneToOne
	private ConfigFichaPublica fichaPublica;
	@OneToMany(mappedBy = "dueno")
	@JsonIgnore
	private List<Mascota> mascotas;
	@LazyCollection(LazyCollectionOption.FALSE)
	@JoinTable(name = "veterinario_mascotaAtendida",
				joinColumns=
						@JoinColumn(name="usuario_id", referencedColumnName="id"),
				inverseJoinColumns=
						@JoinColumn(name="mascota_id", referencedColumnName="id")
				)
	@OneToMany
	@JsonIgnore
	private List<Mascota> mascotasAtendidas;
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(mappedBy = "veterinario")
	@JsonIgnore
	private List<Mascota> mascotasAsignadas;
	@JoinTable(name = "veterinario_mascotaPendiente",
			joinColumns=
					@JoinColumn(name="usuario_id", referencedColumnName="id"),
			inverseJoinColumns=
					@JoinColumn(name="mascota_id", referencedColumnName="id")
			)
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany
	@JsonIgnore
	private List<Mascota> mascotasPendientes;
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
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public String getTelefono() {
		return telefono;
	}
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Rol getRolUsuario() {
		return rolUsuario;
	}
	public void setRolUsuario(Rol rolUsuario) {
		this.rolUsuario = rolUsuario;
	}
	public Clinica getClinica() {
		return clinica;
	}
	public void setClinica(Clinica clinica) {
		this.clinica = clinica;
	}
	public List<Visita> getVisitas() {
		return visitas;
	}
	public void setVisitas(List<Visita> visitas) {
		this.visitas = visitas;
	}
	public boolean isVeterinarioValido() {
		return veterinarioValido;
	}
	public void setVeterinarioValido(boolean veterinarioValido) {
		this.veterinarioValido = veterinarioValido;
	}
	public List<Recordatorio> getRecordatorios() {
		return recordatorios;
	}
	public void setRecordatorios(List<Recordatorio> recordatorios) {
		this.recordatorios = recordatorios;
	}
	public void addRecordatorio(Recordatorio recordatorio) {
		this.recordatorios.add(recordatorio);
	}
	public ConfigFichaPublica getFichaPublica() {
		return fichaPublica;
	}
	public void setFichaPublica(ConfigFichaPublica fichaPublica) {
		this.fichaPublica = fichaPublica;
	}
	public List<Mascota> getMascotas() {
		return mascotas;
	}
	public void setMascotas(List<Mascota> mascotas) {
		this.mascotas = mascotas;
	}
	public List<Mascota> getMascotasAtendidas() {
		return mascotasAtendidas;
	}
	public void setMascotasAtendidas(List<Mascota> mascotasAtendidas) {
		this.mascotasAtendidas = mascotasAtendidas;
	}
	public List<Mascota> getMascotasAsignadas() {
		return mascotasAsignadas;
	}
	public void setMascotasAsignadas(List<Mascota> mascotasAsignadas) {
		this.mascotasAsignadas = mascotasAsignadas;
	}
	public List<Mascota> getMascotasPendientes() {
		return mascotasPendientes;
	}
	public void setMascotasPendientes(List<Mascota> mascotasPendientes) {
		this.mascotasPendientes = mascotasPendientes;
	}
	public void addMascotaAsignada(Mascota mascota) {
		this.mascotasAsignadas.add(mascota);
	}
	public void addMascotaAtendida(Mascota mascota) {
		this.mascotasAtendidas.add(mascota);
	}
	public void addMascotaPendiente(Mascota mascota) {
		this.mascotasPendientes.add(mascota);
	}
}