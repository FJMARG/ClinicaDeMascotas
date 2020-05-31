package ttps.spring.filters;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;

import ttps.spring.services.TokenServices;

/**
 * Servlet Filter implementation class JWTFilter
 */

/* Setear bien la url */

@WebFilter("/*")
public class JWTFilter implements Filter {

	@SuppressWarnings("unused")
	private FilterConfig filterConf;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        this.filterConf = filterConfig;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        
        
        String[] temp = req.getRequestURI().split("/");
        String id = temp[temp.length - 1];
        String url = "/ttps-spring-clinicamascotas/mascota/"+id;
        
        // El login del usuarios es publico
        System.out.println(req.getRequestURI());
        if ("/ttps-spring-clinicamascotas/auth".equals(req.getRequestURI()) || "/ttps-spring-clinicamascotas/usuario".equals(req.getRequestURI()) || url.equals(req.getRequestURI()) || HttpMethod.OPTIONS.matches(req.getMethod())) {
            chain.doFilter(request, response);
            return;
        }
        
        String token = req.getHeader(HttpHeaders.AUTHORIZATION);

        if (token == null || !TokenServices.validateToken(token)) {
            HttpServletResponse res = (HttpServletResponse) response;
            res.setStatus(HttpStatus.FORBIDDEN.value());
            return;
        }

        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {
        this.filterConf = null;
    }

}
