SELECT EmployeeID, TitleOfCourtesy, LastName, FirstName, Title, BirthDate, HireDate FROM employees;

/* Necesitamos simplificar la visualización de datos de esta tabla, presentando en una consulta de selección, los siguientes campos:
EmployeeID, TitleOfCourtesy, LastName, FirstName, Title, BirthDate, HireDate.
Sobre esta consulta de base de selección, realice las siguientes consignas: */

/* 1- En una nueva consulta de selección con la base anterior, concatena los campos:
(TitleOfCourtesy, LastName, FirstName) con el alias NombreCompleto
respeta los espacios entre los diferentes campos mencionados. */

/* 2- En una nueva consulta de selección con la base inicial:
elimina el formato fecha y hora sobre el campo BirthDate, utilizando la función Date()
aplica un alias a dicho campo para llamarlo FechaNacimiento.*/

/* 3- Copia la consulta resultante del punto dos, y modificála aplicando lo siguiente:
utiliza la función YEAR sobre el campo HireDate, para mostrar sólo el año de contratación
aplica un alias a dicho campo, para llamarlo AnioContratacion. */