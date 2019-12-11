package ttps.spring.model;

import enums.Rol;

public class TokenData {

	    private String token;
	    private int exp;
	    private String email;
	    private Rol rol;

		public TokenData() {
	    }

	    public TokenData(String token, int exp, String email, Rol rol) {
	        this.token = token;
	        this.exp = exp;
	        this.email = email;
	        this.rol = rol;
	    }

	    public Rol getRol() {
			return rol;
		}

		public void setRol(Rol rol) {
			this.rol = rol;
		}
	    
	    public String getToken() {
	        return token;
	    }

	    public void setToken(String token) {
	        this.token = token;
	    }

	    public int getExp() {
	        return exp;
	    }

	    public void setExp(int exp) {
	        this.exp = exp;
	    }

	    public String getEmail() {
	        return email;
	    }

	    public void setEmail(String email) {
	        this.email = email;
	    }
}

