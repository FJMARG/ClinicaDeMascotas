export class TokenData {
   
    private email: string;
    private rol: string;
    private token?: string;
    
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
