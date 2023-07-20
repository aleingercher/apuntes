# JSP
- Requiere un servidor web compatible con **servlet** como Tomcat o Glassfish
``` jsp
<% String saludar = "Hola mundo desde Java" %> // declaro una variable
<%= saludar %> // la muestro
<%!    %> // esto sirve para declaracion de variables y metodos de instancia COMPARTIDOS entre varios JSP, asociados a un mismo servlet
```

# SERVLET
- Es una clase especial de Java **INTERMEDIARIO** entre un JSP y un servidor web.
- Recibe peticiones y maneja la respuesta
- Suele usarse un servlet por cada clase java.
- funciona con **protocolo http**
- Desde el JSP ejecutamos alguno de los metodos del servlet para conectarlo con el server.
- Podemos generar codigo HTML desde el mismo Servlet o desde un JSP.


## Metodos propios
Ambos estan heredados desde **HttpServlet**

### processRequest()
Sirve para mandar codigo HTML por medio de System.out.pprintln!!!

### doGet(request, response)
Recibe las solicitudes GET

### doPost(request, response)

### request.getParameter()
Obtengo el valor de un parametro via GET o POST
```java
String dato = request.getParameter("nombre");
```


## Pasos para crearlo
1. Voy a Source Packages
2. Creo un nuevo paquete --> Servlets
3. Click der --> New --> Servlet

## Asi se ve
```java
@WebServlet(name = "SvUsuarios", urlPatterns = {"/SvUsuarios"})
public class SvUsuarios extends HttpServlet {

}
```

## Asi lo llamo desde un JSP
```JSP
<form action="SvUsuarios" method="POST">
</form>
```

```java
protected void doPost(HttpServletRequest request,HttpServletRequest response ){
    String dni = request.getParameter("dni");
}
```

## asi lo muestro con el doGet
```java
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("Hola desde el GET");
        
        List<Usuario> listaUsuarios = new ArrayList();
        listaUsuarios.add(new Usuario("303030", "ale"));
        listaUsuarios.add(new Usuario("5050", "azul"));
        
        HttpSession misesion = request.getSession();
        misesion.setAttribute("listaUsuarios", listaUsuarios);
        
        response.sendRedirect("mostrarUsuarios.jsp");
    }
```
```jsp
    <body>
        <h1>Lista de usuarios registrados</h1>
        <% 
            List<Usuario> listaUsuarios = (List) request.getSession().getAttribute("listaUsuarios");
            int cont = 1;
            for(Usuario usu: listaUsuarios){
        %>
        <p>Cliente N°<%=cont%> </p>
        <p>Dni <%=usu.getDni()%> </p>
        <p>Nombre <%=usu.getNombre()%> </p>
        <hr>
        <% cont++; %>
        <%                
            }
        %>
    </body>
```