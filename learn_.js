let patterndisplay = document.getElementById("patt");
let a = "";
let n = 8;
if (n % 2 == 0) {
  n= (n-1);
} else{
  n = n;
}
for (i = 0; i < n; i++) {
  
  let jlen= n/2-1-i;
  let klen= 2*i+1;
  
  if(i>n/2-1){
    
    jlen =i-n/2;
    klen = ((n-i)*2)-1;
  } 
   for(j=0;j<jlen;j++){
    a = a + "&nbsp";
    a = a + "&nbsp";
   }
   
   for(k=0;k<klen;k++){
    a = a + (k+1);
   }
 
   a = a + "</br>";

   
}

patterndisplay.innerHTML = a;

