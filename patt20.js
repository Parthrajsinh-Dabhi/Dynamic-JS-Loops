let patterndisplay = document.getElementById("patt");
let a = "";
let n = 10;
for (r = 0; r < n; r++) {
   
  for (c = 0; c < n; c++) {
    if(c%2==0|| r%2==0 ) {
      if( r%2==1|| c%2==1 ){
    
        a = a+ c;
      }else{
        a = a + "*";
      }
      
    }else{
        a = a + "*";
    }
    
    
  }
  a = a + "</br>";
}
patterndisplay.innerHTML = a;
