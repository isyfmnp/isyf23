const people = {'Cherie':['ano',90,158]}

document.addEventListener('click',(e)=>{
    if(e.target.tagName == 'SPAN'){
        circle = document.getElementById(people[e.target.innerText][0]).children[1]
        circle.style.top = people[e.target.innerText][1]+"%"
        circle.style.left = people[e.target.innerText][2]+"%"
        circle.style.display = 'block'
    }
})