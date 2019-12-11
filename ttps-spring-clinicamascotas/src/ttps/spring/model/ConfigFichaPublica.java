package ttps.spring.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.springframework.stereotype.Component;
@Entity
@Component
public class ConfigFichaPublica {
	@Id @GeneratedValue
	private long id;
	private boolean nombreDue�o;
	private boolean apellidoDue�o;
	private boolean emailDue�o;
	private boolean telefonoDue�o;
	private boolean nombreMascota;
	private boolean fechaNacimientoMascota;
	private boolean especieMascota;
	private boolean razaMascota;
	private boolean sexoMascota;
	private boolean colorMascota;
	private boolean se�asMascota;
	private boolean fotoMascota;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public boolean isNombreDue�o() {
		return nombreDue�o;
	}
	public void setNombreDue�o(boolean nombreDue�o) {
		this.nombreDue�o = nombreDue�o;
	}
	public boolean isApellidoDue�o() {
		return apellidoDue�o;
	}
	public void setApellidoDue�o(boolean apellidoDue�o) {
		this.apellidoDue�o = apellidoDue�o;
	}
	public boolean isEmailDue�o() {
		return emailDue�o;
	}
	public void setEmailDue�o(boolean emailDue�o) {
		this.emailDue�o = emailDue�o;
	}
	public boolean isTelefonoDue�o() {
		return telefonoDue�o;
	}
	public void setTelefonoDue�o(boolean telefonoDue�o) {
		this.telefonoDue�o = telefonoDue�o;
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
	public boolean isSe�asMascota() {
		return se�asMascota;
	}
	public void setSe�asMascota(boolean se�asMascota) {
		this.se�asMascota = se�asMascota;
	}
	public boolean isFotoMascota() {
		return fotoMascota;
	}
	public void setFotoMascota(boolean fotoMascota) {
		this.fotoMascota = fotoMascota;
	}
}
