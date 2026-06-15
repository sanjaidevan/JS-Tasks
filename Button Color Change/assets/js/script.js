let colorChangeButton = document.getElementById('colorChangeButton');

try{
let firstClick = true;
colorChangeButton.addEventListener('click',() => {
    if (firstClick)
    {
        colorChangeButton.style.backgroundColor = 'green';
        firstClick = false;
    }
    else
    {
        colorChangeButton.style.backgroundColor = 'red';
        firstClick = true;
    }
});
}
catch(error)
{
    console.log("Error Message", error)
}