//Ingresos
var income = prompt("Cuanto es el ingreso?");//400
//costo
var costs = prompt("¿Cuanto es el costo?");//65
//Porcentaje de impuestos
var taxPercent = prompt("¿Cuanto es el porcentaje(%) de impuestos?");//18
//ganacia bruta
var grossProfit = income-costs;//335
//obteniendo cantidad de impuestos
var tax = grossProfit*taxPercent/100;
//ganacia neta
var netIncome =grossProfit-tax;
//mostrando ganacia neta
document.write("Tu ganancia neta es $" + netIncome);
