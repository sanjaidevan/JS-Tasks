let counter = 0;
let displayCount = document.getElementById('displayCount');
function counterValue()
{
    counter+=1;
    displayCount.textContent = `The is clicked for ${counter}`
}