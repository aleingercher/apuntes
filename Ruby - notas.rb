#%---------------------------------------------
#% block de notas RUBY
#%---------------------------------------------

#% NIL es lo mismo que NULL

#% Los metodos se terminan con !
#/      > Pepita.bailar! 

#% Y    =   &&
#% not  =   !


#% METODOS
    # Un método es, entonces, la descripción de qué
    # hacer cuando se recibe un mensaje del mismo nombre.

#% INTERFAZ
# es el conjunto de mensajes o metodos que un objeto entiende


#% REFERENCIAS
  # las variables conocidas son referencias explicitas a un objeto
  # los parámetros de los métodos ¡también son referencias! Sólo que su vida es más corta: viven lo que dure la evaluación del método en el que se pasan.

#/ Pepita e Iruya son objetos bien conocidos;
#/ @energia y @ciudad son atributos;
#/ y una_ciudad es un parámetro;
    #? IMPLICITA
      "ni hao".upcase # es una referencia implicita al objeto "ni hao"

    #? EXPLICITA
    saludoEnChino = "ni hao" # es una referencia EXPLICITA al objeto "ni hao"

    otro_saludo = "buen día" # se crea la variable otro_saludo que referencia al objeto "buen día"
    despedida = otro_saludo # se crea la variable despedida que, por asignarle la referencia otro_saludo, apunta al mismo objeto

    "buen día".equal? "buen día"  #=> false
    #! ambos son OBJETOS DISTINTOS. Cada vez que creamos un string creamos un NUEVO OBJETO


#> --------------- METODOS x CLASE --------------------------
#> ----------------------------------------------------------

#! GENERALES
#? puts loquequieraimprimir (log o print)
puts "Hola mundo!"
# Hola mundo!

#! STRINGS

#? .upcase 
#/ es para mayusculas

saludo = "hola"
saludo.upcase #--> "HOLA"


#! Metodos MATH

#? .abs 
#/absoluto

(-17).abs
#17


#? n.times 
#/sirve para repetir una operacion

3.times {self.regar! planta} # regaria 3 veces la planta


#! OBJETOS

#? .equal?
#/se fija se referencia al mismo objeto
"buen dia".equal? "buen dia"
  #false


#! COLECCIONES
numeros_aleatorios = [1,27,8,7,8,27,87,1]
algunos_numeros = [1, 2, 3, 4, 5]
numeros_de_la_suerte = [6, 7, 42]

#% LISTAS y SETS ..............
module Juegoteca
  @juegos = [CarlosDuty, TimbaElLeon, Metroide]
  def self.juegos
    @juegos
  end
end

#? .each (|bloque| func! ) ---> modifica la coleccion que le pase
#/ itera sobre cada elemento y llama la funcion para cada uno. Es el forEach
#! modifica la coleccion original
golondrinas.each { |una_golondrina| una_golondrina.volar_hacia! Iruya }


#? .count (bloque, func-> boolean) ---> numero
#/ nos dice cuántos elementos de una colección cumplen la condición. 
alumnos.count { |un_alumno| un_alumno.aprobo? }
# => cant

#? .sum (bloque, func-> numero ) ---> numero
#/ devuelve la suma de las funciones llamadas para cada elemento de la coleccion
alumnos.sum { |un_alumno| un_alumno.notaFinal }
# => suma


#? .map (bloque, boolean o atributo) ---> coleccion
#/ le paso una funcion y devuelve una coleccion con los valores que devuelva esa funcion
#/ map no modifica la colección original.
[Pepita, Norita].map { |una_golondrina| una_golondrina.energia }
# => [77, 52]

#/ tambien sirve para devolver evaluaciones valor por valor
numeros_aleatorios.map {|a| a > 10}
# => [false, true, false, false, false, true, true, false]


#? .all? (bloque, boolean) ---> boolean
#/ devuelve true si todos los elementos cumplen la condicion
alumnos.all? { |un_alumno| un_alumno.aprobo? }

#? .any? (bloque, boolean) ---> boolean
#/ devuelve true si ALGUNO de los elementos cumplen la condicion
alumnos.any? { |un_alumno| un_alumno.aprobo? }


#? .select (bloque, boolean) ---> coleccion
#/ recibe un elemento de la coleccion y un boolean y devuelve una nueva coleccion con los que cumplan la condicion

