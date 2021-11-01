// add hover class in selected list item
let list = document.querySelectorAll('.navigation li');
function activeLink() {
    // console.log(list)
    list.forEach((item) => {
        item.classList.remove('hovered');
        this.classList.add('hovered'); 
    }
        )
}

list.forEach((item) => 
    item.addEventListener('mouseover',activeLink)
)


// Menutoggle
;(() => {
    let toggle = document.querySelector('.toggle');
    let navgation = document.querySelector('.navigation');
    let main = document.querySelector('.main');

    toggle.onclick = function() {
        navgation.classList.toggle('active')
        main.classList.toggle('active')
    }
})()