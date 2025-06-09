function toggleMode() {
    const html= document.documentElement
    html.classList. toggle('light')

    //pegar a teg img
    const img= document.querySelector("#profile img")


    // substituir a imagem 
    if(html.classList.contains('light')) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute('src', '../img/coruja 2.jpg')
      
    } else {
        // se tiver sem light mode, mantar a imagem normal
        img.setAttribute('src', '../img/coruja.png')

    }





}