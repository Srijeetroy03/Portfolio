let navlinks=document.getElementsByClassName('nav')

for(let navlink of navlinks){
    navlink.addEventListener('mouseover',function(){
        // navlink.classList.add('active_link')
        navlink.setAttribute('class','active_link')
    })
    navlink.addEventListener('mouseout',function(){
        // navlink.classList.remove('active_link')
        navlink.removeAttribute('class','active_link')
    })

}