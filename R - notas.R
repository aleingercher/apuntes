num = c(1:100)
pares = seq(2,100,2)
impares = seq(1,100,2)
rand = c(65,18,608,68,58,9,6,1,68,62,5,8,100,41,181,10,1,8,53,4,81)
nombres = c('carlos', 'martin', 'azul', 'ale', 'nati', 'pablo', 'mati', 'martin', 'fer', 'flor', 'norma')
nombre_y_apellido = c('Ale Ingercher', 'Azul Ingercher', 'Natalia Rocca', 'Matias Risi', 'Flor Sabbione', 'Nano', 'Mama')
frase = 'Lo esencial es invisible a los ojos   '
azu = as.Date('2013-10-20')
ale = '1983-11-08'
naty = as.Date('1975-09-22')
bool = c(T,F,T,T,T,T,F,F,F,T,T,T,F)
vec=c(10,9,8,7,6,5,4,3,2,1)
vec1=c('hola','chau','buen dia','como estas')
vec2=c(T,T,T,F,F,FALSE,TRUE,FALSE,TRUE)
dftips <- reshape2::tips
baby <- babynames

nombre_y_apellido <-  gsub('Ingercher','pedrozo', nombre_y_apellido)

sort(nombres)

apellidos <- c('ingercher', 'rocca', 'woloszyn')

View(apellidos)

APELLIDOS = toupper(apellidos)

##### PROPIAS ######
vocales <- function(frase){  # sirve para limpiar de puntuacion un str
   frase <- tolower(frase)
   frase <- gsub('á', 'a', frase)
   frase <- gsub('é', 'e', frase)
   frase <- gsub('í', 'i', frase)
   frase <- gsub('ó', 'o', frase)
   frase <- gsub('ú', 'u', frase)
   frase <- gsub('\\.', '' , frase)
   frase <- gsub('\\,', '' , frase)
   frase <- gsub(': ', ' ' , frase)
   frase <- gsub('; ', ' ' , frase)
   frase <- gsub("'", ' ' , frase)
   frase <- gsub('\\/', '', frase)
   frase <- gsub('"', '' , frase)
   frase <- gsub("\\' ", '' , frase)
   frase <- gsub('_', ' ' , frase)
   frase <- gsub('-', ' ' , frase)
   frase <- gsub('<i>', ' ' , frase)
   frase <- gsub('<br>', ' ' , frase)
   
   return(frase)
}

mayus <- function(x){   # para poner mayuscula la primera letra
   return(paste0(toupper(substring(x,1,1)),substring(x,2)))
}

CapStr <- function(y) {   # poner mayuscula a todas las letras de cada observacion
   c <- strsplit(y, " ")[[1]]
   paste(toupper(substring(c, 1,1)), substring(c, 2), sep = '', collapse=" ")
}


##### LIBRERIAS #####

library(tidyverse)
library(tidytext)
library(ggraph)
library(igraph)
library(scales)
library(ggplot2)
library(plotly)
library(ggrepel) # para evitar superposicion de textos 
library(here) 
library(htmltools)
library(jsonlite) # para extraer data de .json
library(leaflet)  # mapas
library(lubridate) # formato a fechas
library(reshape2) # db tips
library(skimr)
library(shiny)
library(rfm) # sirve para hacer analisis RFM
library(treemapify)  # para visualizar RFM
library(hrbrthemes) # sirve para usar espacios de color para presentaciones ggplot2


install.packages('igraph')
install.packages('scales')
install.packages('ggraph')
install.packages('plotly')
install.packages('ggrepel') # para evitar superposicion de textos 
install.packages('here') 
install.packages('htmltools')
install.packages('jsonlite') # para extraer data de .json
install.packages('leaflet')  # mapas
install.packages('lubridate') # formato a fechas
install.packages('reshape2') # db tips
install.packages('skimr')
install.packages('shiny')
install.packages('rfm') # sirve para hacer analisis RFM
install.packages('treemapify')  # para visualizar RFM
install.packages('hrbrthemes') # sirve para usar espacios de color para presentaciones ggplot2

