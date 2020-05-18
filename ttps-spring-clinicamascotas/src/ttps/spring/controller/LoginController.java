package ttps.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ttps.spring.clasesDAO.UsuarioDAO;
import ttps.spring.model.LoginFormData;
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
    private final int EXPIRATION_IN_SEC = 7200;

    @PostMapping(path = "/auth")
    public ResponseEntity<?> authenticate(@RequestBody LoginFormData form) {
    	Usuario u = usuarioDAO.recuperar(form.getEmail());
        if(u != null && u.getPassword().equals(form.getPassword())) {
            String token = tokenServices.generateToken(form.getEmail(), u.getRolUsuario(), u.getId(), EXPIRATION_IN_SEC, u.isVeterinarioValido());
            return ResponseEntity.ok(new TokenData(token, EXPIRATION_IN_SEC, form.getEmail(),u.getRolUsuario(), u.getId(), u.isVeterinarioValido()));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuario o password incorrecto");
        }
    }


}
