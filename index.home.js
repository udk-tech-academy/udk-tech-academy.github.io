const floatingnavs = document.querySelectorAll('.floating_nav a');
const exp = document.getElementById('exp');
const edu = document.getElementById('edu');
const ski = document.getElementById('ski');
const abo = document.getElementById('abo');
const removeActiveClass = () => {
    floatingnavs.forEach(nav => {
        nav.classList.remove('active')
    })
}

floatingnavs.forEach(nav => {
    nav.addEventListener('click',() =>{
        removeActiveClass()
        nav.classList.add('active')
    })
})

// dark therm toggler
   
const nav_therm_btn = document.querySelector(".nav_therm_btn");
nav_therm_btn.addEventListener('click',() =>{
    document.body.classList.toggle('dark-therm-variables')
});

//resume section display


function filterItems(category){
    const items = document.querySelectorAll('item')
    items.forEach(Item =>{
        if(category==='All'){
            items.style.display ='flex';
    }else{

        items.style.display = item.classList.contains(category)?
        'flex':'none';
    }

    }
    
)
}
   