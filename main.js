let nombre = prompt ("Bienvenido! cual es tu nombre?");

alert ("Hola " + nombre + "!!");

let objetivo = prompt (`Escribe el numero de la opcion que prefieras segun tu objetivo:
 (1)Bajar porcentaje adiposo
 (2)Aumentar masa muscular
 (3)Aumentar la fuerza 
 (4)Combinado 
 (elige solo una) ` );

if (objetivo == 1) {
    alert (`"Te recomendamos que busques "Desafio 100 dias"`)
};

if (objetivo == 2) {
    alert (`"Te recomendamos que busques "Plan hipertrofia"`)
}; 

if (objetivo == 3) {
    alert (`"Te recomendamos que busques "Hybrid Plan"`)
}; 

if (objetivo == 4) {
    alert (`"Te recomendamos que busques "Hybrid plan y Plan Concurrente 5 dias"`)
}; 
