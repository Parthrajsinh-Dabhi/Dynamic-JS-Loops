let patterndisplay = document.getElementById("patt");
let a = "";
let n = 6;
for (i = 0; i < n; i++) {
  for (j = i; j < n; j++) {
    a = a + "&nbsp";
    a = a + "&nbsp";
  }
  for (k = 0; k <= i; k++) {
    a = a + "*";
  }
  for (k = 0; k < i; k++) {
    a = a + "*";
  }

  a = a + "</br>";
}

patterndisplay.innerHTML = a;
