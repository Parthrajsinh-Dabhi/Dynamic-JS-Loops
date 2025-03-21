let patterndisplay = document.getElementById("patt");
let a = "";
let n = 5;
let sum=0;

for(r=0;r<n;r++){
    for(j=0;j<r+1;j++){
        sum= sum+1;
        a = a + sum;
  }
      
      a = a + "</br>";
    }          

patterndisplay.innerHTML = a;

