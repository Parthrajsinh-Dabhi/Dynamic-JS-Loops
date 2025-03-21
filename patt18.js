let patterndisplay = document.getElementById("patt");
let a = "";
let n = 7;
for (r = 0; r < n; r++) {
  for (c = 0; c < 2*n- 4; c++) {
    if (r == 0 || c == 0 || c==(2*n)-5 ||r ==n-1) {
      a = a + (r+1);
    } else {
      a = a + "&nbsp";
      a = a + "&nbsp";
    }
  }
   
  a = a + "</br>";
}
patterndisplay.innerHTML = a;