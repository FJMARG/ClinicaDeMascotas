package tests;

import java.util.Dictionary;
import java.util.Enumeration;
import java.util.Hashtable;

public class TestQueryConDiccionarios {

	public static void main(String[] args) {
		Dictionary <String, String> d = new Hashtable<String, String>();
		d.put("raza", "Salchicha");
		d.put("especie","Perro");
		d.put("color", "Verde");
		// Se manda por parametro al metodo de consulta el diccionario
		
		// Recibo el parametro en el metodo de consulta y hago lo siguiente para generarla
		if (!d.isEmpty()) {
			Enumeration<String> elements = d.elements();
			Enumeration<String> keys = d.keys();
			String filter = " where e."+keys.nextElement()+" like '%"+elements.nextElement()+"%'";
			while(keys.hasMoreElements()) {
				filter=filter+" and e."+keys.nextElement()+" like '%"+elements.nextElement()+"%'";
			}
			String q = "select e from tabla"+filter;
			System.out.println(q);
		}
		
	}

}