# datasets
library(nycflights13)

skimr::n_unique(df)


### borrar

# todo el environment
rm(list = ls())

# items individuales
rm(num)

rm(num,pares)


### Directorios de trabajo. Para windows reemplazar estas barras \ por estas /

# directorio actual
getwd()

# cambio el directorio actual
setwd()

# muestra el contenido del directorio actual
dir()

# crea una carpeta en el directorio actual
dir.create('BORRAR AHORA')


      #####  GENERAL  ######

lapply(X, FUN) # sirve para aplicar la funcion FUN a las observaciones del vector o var en la df X
# ej. lapply(var1, as.character)





       ### STRINGS ####

### paste.  sep es opcional. Al pastear un Int, lo transformo en str

head(df,n) # trae los primeros n valores
tail(df,n) # trae los ultimos n valores

paste('Hola', 'mundo', sep = '%')

# sin espacio en el medio
paste0('Hola', '\nmundo')

print(paste0(a, b))

a = 'perro'
b = '\nciudad'

cat(a,b) # concatena e imprime

\n es para nueva linea


# extraer partes de str
substr(frase, 5, 10)

tolower(frase)

toupper(frase)

# borra los espacios al principio y al final de un str
trimws(frase)

# reemplazo caracteres o str
gsub('ojos', 'ortos', frase)

grepl('ale', nombres)  # busca strings o substrings en variables y devuelve un BOOL. la l es de list?

grep('ale', nombres, value = F) # con VALUE = T, 
                                                # devuelve las observaciones enteras, sino solo la posicion

# contar caracteres en una frase
nchar(frase)

# si lo uso en un vector de str, me devuelve cuantos caracteres tiene cada observacion
nchar(nombres)

# hacer un apocope de una frase, palabra o vector de caracteres
abbreviate(frase)
abbreviate('Alejandro')
abbreviate(nombres)


     ### paquete STRINGR  #####
str_count(frase, 'es')

# devuelve T or F si encuentra 
str_detect(frase,'\\s')

   # [:digits:]   =  \\d
   # [:alpha:]    =  \\a


### warnings / Tira todos los warnings juntos
warning()






      ### FECHAS ####

# el formato default es  '%Y-%m-%d'

# tira la fecha actual
Sys.Date()
o
date()

# tira la fecha, con hora y zona horaria
Sys.time()

# dia de la semana o mes
weekdays(naty)

months(ale)


# pasar caracteres a clase Date
as.Date('2010-02-05')

# puedo ponerlo en otro formato, pero aclararlo luego
as.Date('25/10/2005', format ('%d/%m/%Y'))


#!#!#!# las operaciones entre fechas tienen class(difftime). Puedo pasarlas a numero asi

azu - naty
ale - naty

as.numeric(azu - naty, units = 'days')

o

as.numeric(azu - naty, units = 'weeks')




    ### ARITMETICA ####

# resto. Sirve en general para buscar numeros pares
# si
(105 %% 2) == 1 # ------- si es TRUE, es impar, si es FALSE, es par

25 %% 4

sample(n, cant) # numero RANDOM entre 1 y n, dame tanta cant
                # se usa para sacar muestras de valores random
                # muestra <- df %>% 
                 #            filter(rownames(df) %in% sample(nrow(df), 10000))

sample(10:18,18, replace = T) # el replace es para que complete
                              # va a hacer 18 veces un random de 10 a 18


     ### BOOLEANS ###

# aritmeticamente, T o TRUE es igual a 1. F o FALSE es igual a 0

# devuelve si un objeto esta incluido en un vector o conjunto
'azul' %in% nombres

# el simbolo ! es un NOT
!('azul' %in% nombres)





    ### VECTORES  ####

