let tablinks=document.getElementsByClassName("me");
let tabcontents=document.getElementsByClassName("tab_contents");
let navlinks=document.getElementsByClassName('nav')


// function opennav(tabname){
//     for(let navlink of navlinks){
//         navlink.classList.remove("active_link")
//     }
//     event.currentTarget.classList.add('active_link')


//     // document.getElementById(tabname).classList.add("active_tab")

// }

for(let navlink of navlinks){
    navlink.addEventListener('mouseover',function(){
        navlink.classList.add('active_link')
    })
    navlink.addEventListener('mouseout',function(){
        navlink.classList.remove('active_link')
    })

}

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active_link")
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active_tab")

    }
    

    event.currentTarget.classList.add('active_link')


    document.getElementById(tabname).classList.add("active_tab")

}


