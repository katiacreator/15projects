const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//hex code ex #f15025 orange
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let hexColor = '#';
    //loop that runs 6 * to create hex code from hex array
    for (let i = 0; i < 6; i++){
        //creates hex color code
        // hard coded ex. hexColor += hex[0]
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
//gets random hex color from hex array
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}