let patterndisplay = document.getElementById("patt");
let a = "";
let n = 7;
for (i = 1; i < n; i++) {
  for (j = 1; j <= i; j++) {
    a = a + j;
  }
  a = a + "</br>";
}
patterndisplay.innerHTML = a;
