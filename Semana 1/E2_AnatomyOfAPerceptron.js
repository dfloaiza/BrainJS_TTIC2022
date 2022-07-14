const threshold = 2.0;
const inputs = [ 1,0,0,1 ];
const weights = [0.6, 0.4, 0.7, 0.8];

let sum = 0.0;

for(let i = 0; i < inputs.length; i++)
  {
    sum += inputs[i] * weights[i];
  }

if(sum >= threshold) //funcion de activacion  
    document.getElementById("resultado").innerHTML = "Sí"; //Acceso a los elementos del documento HTML
  
else
    document.getElementById("resultado").innerHTML = "No";
  





