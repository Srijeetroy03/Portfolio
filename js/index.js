let tablinks=document.getElementsByClassName("me");
let tabcontents=document.getElementsByClassName("tab_contents");
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

let s=document.getElementById('skills')
let exp=document.getElementById('experience')
let edu=document.getElementById('education')
let s_content=document.getElementById('skills_content')
let exp_content=document.getElementById('experience_content')
let edu_content=document.getElementById('education_content')

s.addEventListener('click',()=>{
    s.classList.add('active_link')
    exp.classList.remove('active_link')
    edu.classList.remove('active_link')
    s_content.style.display="block"
    exp_content.style.display="none"
    edu_content.style.display="none"
    
})

exp.addEventListener('click',()=>{
    s.classList.remove('active_link')
    exp.classList.add('active_link')
    edu.classList.remove('active_link')
    s_content.style.display="none"
    exp_content.style.display="block"
    edu_content.style.display="none"
})

edu.addEventListener('click',()=>{
    s.classList.remove('active_link')
    exp.classList.remove('active_link')
    edu.classList.add('active_link')
    s_content.style.display="none"
    exp_content.style.display="none"
    edu_content.style.display="block"
})




