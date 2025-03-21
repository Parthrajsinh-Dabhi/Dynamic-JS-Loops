let patterndisplay = document.getElementById("patt");
let a = "";
let n = 5;


for(r=0;r<n;r++){
    for(j=r+1;j>0;j--){
       
        a = a + j;
  }
      
      a = a + "</br>";
    }          

patterndisplay.innerHTML = a;