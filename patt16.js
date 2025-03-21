let patterndisplay = document.getElementById("patt");
let a = "";
let n =  5;
for (r = 0; r < n; r++) {
  for (c = 0; c < 2*n; c++) {
    if (r == 0 || c == 0 || c==(2*n)-1 ||r ==n-1) {
      a = a + "*";
    } else {
      a = a + "&nbsp";
      a = a + "&nbsp";
    }
  }
   
  a = a + "</br>";
}
patterndisplay.innerHTML = a;
