
const enlace_2 = document.getElementById(  'enlace2'  )
const enlace_4 = document.getElementById( 'enlace4' );

let img = document.getElementById("img")
const img1 = document.getElementById("img1")
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
const img4 = document.getElementById('img4')
const img5 = document.getElementById('img5')
const img6 = document.getElementById('img6')
let superior = document.getElementById("superior")
let x = document.getElementById('x')

if (localStorage.getItem("activo") == 'true'){

    enlace_4.removeAttribute("href")
    enlace_4.innerText = "Cerrar sesion";
    enlace_4.addEventListener("click", ()=> {
        localStorage.removeItem("activo")
        localStorage.removeItem('status');
        location.href = "../html/Sesion.html"
    })

}
if (!localStorage.getItem("status")){
    enlace_2.remove()
}

function mostrarImagen(e){
    alert("preciono" + e.getAttribute("src"))
}

x.addEventListener('click', ()=>{
    superior.style.display="none"
})

img1.onclick = function (e){
    superior.style.display = "block"
    img.setAttribute("src",img1.getAttribute("src"))
}
img2.onclick = function (e){
    superior.style.display = "block"
    img.setAttribute("src","../imagenes/galeria2.jpg")
}
img3.onclick = function (e){
    superior.style.display = "block"
    img.setAttribute("src",img3.getAttribute("src"))
}
img4.onclick = function (e){
    superior.style.display = "block"
    img.setAttribute("src",img4.getAttribute("src"))
}
img5.onclick = function (e){
    superior.style.display = "block"
    img.setAttribute("src",img5.getAttribute("src"))
}
img6.onclick = function (e){
    superior.style.display = "block"
    img.setAttribute("src",img6.getAttribute("src"))
}
