window.addEventListener('click',(e)=>{
    if(e.target.id=='menu' || e.target.id=='menuh'){
        openSideBar()
    }
    else if(e.target.id=='closes'){
        closeSideBar()
    }
})

const openSideBar=()=>{
    document.getElementById('sidebar').style.width = '250px'
    document.getElementById('sidebar').style.borderLeft = '2px solid #555'
    document.getElementById('sidecover').style.width = '100%'
}
const closeSideBar=()=>{
    document.getElementById('sidebar').style.width = '0px'
    document.getElementById('sidebar').style.borderLeft = ''
    document.getElementById('sidecover').style.width = '0'
}