const colorBtn =document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow','red','green','#3b5998']

colorBtn.addEventListener('click',changecolor);

function changeColor () {
bodyBcg.style.backgroundColor ='blue';
    
}