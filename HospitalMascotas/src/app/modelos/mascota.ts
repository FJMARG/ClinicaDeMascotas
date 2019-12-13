import { Usuario } from './usuario';

export class Mascota {
    
    private nombre: string;
    private fechaNacimiento: string;
    private especie: string;
    private raza: string;
    private sexo: CharacterData;
    private color: string;
    private senas: string;
    private foto: string;
    private dueno: Usuario;
    private veterinario: Usuario;
    private visitas: string;

    
    constructor (nombre: string, fechaNacimiento: string, especie: string, raza: string, sexo: CharacterData, color:string, senas: string, foto: string, dueno: Usuario, veterinario: Usuario){
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.especie = especie;
        this.raza = raza;
        this.sexo = sexo;
        this.color = color;
        this.senas = senas;
        this.foto = foto;
        this.dueno = dueno;
        this.veterinario = veterinario;
        this.visitas = null;
    }
    public getVeterinario(): Usuario {
        return this.veterinario;
    }

    public setVeterinario(value: Usuario) {
        this.veterinario = value;
    }

    public getVisitas(): string {
        return this.visitas;
    }

    public setVisitas(value: string) {
        this.visitas = value;
    }

    public getDueno(): Usuario {
        return this.dueno;
    }

    public setDueno(value: Usuario) {
        this.dueno = value;
    }
    public getFoto(): string {
        return this.foto;
    }

    public setFoto(value: string) {
        this.foto = value;
    }
    public getSenas(): string {
        return this.senas;
    }

    public setSenas(value: string) {
        this.senas = value;
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
