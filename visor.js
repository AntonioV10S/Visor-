var galeria = ['Img/img1.png','Img/img2.png','Img/img3.png',
                'Img/img4.png','Img/img5.png'];
let cont =0;

var atras = document.getElementById("atras");
var adelante = document.getElementById("adelante");
function Mostrar(contenedor) {
    if (contenedor < 0) {
        cont = galeria.length - 1;
    } else if (contenedor >= galeria.length) {
        cont = 0;
    }
    imagen.src = galeria[cont];
}
atras.addEventListener("click", () => {
    cont--;
    Mostrar(cont);
});
adelante.addEventListener("click", () => {
    cont++;
    Mostrar(cont);
});

Mostrar(cont);

