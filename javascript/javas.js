var a, b, soma;




var matriz1 = [];

document.write("<p class='qualquer'> número que multiplicará a proxima matriz </p>");

a = parseFloat(prompt("número para multiplicar com a matriz"));
matriz1 = a;
if (isNaN(a)) {
    alert("digite um número válido")
}

document.write("<h3  id='sim'>[" + matriz1 + "]</h3><br>");

document.write("<h3>X</h3><br>");




var matriz2 = [];

document.write("<p class='qualquer'>matriz 4x4 com números aleatórios de 0 a 100   (matriz 1)</p>");

matriz2.push([Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)]);
matriz2.push([Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)]);
matriz2.push([Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)]);
matriz2.push([Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)]);
console.table(matriz2);


document.write("<table class='table' border=1>");
for (i = 0; i < matriz2.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz2[i].length; x++) {
        linha = linha + "<td>" + matriz2[i][x] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);
}


document.write("</table>");

document.write("<h3> = </h3>");

document.write("<hr>");

document.write("<br>")

var matriz3 = [];

matriz3.push([matriz2[0][0] * a, matriz2[0][1] * a, matriz2[0][2] * a, matriz2[0][3] * a]);
matriz3.push([matriz2[1][0] * a, matriz2[1][1] * a, matriz2[1][2] * a, matriz2[1][3] * a]);
matriz3.push([matriz2[2][0] * a, matriz2[2][1] * a, matriz2[2][2] * a, matriz2[2][3] * a]);
matriz3.push([matriz2[3][0] * a, matriz2[3][1] * a, matriz2[3][2] * a, matriz2[3][3] * a]);

document.write("<p class='qualquer'>matriz 4x4 resultado da multiplicação da matriz 1 pelo número digitado    (matriz 2)</p>");

document.write("<table class='table' border=1>");

for (i = 0; i < matriz3.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz3[i].length; x++) {
        linha = linha + "<td>" + matriz3[i][x] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);
}
document.write("</table>");


console.table(matriz3);


document.write("<h3>+</h3><br>");




var matriz4 = [];

document.write("<p class='qualquer'>matriz 4x4 que você escolhe os números (matriz3)</p>");

document.write("<table class='table' border=1>");

for (i = 0; i < 4; i++) {

    var linha2 = '<tr>';
    matriz4[i] = [];

    for (x = 0; x < 4; x++) {

        
        matriz4[i][x] = parseFloat(prompt("digite os números da matriz que somará com a outra"));

        if (isNaN(matriz4[i][x])) {
            alert("digite um número válido");

        }
        
        linha2 = linha2 + "<td>" + matriz4[i][x] + "</td>";

    }

    linha2 = linha2 + "</tr>";
    document.write(linha2);

}
document.write("</table>");


document.write("<h3> = </h3><br>");



var matriz5 = [];

document.write("<p class='qualquer'>matriz 4x4 resultado da soma entre a matriz 2 e a matriz 3</p>");

document.write("<table class='table' border=1>");

var linha3 = '';

for (i = 0; i < 4; i++) {

     linha3 = '<tr>';
    matriz5[i] = [];

    for (x = 0; x < 4; x++) {
        console.table(matriz3[i][x]);
        console.table(matriz4[i][x]);
        
        matriz5[i][x] = matriz3[i][x] + matriz4[i][x];
        linha3 = linha3 + "<td>" + matriz5[i][x] + "</td>";
     
    }

    linha3 = linha3 + "</tr>";
    document.write(linha3);

}
document.write("</table>");

console.table(matriz5);
console.table(linha3);