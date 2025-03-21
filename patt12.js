let patterndisplay = document.getElementById("patt");
let a = "";
let n = 5
for(i=0;i<n;i++){
    for(j=0;j<i;j++){
        a= a + "&nbsp";     
        a= a + "&nbsp";
    }
    for(k=0;k < ((n-i)*2)-1 ;k++){
        a = a + (k+1);
    }
    a = a + "</br>";
}
// for(i=n-2;i>=0;i--){
//     for(j=0;j<i;j++){
//         a= a + "&nbsp";
//         a= a + "&nbsp";
//     }
//     for(k=0;k < ((n-i)*2)-1 ;k++){
//         a = a + (k+1);
//     }
//     a = a + "</br>";
// }
patterndisplay.innerHTML = a;














// let n = 5; 
// for (let i = 1; i <= n; i++) { 
// 	let str = "*"; 
// 	let space = ' '; 
// 	console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
// } 
// for (let i = n - 1; i >= 1; i--) { 
// 	let str = "*"; 
// 	let space = ' '; 
// 	console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
// }





// let patterndisplay = document.getElementById("patt");
// let a = "";
// let n = 5; // Half height of the diamond

// // Top half of the diamond
// for (let i = 0; i < n; i++) {
//     // Loop for leading spaces
//     for (let j = 0; j < n - i - 1; j++) {
//         a += "&nbsp;&nbsp;";
//     }
//     // Loop for printing numbers
//     for (let k = 0; k < (2 * i + 1); k++) {
//         a += (k + 1);
//     }
//     a += "<br>";
// }

// // Bottom half of the diamond
// for (let i = n - 2; i >= 0; i--) {
//     // Loop for leading spaces
//     for (let j = 0; j < n - i - 1; j++) {
//         a += "&nbsp;&nbsp;";
//     }
//     // Loop for printing numbers
//     for (let k = 0; k < (2 * i + 1); k++) {
//         a += (k + 1);
//     }
//     a += "<br>";
// }

// patterndisplay.innerHTML = a;
