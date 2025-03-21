let patterndisplay = document.getElementById("patt");
let a = "";
let n = 5
for(i=0;i<n;i++){
    for(j=0;j<i;j++){
        a= a + "&nbsp";
        a= a + "&nbsp";
    }
    for(k=0;k < 10-i*2 -1 ;k++){
            a = a + "*";
    }
    a = a + "</br>";
}
patterndisplay.innerHTML = a;