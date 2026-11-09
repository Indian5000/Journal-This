const Boxy= document.getElementById('Box');
const BallBttn= document.getElementById('Balls');
const NoBallBttn=document.getElementById('No Balls');
fetch('http://localhost:5000/balls')
    .then(response => response.text())
    .then(data=>{
        Boxy.innerText=data;
    })
    .catch(err=>{
        Boxy.innerText="Server doomed bro";
    });
BallBttn.addEventListener('click',()=>{
    
});