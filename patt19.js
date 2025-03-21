let patterndisplay = document.getElementById("patt");
let a = "";
let n = 10;
for (r = 0; r < n; r++) {
    
  for (c = 0; c < n; c++) {
    //  a = a + r;  
    if ( c == 0 || c==n-1 ) {
        a = a + r;
    
    } 
    else if(r==0||r==n-1) {
        a = a + c;
    }
    else{
        a =a+"&nbsp";
        a =a+"&nbsp";
    }
  }
  a = a + "</br>";
}
patterndisplay.innerHTML = a;