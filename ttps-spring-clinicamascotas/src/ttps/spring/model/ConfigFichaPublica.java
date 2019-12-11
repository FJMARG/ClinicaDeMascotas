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
	private boolean nombreDueño;
	private boolean apellidoDueño;
	private boolean emailDueño;
	private boolean telefonoDueño;
	private boolean nombreMascota;
	private boolean fechaNacimientoMascota;
	private boolean especieMascota;
	private boolean razaMascota;
	private boolean sexoMascota;
	private boolean colorMascota;
	private boolean señasMascota;
	private boolean fotoMascota;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public boolean isNombreDueño() {
		return nombreDueño;
	}
	public void setNombreDueño(boolean nombreDueño) {
		this.nombreDueño = nombreDueño;
	}
	public boolean isApellidoDueño() {
		return apellidoDueño;
	}
	public void setApellidoDueño(boolean apellidoDueño) {
		this.apellidoDueño = apellidoDueño;
	}
	public boolean isEmailDueño() {
		return emailDueño;
	}
	public void setEmailDueño(boolean emailDueño) {
		this.emailDueño = emailDueño;
	}
	public boolean isTelefonoDueño() {
		return telefonoDueño;
	}
	public void setTelefonoDueño(boolean telefonoDueño) {
		this.telefonoDueño = telefonoDueño;
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
	public boolean isSeñasMascota() {
		return señasMascota;
	}
	public void setSeñasMascota(boolean señasMascota) {
		this.señasMascota = señasMascota;
	}
	public boolean isFotoMascota() {
		return fotoMascota;
	}
	public void setFotoMascota(boolean fotoMascota) {
		this.fotoMascota = fotoMascota;
	}
}
