let patterndisplay = document.getElementById("patt");
let a = "";
let n = 5;
for (i = 0; i < n; i++) {
  for (j = i; j < n; j++) {
    a = a + "&nbsp";
    a = a + "&nbsp";
  }
  for (k = 0; k < 2 * i + 1; k++) {
    a = a + (k + 1);
  }
  a = a + "</br>";
}

patterndisplay.innerHTML = a;
