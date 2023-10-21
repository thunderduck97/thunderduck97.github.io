if(!localStorage.getItem("status")){
    location.href = "../html/index.html";
}

const n_imagen = document.getElementById("position");
const imagen = document.getElementById("imagen");
const btn = document.getElementById("btn");
const form = document.getElementById("change-img")

let img1 = document.getElementById("1");
let img2 = document.getElementById("2");
let img3 = document.getElementById("3");
let img4 = document.getElementById("4");
let img5 = document.getElementById("5");
let img6 = document.getElementById("6");
let img7 = document.getElementById("7");
let img8 = document.getElementById("8");
let img9 = document.getElementById("9");
let img10 = document.getElementById("10");

let save1 =localStorage.getItem("img1");
let save2 =localStorage.getItem("img2");
let save3 =localStorage.getItem("img3");
let save4 =localStorage.getItem("img4");
let save5 =localStorage.getItem("img5");
let save6 =localStorage.getItem("img6");
let save7 =localStorage.getItem("img7");
let save8 =localStorage.getItem("img8");
let save9 =localStorage.getItem("img9");
let save10 =localStorage.getItem("img10");






const enlace_2 = document.getElementById(  'enlace1'  )
const enlace_4 = document.getElementById( 'enlace4' );


if(localStorage.getItem('status') == "administracion") {
    form.remove()
}


if (localStorage.getItem("activo") == 'true'){

    enlace_4.removeAttribute("href")
    enlace_4.innerText = "Cerrar sesion";
    enlace_4.addEventListener("click", ()=> {
        localStorage.removeItem("activo")
        localStorage.removeItem("status")
        location.href = "../html/index.html"
    })


}

if(save1 !== null) {
    img1.setAttribute("src",save1)
} else if(save2 !== null) {
    img2.setAttribute("src",save2)
}else if(save3 !== null) {
    img3.setAttribute("src",save3)
}else if(save4 !== null) {
    img4.setAttribute("src",save4)
}else if(save5 !== null) {
    img5.setAttribute("src",save5)
}else if(save6 !== null) {
    img6.setAttribute("src",save6)
}else if(save7 !== null) {
    img7.setAttribute("src",save7)
}else if(save8 !== null) {
    img8.setAttribute("src",save8)
}else if(save9 !== null) {
    img9.setAttribute("src",save9)
}else if(save10 !== null) {
    img10.setAttribute("src",save10)
}






btn.addEventListener('click',()=> {
    switch(n_imagen.value) {
        case "1":
            img1.setAttribute("src",`../imagenes/horarios/${imagen.value}.jpg`)

            localStorage.setItem("img1",`../imagenes/horarios/${imagen.value}.jpg`)
            alert("se guardo la imagen " + imagen.value)
            break;
        case "2":
            img2.setAttribute("src",`../imagenes/horarios/${imagen.value}.jpg`)
            alert("se guardo la imagen " + imagen.value)

            localStorage.setItem("img2",`../imagenes/horarios/${imagen.value}.jpg`)
            break;
        case "3":
            img3.setAttribute("src",`../imagenes/horarios/${imagen.value}.jpg`)
            alert("se guardo la imagen " + imagen.value)

            localStorage.setItem("img3",`../imagenes/horarios/${imagen.value}.jpg`)
            break;
        case "4":
            img4.setAttribute("src",`../imagenes/horarios/${imagen.value}.jpg`)
            alert("se guardo la imagen " + imagen.value)

            localStorage.setItem("img4",`../imagenes/horarios/${imagen.value}.jpg`)
            break;
        case "5":
            img5.setAttribute("src",`../imagenes/horarios/${imagen.value}.jpg`)
            alert("se guardo la imagen " + imagen.value)

            localStorage.setItem("img5",`../imagenes/horarios/${imagen.value}.jpg`)
            break;

        case "6":
            img6.setAttribute("src",`../imagenes/horarios/${imagen.value}.jpg`)
            alert("se guardo la imagen " + imagen.value)
            
            localStorage.setItem("img6",`../imagenes/horarios/${imagen.value}.jpg`)
            break;

        case "7":
            img7.setAttribute("src",`../imagenes/horarios/${imagen.value}.jpg`)
            alert("se guardo la imagen " + imagen.value)

            localStorage.setItem("img7",`../imagenes/horarios/${imagen.value}.jpg`)
            break;
        case "8":
            img8.setAttribute("src",`../imagenes/horarios/${imagen.value}.jpg`)
            localStorage.setItem("img8",`../imagenes/horarios/${imagen.value}.jpg`)
            alert("se guardo la imagen " + imagen.value)

            break;
        case "9":
            img9.setAttribute("src",`../imagenes/horarios/${imagen.value}.jpg`)
            alert("se guardo la imagen " + imagen.value)

            localStorage.setItem("img9",`../imagenes/horarios/${imagen.value}.jpg`)
            break;
        case "10":
            img10.setAttribute("src",`../imagenes/horarios/${imagen.value}.jpg`)
            alert("se guardo la imagen " + imagen.value)

            localStorage.setItem("img10",`../imagenes/horarios/${imagen.value}.jpg`)
            break;
    }
})