export class Recordatorio {
        
    private descripcion: string;
    private fecha: Date;
    
    public getDescripcion(): string {
        return this.descripcion;
    }

    public setDescripcion(value: string) {
        this.descripcion = value;
    }

    public getFecha(): Date {
        return this.fecha;
    }

    public setFecha(value: Date) {
        this.fecha = value;
    }
}