algunos_numeros.select { |un_numero| un_numero > 3 }
    # [4, 5]
    
#/ en una CLASE se define asi

  #/ aca el metodo va a devolver una coleccion 
  def self.juegos_violentos 
    #aca @juegos es una lista. Llamo |juego| a cada elemento de la misma.
    #como todas tienen el metodo violento?, hago esa "pregunta"
    @juegos.select { |juego| juego.violento? }
  end

#? .find (bloque, boolean) ---> elemento
#/ puede usarse indistintamente     .detect
#/ Devuelve el primer elemento que cumpla la condicion
#/ si no encuentra, devuelve 'nil'
algunos_numeros.find { |un_numero| un_numero > 3 }
  # 4


#? .push --> elemento
#/ (agrega un elemento al final)
#! modifica la coleccion original
numeros_de_la_suerte.push 9
  # Agrega el 9 a la lista...


#? .delete --> elementos
#/(borra o quita todos los elementos )
#! modifica la coleccion original
numeros_aleatorios.delete 27
  # ...y quita  todos los 27.


#? .include?  ---> boolean
#/(saber si un elemento está en la colección usando include?)
numeros_de_la_suerte.include? 6
  # Devuelve true, porque contiene al 6...
numeros_de_la_suerte.include? 8
  # ...devuelve false, porque no contiene al 8.


#? .size  ---> numero
#/(Cantidad de elementos que tiene)

numeros_de_la_suerte.size
  # Devuelve 3, porque contiene al 6, 42 y 9

#? .max
#devuelve el maximo valor
[-5, 7].max
#=> 7

#? .min
#devuelve el minimo valor
[-5, 7].min
#=> -5

#% solo LISTAS .................

#? .first  --> elemento
#/ retorna el primer elemento de la lista
numeros_de_la_suerte.first
  # 42


#? .last --> elemento
#/ retorna el ultimo elemento de la lista
numeros_de_la_suerte.last
  # 6


#? .index --> numero
#/ retorna la posicion de un elemento en una lista
numeros_de_la_suerte.index 7
  # 2

#% solo SETS .................
#? .to_set
#/ pasa una lista a set

numeros_aleatorios.to_set
  #<Set: {1, 27, 8, 7, 87}>

#> --------------- POO --------------------------------------
#> ----------------------------------------------------------

#? RELACIONES ENTRE CLASES
#% >> = Flecha llena
#% |> = Flecha vacia
#/ Existen 3 relaciones muy importantes:

#% DEPENDENCIAS
#/ Se representa con linea punteada que va al elemento del que se depende
#% -------------------->
#/ Son relaciones de uso. Cuando una clase "conoce" a otra.
#/ Es la relacion ams debil que puede existir entre dos clases.
#/ Generalmente sonm transitorias y de una sola direccion .
#/ Se lee como un "...usa un..."

# Ejemplo: Ventana USA a la clase EventoCerrarVentana


#% GENERALIZACIONES
#/ Conectan clases generales. Relaciones hijo/padre.


#% ASOCIACIONES
#/ Se representa con linea continua, nombre de la asociación, dirección del nombre
#%          ___________Juega_en_>>________________ 
#%  JUGADOR                                        EQUIPO
#%          ___________<< Empleado _______________
#/ Son relaciones de uso. Cuando una clase "conoce" a otra.
#/ Una asociación es una abstracción de los enlaces que existen entre instancias de objetos
#/ La asociación realmente significa que una clase trabaja con un objeto u objetos, de la otra clase en la forma de un atributo 
#/ Cada parte tiene un ROL.
#/ Muchas clases pueden conectar a una (Arquero, defensor, etc a Equipo).
#/ Agregacion se denomina a a una asociacion todo-parte, siendo una Clase el todo.
#/ Las clases se ASOCIAN. Los objetos se ENLAZAN. Se representa igual (Jugador se asocia con Equipo. Messi se enlaza con Barcelona.)

#? POLIMORFISMO
#/Decimos entonces que dos objetos son polimórficos cuando pueden responder a un mismo conjunto de mensajes y hay un tercer objeto que los usa indistintamente.

#/ o  Dos objetos son polimórficos para un tercer objeto cuando este puede enviarles los mismos mensajes, sin importar cómo respondan o qué otros mensajes entiendan.

