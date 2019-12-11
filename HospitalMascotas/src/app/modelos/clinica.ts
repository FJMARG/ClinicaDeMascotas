export class Clinica {
    private nombre: String;
    public getNombre(): String {
        return this.nombre;
    }
    public setNombre(value: String) {
        this.nombre = value;
    }
	private direccion: String;
    public getDireccion(): String {
        return this.direccion;
    }
    public setDireccion(value: String) {
        this.direccion = value;
    }
}
