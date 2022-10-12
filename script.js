const openSideBar=()=>{
    document.getElementById('sidebar').style.width = '250px'
    document.getElementById('sidecover').style.width = '100%'
}
const closeSideBar=()=>{
    document.getElementById('sidebar').style.width = '0px'
    document.getElementById('sidecover').style.width = '0'
}

//Event Listeners
document.getElementById('menu').addEventListener('click',openSideBar)
document.getElementById('menuh').addEventListener('click',openSideBar)
document.getElementById('closes').addEventListener('click',closeSideBar)