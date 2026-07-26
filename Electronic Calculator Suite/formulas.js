const searchBox = document.getElementById('searchFormula');
const cards = document.querySelectorAll('.formula-card');

searchBox.addEventListener('keyup', function(){

    let search = searchBox.value.toLowerCase();

    cards.forEach(function(card){

        let text = card.innerText.toLowerCase();

        if(text.includes(search)){
            card.style.display = 'block';
        }
        else{
            card.style.display = 'none';
        }

    });

});