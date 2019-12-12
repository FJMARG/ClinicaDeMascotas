import { Usuario } from './usuario';

export class Mascota {
    
    private nombre: string;
    private fechaNacimiento: string;
    private especie: string;
    private raza: string;
    private sexo: CharacterData;
    private color: string;
    private señas: string;
    private foto: string;
    private dueño: Usuario;
    private veterinario: Usuario;
    private visitas: string;

    
    constructor (nombre: string, fechaNacimiento: string, especie: string, raza: string, sexo: CharacterData, color:string, señas: string, foto: string, dueño: Usuario, veterinario: Usuario){
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.especie = especie;
        this.raza = raza;
        this.sexo = sexo;
        this.color = color;
        this.señas = señas;
        this.foto = foto;
        this.dueño = dueño;
        this.veterinario = veterinario;
        this.visitas = null;
    }
    public getVeterinario(): Usuario {
        return this.veterinario;
    }

    public setVeterinario(value: Usuario) {
        this.veterinario = value;
    }
    public getDueño(): Usuario {
        return this.dueño;
    }

    public setDueño(value: Usuario) {
        this.dueño = value;
    }
    public getFoto(): string {
        return this.foto;
    }

    public setFoto(value: string) {
        this.foto = value;
    }
    public getSeñas(): string {
        return this.señas;
    }

    public setSeñas(value: string) {
        this.señas = value;
    }
    public getColor(): string {
        return this.color;
    }

    public setColor(value: string) {
        this.color = value;
    }
    public getSexo(): CharacterData {
        return this.sexo;
    }

    public setSexo(value: CharacterData) {
        this.sexo = value;
    }
    public getRaza(): string {
        return this.raza;
    }

    public setRaza(value: string) {
        this.raza = value;
    }
    public getEspecie(): string {
        return this.especie;
    }

    public setEspecie(value: string) {
        this.especie = value;
    }
    public getFechaNacimiento(): string {
        return this.fechaNacimiento;
    }

    public setFechaNacimiento(value: string) {
        this.fechaNacimiento = value;
    }
    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(value: string) {
        this.nombre = value;
    }


}
