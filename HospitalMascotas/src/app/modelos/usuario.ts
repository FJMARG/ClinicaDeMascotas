import { Clinica } from './clinica';
import { ConfigFichaPublica } from './config-ficha-publica';

export class Usuario {
    
    private nombre: string;
    private apellido: string;
    private telefono: string;
    private email: string;
    private password: string;
    private rolUsuario: string;
    private clinica: Clinica;
    private fichaPublica: ConfigFichaPublica;
    
    public getFichaPublica(): ConfigFichaPublica {
        return this.fichaPublica;
    }
    
    public setFichaPublica(value: ConfigFichaPublica) {
        this.fichaPublica = value;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(value: string) {
        this.apellido = value;
    }

    public getTelefono(): string {
        return this.telefono;
    }

    public setTelefono(value: string) {
        this.telefono = value;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(value: string) {
        this.email = value;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(value: string) {
        this.password = value;
    }

    public getRolUsuario(): string {
        return this.rolUsuario;
    }

    public setRolUsuario(value: string) {
        this.rolUsuario = value;
    }

    public getClinica(): Clinica {
        return this.clinica;
    }

    public setClinica(value: Clinica) {
        this.clinica = value;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(value: string) {
        this.nombre = value;
    }

}
