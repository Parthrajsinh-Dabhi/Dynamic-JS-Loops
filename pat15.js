let patterndisplay = document.getElementById("patt");
let a = "";
let n = 10;

for (i = 0; i < n; i++) {
  if (n % 2 == 0) {
    n= (n-1);
  } else{
    n = n;
  }
  let jlen = i
  let klen = ((n/2-i)*2) ;

  
  if(i>n/2){
     jlen = n - 1 - i;
     klen = (i-(n/2))*2 + 2;
  } 



   for(j=0;j<jlen;j++){
    // a = a + j;
    a = a + "&nbsp";
    a = a + "&nbsp";
   }
   for(k=0;k<klen;k++){
    a = a + "*";
   }
   a = a + "</br>";
}

 

patterndisplay.innerHTML = a;