var numero1=[1,2,3,4,5,6];
var numero2=[1,2,3,4,5,6];
var numero3=[1,2,3,4,5,6];
var numero4=[1,2,3,4,5,6];
var numero5=[1,2,3,4,5,6];
var numero6=[1,2,3,4,5,6];

var color1=["Blue","Red","Yellow","Green","White","Pink"];
var color2=["Pink","Blue","Red","Yellow","Green","White"];
var color3=["White","Pink","Blue","Red","Yellow","Green"];
var color4=["Green","White","Pink","Blue","Red","Yellow"];
var color5=["Yellow","Green","White","Pink","Blue","Red"];
var color6=["Red","Yellow","Green","White","Pink","Blue"];

var long1=numero1.length;
var long2=numero2.length;
var long3=numero3.length;
var long4=numero4.length;
var long5=numero5.length;
var long6=numero6.length;
var i=0;


function IniciaTablero() {

  for (i = 0; i < long1; i++) {
    console.log(numero1[i]+"  "+color1[i]);
  }
  for (i = 0; i < long2; i++) {
    console.log(numero2[i]+"  "+color2[i]);
}
  for (i = 0; i < long3; i++) {
    console.log(numero3[i]+"  "+color3[i]);
  }
  for (i = 0; i < long4; i++) {
    console.log(numero4[i]+"  "+color4[i]);
  }
  for (i = 0; i < long5; i++) {
    console.log(numero5[i]+"  "+color5[i]);
  }
  for (i = 0; i < long6; i++) {
    console.log(numero6[i]+"  "+color6[i]);
  }
}

IniciaTablero()