# Vectores Numericos
vec+1
vec*2
vec%%2
vec_com=vec*1.2/100
total=sum(vec)

# Vectores strings
vec1
vec1s=substr(vec1,1,1)

# Vectores bool
vec2
sum(vec2)

# TRUE  = 1
# FALSE = 0

     # Tipos de funciones
length(bool)

# puedo cambiar el NOMBRE de los valores de un vector
names(vec1) = c('uno', 'dos', 'tres', 'cuatro')

order(nombres) # indice
#[1] 8 2 9 3 1 4 5 6 7

sort(nombres) # por valor
#[1]  0  3  3  4  5  7  8  9 10

sort(vec1s,decreasing = TRUE)

sort(table(rand))

order(rand)

sample(6, 5, TRUE, NULL)

table(rand) # Funcion TABLE. Muestra los items ordenados y la cantidad de apariciones

round(prop.table(table(rand)),2)

prop.table(table(rand)) #sirve para ver rapido las proporciones de apariciones
# o
proportions(table(rand))


rm(list=ls())

# Elimino duplicados / valores unicos de un conjunto de datos
y=c(10,10,20,20,30,30,40,40,50,50)
y_=unique(rand)

# Concatenar elementos
y1=c(90,91,92,93)
# y=c(10,10,20,20,30,30,40,40,50,50,90,91,92,93)
y=c(y,y1,c(0,1,2,3))


rm(list=ls())
abc=letters

# Un elemento 10 letra j
abc[10]

# Elementos adyacentes
abc[5:8]

# Elemento 10 hasta el final
abc[3:length(abc)]

# Pos no adyacentes 20, 10, 3
abc[c(20,10,3)]


x=c(20,40,50,60,70,90,200,400,1300,400,500,10,20,4,3)
x[2:4]

x[length(x)]

length(x)

#c(20,40,50,60,70,90,200,400,1300,400,500,10,20,4,3)
#c(20,40,50,60,70,90,200,10,20,4,3)
#c(20,40,50,60,70,90,200,x,x,x,x,10,20,4,3)
xr=c(T,T,T,T,T,T,T,F,F,F,F,T,T,T,T)

xr1 = sum(xr == 1)
table(xr)

# 1. Armar pregunta: True/False
# 2. Colocar la pregunta en los corchetes
# Resultado: Me quedo con todos los TRUE

mayor300=x[x>300 | x==40] #>,<,<=,>=

Iguales400=x[x==400]
sum(x==400)
sum(x>300 | x==40)
Distintos400=x[x!=400]

Intervalo100_400=x[x %in% 100:400]
Intervalo_def=x[x  %in%  c(300,400,1200,3) ]
Intervalo_def_con= x[!(x  %in%  c(300,400,1200,3))]

## PUEDO REEMPLAZAR VALORES EN UN VECTOR

vec[vec <5] = 1

nombres[nombres %in% nombres] = 'NOMBRES CON A'
nombres

rm(list=ls())

# valores NA en vectores

x=c(20,40,50,60,70,90,NA,NA,NA,400,500,10,20,4,NA)
x1=c(20,40,50,60,70,90,200,400,1300,400,500,10,20,4,3)
sum(x)
sum(x1)

x2 = x[!(is.na(x))]

sum(x2)

# x3 = x, na.rm=T


#               esto  tantas   cuantas   hasta que numero lleno. 
# puedo repetir (x,     n    , each = , times = ,)
rep(1:4, each = 2, len = 10)   # 8 integers plus two recycled 1's.
rep(1:4, each = 2, times = 3) 
rep(1:4, 2)


       #### DATAFRAMES ####

# importar dataframes

laliga <- read.csv('https://raw.githubusercontent.com/jalapic/engsoccerdata/master/data-raw/spain.csv',
                   header = T,
                   stringsAsFactors = F,
                   encoding = 'UTF-8')

#o 

calcio <- readr::read_csv('https://raw.githubusercontent.com/jalapic/engsoccerdata/master/data-raw/italy.csv')


