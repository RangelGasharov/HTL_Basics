let random = Math.random() * 1000;
let randomfullnumber = Math.round(random);
console.log(randomfullnumber)

if (randomfullnumber >= 800) 
{ console.log("Die Zahl ist größer oder gleich 800"); 
}

if (randomfullnumber < 800 && randomfullnumber >= 500  )
{  console.log("Die Zahl ist größer oder gleich 500 und kleiner als 800");
};

if (randomfullnumber < 500 && randomfullnumber >= 200  )
{ console.log("Die Zahl ist größer oder gleich 200 und kleiner als 500");
}

if (randomfullnumber < 200 && randomfullnumber >= 0  )
{console.log("Die zahl ist größer oder gleich 0 und kleiner als 200");
}