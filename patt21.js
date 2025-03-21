let patterndisplay = document.getElementById("patt");
let a = "";
let p = 8;
let n = 10;

for (i = 0; i < n; i++) {
  a = a + p + "x" + (i + 1) + "=" + (i + 1) * p + "</br>";

}

patterndisplay.innerHTML = a;

//   for (j = 0; j < 1; j++) {

//     a = a + p + "x" + (i + 1) + "=" + (i + 1) * p;

//   }

// if (j==0){
// }
// if (j==1){+
// a = a + "x";
// }
// if(j==2){
// a = a + (i+1);
// }
// if (j==3){
// a = a + "=";
// }
// if (j==4){
// a = a + ((i+1)*2);
// }
