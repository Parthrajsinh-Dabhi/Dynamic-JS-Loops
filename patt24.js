let patterndisplay = document.getElementById("patt");
let a = "";
let n =  31;
for (r = 0; r < n; r++) {
  for (c = 0; c < n; c++) {
    if (r == 0 || c == 0 || c==n-1 ||r ==n-1 || r == c || c== n-1-r){
      a = a  +" *";
    } else {
      a = a + "&nbsp";
      a = a + "&nbsp";
      a = a + "&nbsp";
    }
  }
   
  a = a + "</br>";
}
patterndisplay.innerHTML = a;

