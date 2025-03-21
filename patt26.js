let patterndisplay = document.getElementById("patt");
let a = "";
let n = 20;
if (n % 2 == 0) {
  n = n - 1;
} else {
  n = n;
}
for (i = 0; i < n; i++) {
  let jlen = n / 2 - 1 - i; 
  let klen = 2 * i + 1;
  if (i > n / 2 - 1) {
    jlen = i - n / 2;
    klen = (n - i) * 2 - 1;
  } 
  for (j = 0; j < jlen; j++) {
    a = a + "&nbsp;&nbsp;";
  }
  for (k = 0; k < klen; k++) {
    if (k == 0 || k == klen - 1 || k == (klen/2+0.5)-1 || i == (n/2+0.5)-1) {
      a = a + "*";
    } else {
      a = a + "&nbsp;&nbsp;";
    }
  }
  a = a + "</br>";
}
patterndisplay.innerHTML = a;