#/ A veces se fuerza el polimorfismo, agregando un mensaje o metodo a un objeto para que sea polimorfico con el resto.

#? ENCAPSULAMIENTO
#/Si hacemos bien las cosas, quien use nuestros objetos sólo verá lo que necesite para poder interactuar con ellos. Es esencial para la separación de responsabilidades

#/En el caso de los atributos, esta exposición se logra implementando un getter (método que nos permite ver su valor) o un setter (método que nos permite modificar su valor). Y que nuestro código sea entendido fácilmente por otras personas, elegimos utilizar una convención para darle nombre a estos métodos.

#? HERENCIA
#* class CLASE < SUPERCLASE
#/ El símbolo < significa "hereda de": por ejemplo, Condor hereda de Ave, que está más arriba en la jerarquía. Otra manera de decirlo es que cada Condor es una Ave.
#/ Su principarl objetivo es evitar la repeticion de la logica



#> ---------------- CLASES!!  -------------------------------
#> ----------------------------------------------------------
#/ Se dice que son clases CONCRETAS porque se instancian
#/ Muchas veces son SUBCLASES de sus SuperClases

class Celular
#? CONSTRUCTOR     
    #* initialize
    #/ nos permite especificar cómo queremos que se inicialice la instancia de una clase. 

  #? vacio
  def initialize
    @saldo = 25
  end

  #? lleno
# o pedir que se defina cuando instancio la clase
  def initialize (plata, cat)
    @saldo = plata
    @categoria = cat.upcase
  end
  celular_de_ale = Celular.new 500, "Black"

  #luego cuando instancio la clase, le paso el valor, porque el new recibe parametros y lo pasa
  celular_de_naty = Celular.new 200 # ahi le estoy "cargando" $200 en el celu de naty

#? los GETTER tambien se declaran
  def saldo
    @saldo
  end

#? LOS METODOS NO SE ESCRIBEN CON EL self.
  def realizar_llamada!
    @saldo -= 5
  end

  def cargar_saldo! (pesos)
    @saldo += pesos
  end
end


#%-------------- SUPER CLASES ---------------
#/ clases que engloban otras clases
#/ Dispositivo seria una SuperClase, Celular y Notebook solo clases
#/ Se dice que son clases ABSTRACTAS, porque probablemente no se instancien nunca. Para que querria un objeto Dispositivo?? Solo sirven para dar comportamiento a sus SUBCLASES
#/ Sus metodos pueden sobreescribirse en la subclase. Es decir, si defino en Ave una clase volar!, pero en Condor tambien defino un metodo volar!, el que va a usar Condor es el que el mismo definio.
#* class CLASE < SUPERCLASE

class Ave
  def volar!
    @energia -= 20
  end

  # aca defino un metodo que pide a mi SUBCLASE que cree el metodo peso
  def vuelo_completo? kgs
    peso <= kgs
  end

  def gritar!
    "PI"
  end
 
end

class Condor < Ave # aca Ave es la SuperClase que engloba a Condor, o Halcon. Hereda volar!
  # defino el  peso en cada subclase para poder utilizar el metodo de la super clase
  def peso
    15
  end
  
  # este es un metodo propio de Ave
  def dormir!(minutos)
    @energia += minutos * 3
  end

  #? .super
  #/ Al utilizar super en el método de una subclase, se evalúa el método con el mismo nombre de su superclase.
  #/ Sirve para extender el metodo de la super clase y hacerle cambios
  #  Es importante que si la funcion de la SuperClase tenia argumentos, se los pase tambien a la subclase
  
  #/ aca "extiendo" el metodo gritar!
  def gritar!
    super + "piripipi"
  end
  # si llamara Condor.gritar!, devolveria "PIpiripipi"

end

#? la idea es poder luego recopilar informacion con esta super clase
dispositivos = [celular, notebook, smartwatch]
dispositivos.count { |dispositivo| dispositivo.descargado? }
# asi puedo chequear en todos a la vez si estan o no descargados. Podria preguntarme que me avise cuando quede uno solo cargado por ejemplo.


#> --------------- OBJETOS ----------------------------
#> ----------------------------------------------------
# los casos en los que un objeto puede conocer a otro son:

