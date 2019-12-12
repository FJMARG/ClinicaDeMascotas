export class TokenData {
   
    email: string;
    rol: string;
    id:number;
    exp:number;
    token?: string;
    
    public getExp(): number {
        return this.exp;
    }

    public setExp(value: number) {
        this.exp = value;
    }

    public getId(): number {
        return this.id;
    }

    public setId(value: number) {
        this.id = value;
    }

    public getEmail(): string {
        return this.email;
    }
    
    public setEmail(value: string) {
        this.email = value;
    }
    
    public getRol(): string {
        return this.rol;
    }
   
    public setRol(value: string) {
        this.rol = value;
    }
    
    public getToken(): string {
        return this.token;
    }
   
    public setToken(value: string) {
        this.token = value;
    }
    
}
