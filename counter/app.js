//set initial count to 0
let count = 0;
//select value and buttons
const valueSpan = document.querySelector("#value");
//create forEach to loop through button selected
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count --;
        }
        else if (styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if (count > 0){
            valueSpan.style.color = 'green';
        }
        if (count < 0){
            valueSpan.style.color = 'red';
        }
        if (count === 0){
            valueSpan.style.color = '#222';
        }
        valueSpan.textContent = count;
    })
})
