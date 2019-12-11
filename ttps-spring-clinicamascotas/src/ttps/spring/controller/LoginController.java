package ttps.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ttps.spring.clasesDAO.UsuarioDAO;
import ttps.spring.model.TokenData;
import ttps.spring.model.Usuario;
import ttps.spring.services.TokenServices;

@RestController
public class LoginController {

    @Autowired
    private UsuarioDAO usuarioDAO;

    @Autowired
    private TokenServices tokenServices;

    // 20 mins
    private final int EXPIRATION_IN_SEC = 1200;

    @PostMapping(path = "/auth")
    public ResponseEntity<?> authenticate(@RequestBody String email, @RequestBody String pass) {
    	Usuario u = usuarioDAO.recuperar(email);
        if(u != null && u.getPassword().equals(pass)) {
            String token = tokenServices.generateToken(email, u.getRolUsuario(), EXPIRATION_IN_SEC);
            return ResponseEntity.ok(new TokenData(token, EXPIRATION_IN_SEC, email,u.getRolUsuario()));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuario o password incorrecto");
        }
    }


}
