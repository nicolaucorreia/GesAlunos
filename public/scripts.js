function loadNavBar(){
    const nbar = document.getElementById("nbar")
    fetch("http://localhost:3003/navbar")
    .then (res => res.text())
    .then(html=>{

    })
    .catch((err)=>{
        alert("Ocorreu um erro")
    })
}