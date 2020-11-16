// escribir la funcion como
// funtion getRandomNumber (size =  Numero limite, osea hasta donde quiero mi nro aleatorio){
//
// }; es viejo. Usamos let y la flecha para asignar - Js 6

//numeros aleatorios de el tesoro
let getRandomNumber = size =>{
  return Math.floor(Math.random() * size)
}

let getDistance = (e, target)=>{
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX*diffX) + (diffY*diffY));
}

// Condición si esta cerca <nro ENTONCES devolve Muy caliente
//Te quemaste - muy Caliente - caliente - Tibio - Frio - muy frio - te congelaste
let getDistanceHint = distance =>{
  if (distance < 20){
    return "Te estas quemando!";
  }else if(distance < 40){
    return "Muy calientee";
  }else if(distance < 80){
    return "Caliente";
  }else if(distance < 100){
    return "Tibio";
  }else if(distance < 180){
    return "Frio";
  }else if(distance < 300){
    return "Muy frio";
  }else  // SI no cumple ninguna de las condiciones anteriores
  //Entonces devolve: Te congelaste!
  return "Te congelaste!";
}
