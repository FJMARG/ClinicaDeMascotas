package ttps.spring.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.stereotype.Component;
@Entity
@Component
public class ConfigFichaPublica {
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private boolean nombreDueno;
	private boolean apellidoDueno;
	private boolean emailDueno;
	private boolean telefonoDueno;
	private boolean nombreMascota;
	private boolean fechaNacimientoMascota;
	private boolean especieMascota;
	private boolean razaMascota;
	private boolean sexoMascota;
	private boolean colorMascota;
	private boolean senasMascota;
	private boolean fotoMascota;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public boolean isNombreDueno() {
		return nombreDueno;
	}
	public void setNombreDueno(boolean nombreDueno) {
		this.nombreDueno = nombreDueno;
	}
	public boolean isApellidoDueno() {
		return apellidoDueno;
	}
	public void setApellidoDueno(boolean apellidoDueno) {
		this.apellidoDueno = apellidoDueno;
	}
	public boolean isEmailDueno() {
		return emailDueno;
	}
	public void setEmailDueno(boolean emailDueno) {
		this.emailDueno = emailDueno;
	}
	public boolean isTelefonoDueno() {
		return telefonoDueno;
	}
	public void setTelefonoDueno(boolean telefonoDueno) {
		this.telefonoDueno = telefonoDueno;
	}
	public boolean isNombreMascota() {
		return nombreMascota;
	}
	public void setNombreMascota(boolean nombreMascota) {
		this.nombreMascota = nombreMascota;
	}
	public boolean isFechaNacimientoMascota() {
		return fechaNacimientoMascota;
	}
	public void setFechaNacimientoMascota(boolean fechaNacimientoMascota) {
		this.fechaNacimientoMascota = fechaNacimientoMascota;
	}
	public boolean isEspecieMascota() {
		return especieMascota;
	}
	public void setEspecieMascota(boolean especieMascota) {
		this.especieMascota = especieMascota;
	}
	public boolean isRazaMascota() {
		return razaMascota;
	}
	public void setRazaMascota(boolean razaMascota) {
		this.razaMascota = razaMascota;
	}
	public boolean isSexoMascota() {
		return sexoMascota;
	}
	public void setSexoMascota(boolean sexoMascota) {
		this.sexoMascota = sexoMascota;
	}
	public boolean isColorMascota() {
		return colorMascota;
	}
	public void setColorMascota(boolean colorMascota) {
		this.colorMascota = colorMascota;
	}
	public boolean isSenasMascota() {
		return senasMascota;
	}
	public void setSenasMascota(boolean senasMascota) {
		this.senasMascota = senasMascota;
	}
	public boolean isFotoMascota() {
		return fotoMascota;
	}
	public void setFotoMascota(boolean fotoMascota) {
		this.fotoMascota = fotoMascota;
	}
}
