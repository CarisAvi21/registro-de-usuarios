# Proyecto Registro de Usuarios para Coworking

## Preámbulo

El registro de visitantes en una empresa en América Latina es un proceso tedioso y manual. Lo común es que una persona esté en la recepción tomando nota - a veces con papel y lápiz - de cada visitante. Por razones de seguridad, usualmente piden a cada visitante dejar una identificación. Si vivimos en la era digital, ¿por qué seguimos registrando visitantes como si fuera 1985? ¿Qué tal si sustituimos a la persona en recepción por una tablet? ¿Qué tal si en lugar de pedir una identificación, tomamos una foto? ...

## Introducción

En este proyecto la empresa de coworking donde opera Laboratoria en tu ciudad "Terminal 1" ha decidido contratarte a ti y a dos compañeras para reinventar su proceso de registro de visitantes. Con la entrada de al mercado latinoamericano, tienen mucha más competencia y necesitan invertir en tecnología para mejorar su servicio; el registro de visitantes es un primer acercamiento. Te dan la referencia de [Evoy](https://envoy.com/) en EEUU (un servicio que ofrece un sistema digital de registro de visitantes) y ustedes tienen que desarrollar una versión mínima viable (ver anexo I abajo).

**Diseñadora UX**

*Zareth Abarca*

   * Diseñar la experiencia de la aplicación (flujo, interacción, etc.).
   * Identificar, documentar y priorizar las historias de usuario.
   * Crear el diseño visual de la interfaz.

**Desarrolladoras Front-end**

*Florencia Silva Olivera*
*Rocío Angelica Matias Durán*
*Carolina Avilés Lara*
   * Implementar la interfaz de usuario diseñada (HTML/CSS/JS).
   * Deben dividirse las funcionalidades entre las dos desarrolladoras.
   * Todas los desarrollos deben incluir pruebas unitarias.

**Organización**
   * El equipo organiza y lleva al día su tablero kanban.
   * Los objetivos del proyecto en cuanto a funcionalidad y proceso de UX están de forma visible mediante avisos escritos en el tablero correspondiente.
   * El equipo se comunica mediante un grupo cerrado de Slack.
   * De 8 a.m. a 1 p.m. se avisa personalmente al equipo cualquier alcance logrado o tarea bloqueada.
   * Las implementaciones al proyecto son discutidas antes de ser subidas a Github y mediante Slack se le da aviso a la "Master" (Carolina Avilés) para que reciba el respectivo "pull request".
   * Todas las integrantes del equipo están conscientes de la problemática que se esta resolviendo.
   * Durante el proceso de Sketching todas las integrantes aportan ideas.
   * Conocen las historias de usuario y los puntos de contacto con el cliente. 


# Proceso de UX

## Descubrimiento e investigación 

Un Coworking es un espacio de trabajo compartido e inspirador, que impulsa y fomenta la co-creación y donde siempre hay alguien preocupado en crear comunidad y valor añadido. 

Coworking es la práctica por la cual profesionales que no comparten ni empresa ni sector de actividad, se unen para trabajar juntos en un mismo espacio, sin en cambio el control de las personas que ingresan al edificio u oficinas es muy ambiguo.

Cada espacio de trabajo se maneja de forma diferente en cuanto al control de los Coworkers y los visitantes se refiere, por lo que decidimos hacer una investigación teniendo en cuenta a los participantes de este proceso.

* Usuarios 
- Administrador 
- Recepcionista o personal de seguridad 
- Coworkers
- Visitantes 

* Espacios visitados

- El 3er espacio 
Ámterdam 240, 4° piso, Hipódromo, CDMX.

- WeWork -Iron Hack
Insurgentes Sur 601, Nápoles, CDMX.

- WeWork 
Montes Urales 424, Lomas de Chapultepec, CDMX.

- Telmex Hub
Isabel la Católica 51, Centro Histórico, CDMX.

# Necesidades de los usuarios 

* Administrador 

Tener un control de las personas que ingresan a mi edificio, como:
 
 Coworkers 
 - Tener un control del tiempo que estan laborando en el edificio, por cuestiones de renta del espacio.
 - Obtener los datos del "arrendatario" como el nombre de la empresa, giro, puesto desempañado, ubicación de la oficina que ocupa, etc. 
 - Actividades que van a desempeñar.
 - Número de visitantes que reciben. 

 Visitantes
- Para fines de seguridad.
- Determinar si van a recorridos (posibles clientes). 
- Cuantificar el numero de personas que asiste a los eventos organizados por Terminal 1. 
- Determinar que días necesito reforzar el acceso con más personal por el flujo de personas o recibimiento de paquetería.

Recepcionista o personal de seguridad
- Agilizar el proceso de registro.
- Poder visualizar la información digitalmente.
- Capturar si el visitante puede ingresar o no, y detallar los motivos.
- Tener un registro con la foto de las personas que ingresan o trabajan en el Coworking para poder darles un trato personalizado.

* Pain points: (En sus actividades diarias qué es lo que más les molesta u obstaculiza en el proceso de realizar sus actividades/objetivos)

## Técnicas usadas en esta fase

- Engage
    * Administradora de "El 3er Espacio" 
    * Recepcionista y Guardia de "Terminal 1"
- Cliente Incógnito
    * WeWork Urales
    * WeWork Insurgentes (Iron Hack)
    * Telmex Hub Isabel la Católica 
- Shadowing
    * Terminal 1
    * Telmex Hub Isabel la Católica
     
Objetivos del negocio Terminal 1

- Compartir oficina y equipamientos.
- Fomentar las relaciones estables entre profesionales de diferentes sectores que pueden desembocar en nuevas relaciones cliente-proveedor. 
- Generar un sentimiento de pertenencia a una comunidad, más allá de las vinculaciones efectivas que se establezcan entre los trabajadores que frecuentan los espacios de cotrabajo.
- Realizar eventos de integración entre su comunidad.
- Personalizar la interacción del los empleados con los usuarios.​

Motivaciones del negocio para el Registro de Usuarios
-  Agilizar el proceso de registro y búsqueda de información.
-  Denotar modernidad en sus instalaciones.
-  Terminar con el uso de papel y pluma.
-  Dar un sentimiento de seguridad a Coworkers y visitantes.
-  Registro detallado y digital que pueda ser consultado en cualquier dispositivo.
-  Visualizar, filtrar y agregar comentarios al registro.
-  Poder cuantificar el numéro de personas que accesan al edificio e identificar los motivos, teniendo en cuenta que prodrían surgir nuevos clientes.
-  Identificar si los eventos que realizan en sus instalaciones fueron exitosos.

Síntesis y definición

Ideación

De acuerdo a la investigación realizada nos encontramos con la ambiguedad de los datos que son solicitados al tratar de acceder o rentar un espacio de Cowork, por lo que se piensa en diseñar una plataforma que asegure que los datos solicitados sean claros y resguardados en un sólo lugar. Facilitando procesos como registro para el visitante mediante una tablet, recepción visualiza la información al momento para poder notificar al Coworker de la persona que está esperando. 



Prototipado
- Sketch

User testing
