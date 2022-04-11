let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue =''
for(item of buttons){
    item.addEventListener('click', (e)=>{
         buttonText = e.target.innerText;
         if (buttonText== 'AC'){
         screenValue = "";
         screen.value = screenValue;
         }
         else if (buttonText== '='){
         screen.value = eval(screenValue);
         }
         else if (buttonText== 'DEL'){
         screen.value = screenValue.slice(0,-1);
         }
         else{
         screenValue += buttonText;
         screen.value = screenValue;
         }

    })
}