#    Cuando es un objeto bien conocido, como con los que veníamos trabajando hasta ahora
#    Cuando el objeto se pasa por parámetro en un mensaje (Juliana.atacar bouba, 4)
#    Cuando un objeto crea otro mediante el envío del mensaje new (con un CONSTRUCTOR DE CLASE)

#% a partir de CLASES creo INSTANCIAS
#/ las instancias comienzan con minusculas, como cualquier variable

celular_de_ale = Celular.new


#% OBJETOS BIEN CONOCIDOS (o well known objectos)
#/ los objetos bien conocidos comienzan con minusculas
module Norita

    #? ATRIBUTOS
    #  los atributos SON PRIVADOS POR DEFAULT
    # se accede por GETTERS y SETTERS

    # asi creo un atributo con valor default
    @energia = 100

    #? ESTADOS (parece que es solo de MUMUKI)
    # Conjunto de los atributos
    # Son siempre PRIVADOS


    #?   METODOS (terminan con !)
    #/ creo metodos con el SELF.
    #/ Luego del ! le paso parametros
    #/ el ! al final se usa cuando son metodos que hacen una accion

    #dentro del metodo
    def self.volar_en_circulos! parametro
        @energia = @energia - 10
        # o @energia -= 10
        @energia += parametro # aca pasan un numero como parametro
    end

    #?   GETTERS y SETTERS
    #/ GETter (mismo nombre que el atributo sin el @ inicial)

    def self.energia
        @energia
    end

    #/ cuando un estado devuelve BOOL se escribe con un ? al final
    def self.debil?
      @energia < 100 #/ esta pregunta devuelve un boolean y representa un estado
    end

    #/ SETters (terminan con =  )
    #Los setters deben llevar el mismo nombre del atributo al que están asociados, agregando un = al final.
    def self.ave=(un_ave)
      @ave = un_ave
    end    
end


#> --------------- BLOQUES  (o funciones??)----------------------------------
#> ----------------------------------------------------------
#/Los bloques no son objetos, pero pueden convertirse en ellos gracias a la clase Proc.
#/ son objetos que representa un mensaje o secuencia SIN EJECUTAR.
#? Definicion ... proc {}.call
un_numero = 3
otro_numero = 5

#/ si no uso el .call, no se ejecuta. un_numero luego de esta linea sigue valiendo 3
incrementador = proc {un_numero = un_numero + 1}

#? .call 
#/ le indica que evalúe la secuencia de envíos de mensajes dentro de él.

duplicador = proc {otro_numero = otro_numero * 2}
duplicador.call
  # otro_numero vale 10 ahora, porque al usar el .call, se ejecuta el bloque


#? pasandole parametros. Van entre |parametro1, parametro2, etc|
sumar_a_otros_dos = proc { |un_sumando, otro_sumando| un_numero = un_numero + un_sumando + otro_sumando }
#                               1            2

#le agrego el call, y paso los dos parametros del bloque
sumar_a_otros_dos.call(1,2)



#> --------------- CONDICIONALES ----------------------------
#> ----------------------------------------------------------

#?      IF  ELSE ELSIF
module Jardinero
    def self.cuidar!(planta)
      if planta.necesita_agua?
        3.times { self.regar! planta }
      elsif
        self.rascarse!
      else
        self.sacar_bichos! planta
      end
    end
  end

#> --------------- ARRAYS -----------------------------------
#> ----------------------------------------------------------

#? DECLARACION DE UN ARRAY
nombreARRAY = %w(
  elemento1
  elemento2
  etc
)

#> --------------- COLECCIONES ------------------------------
#> ----------------------------------------------------------
#? LISTA
#/ si admiten elementos repetidos
#/ estan ordenados
module Juegoteca
  @juegos = [CarlosDuty, TimbaElLeon, Metroide]
  def self.juegos
    @juegos
  end
end

#? SET
#/ no admiten elementos repetidos
#/ no tienen un orden determinado

<Set: {1, 27, 8, 7, 87}>


#> ------------------- ERRORES ------------------------------
#> ----------------------------------------------------------
#/ Para forzar un error se usa el mensaje
#? raise
#/ cuando se lanzan, pueden abortar también la evaluación de todos los métodos de la cadena de envío de mensajes

def debitar!(monto)
  if monto > @saldo
    raise "No se puede debitar, porque el monto es mayor al saldo"
  end

  @saldo -= monto  # esto no se llega a ejecutar, porque el raise corta el flujo del programa
end


