// alert('aqui')
window.addEventListener('load', function(){
    const bookmark = document.getElementById('bookmark');
    const modal_container = document.getElementById('container-modal-1');
const close = document.getElementById('close');
// const about= document.getElementById('about')

// bookmark.addEventListener('click', () => {
    //     modal_container.classList.add('show')
    //     alert('probando')
    
    // })
    
    
    bookmark.onclick = ()=> {
        alert('hehehe')
    }

close.addEventListener('click', () => {
    modal_container.classList.remove('show')
})

},false);