# formas de hechar un vistazo

glimpse(laliga)

summary(laliga)

skimr::skim(laliga)

view(head(laliga),5)

str(laliga)


# cambiar nombres de las columnas
names(data)=c('Altura','PESO','SEXO')

nrow(tips) # numero de filas de un df

ncol(tips) # numero de columnas de un df

dim(tips) # FC. Filas Columnas

# Nombres de filas
row.names(tips) # =c('a1','a2','a3','a4','a5')

# Columnas nuevas

data$Fecha = Sys.time()
data$SEXO = NULL # esto borra una columna
data$sexo = c('M','M','F','F','F')


# contar items en columna
tips %>% 
   count(day, sort = T)

# o

tips %>% 
   group_by(smoker,sex) %>% 
   tally(sort = T)



# unir DF

cbind(df1, df2) # une df por columnas. Debe tener misma cantidad de rows
rbind(df1, df2) # une df por rows. debe tener misma cantidad de columnas

union()
union_all()


# crear archivos .csv

# csv ignora el separador
write.csv(iris,'iris.csv',row.names = F,sep='@')

# table puedo colocarle un separador
write.table(iris,'iris.csv',row.names = F,sep = '@') # ESTA ES LA QUE VA!



complete.cases(df) # devuelve un BOOL con un FALSE donde encuentra filas con NA
                   # df_null <- df %>% filter(!complete.cases(df))
                   # esto sirve para que devuelva las filas incompletas





        #####   GRAFICOS   #####

ggplot(data, aes(x, y, color, fill,shape))


library(treemapify)


ggplot(aes(area = n,
           fill = segment,
           label=paste0(toupper(segment),'\n[',n,']'))) +
   geom_treemap(color='black',show.legend = F)+
   geom_treemap_text(colour = "#123456", 
                     place = "centre", grow = T)


# para personalizar la paleta de colores

rfm_result %>%
   count(segment) %>%
   ggplot(aes(area = n,
              label=paste0(toupper(segment),'\n[',n,']')))+
   geom_treemap(color='black',
                show.legend = F,
                aes(fill = n))+
   geom_treemap_text(colour = "black", 
                     place = "top", 
                     grow = T)+
   scale_fill_gradient(low = '#ffddd2',
                       high = '#5f0f40')



       ##### TIDYVERSE   #####
df %>% 
select_if(is.numeric) # selecciona todas las columnas que cumplen esa condicion

# crear columna nueva
df %>% 
mutate(var_nueva)


# se pude crear en base a otra
df %>% 
   mutate(var_nueva = var1 - var2)

# puedo usar el CASE WHEN

tips %>% 
   mutate(var_nueva = case_when(between(total_bill,0,10)  ~ 'C',
                                between(total_bill,11,15) ~ 'S',
                                TRUE ~ 'V'
   ))


# GROUP BY

df_d=df%>%
   group_by(sex,smoker) %>%
   summarise(total = sum(total_bill),
             cantidad = n(),
             promedio = round(mean(total_bill),2),
             minimo = min(total_bill),
             maximo = max(total_bill),
             mediana = median(total_bill)) %>%
   mutate(rango = maximo - minimo,
          fecha = Sys.time())


# crear una variable DUMMY
df_v = tips %>%
   mutate(esViernes = day=='Fri')%>% # aca creo la nueva variable con mi query
   group_by(sex , esViernes) %>% # luego agrupo
   summarise(Prom = mean(total_bill),
             cant = n())


       ##### RFM         #####

rfm_result <- rfm_table_customer(  # esto devuelve una lista que tiene a $rfm, que es una tabla
   data = NULL,
   customer_id = NULL,
   n_transactions = NULL,
   recency_days = NULL,
   total_revenue = NULL,
   analysis_date = NULL,
)

rfm_result <- rfm_result$rfm # ahora hago que rfm_result, sea la tabla!

