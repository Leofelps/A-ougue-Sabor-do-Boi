

let contador = 1;

setInterval(function(){
    document.getElementById('slide' + contador).checked = true;
    contador++;

    if(contador > 5 ) {
        contador = 1;
    }
}, 3000);



// avaliações

let currentSlide = 0;

function showSlide(slideIndex) {
    const cards = document.querySelectorAll('.card-custom');
    const numCards = cards.length;
    const numSlides = Math.ceil(numCards / 4);

    if (slideIndex >= numSlides) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = numSlides - 1;
    } else {
        currentSlide = slideIndex;
    }

    const startIndex = currentSlide * 4;
    const endIndex = Math.min(startIndex + 4, numCards);

    cards.forEach(card => {
        card.style.display = 'none';
    });

    for (let i = startIndex; i < endIndex; i++) {
        cards[i].style.display = 'block';
    }
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

showSlide(currentSlide);

//Kit churrasco

document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnails img');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const clickedImageSrc = this.src;
            mainImage.src = clickedImageSrc;
        });
    });
});


    document.addEventListener('DOMContentLoaded', function() {
        const minusButton = document.querySelector('.minus');
        const plusButton = document.querySelector('.plus');
        const quantityInput = document.querySelector('.product-quantity');

        minusButton.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });

        plusButton.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });
    });


    //accordion

    document.addEventListener('DOMContentLoaded', function() {
        const accordionItems = document.querySelectorAll('.accordion-section');
    
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-title');
            const content = item.querySelector('.accordion-content');
    
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
    
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.accordion-content').style.maxHeight = null;
                    }
                });
    
                if (!isActive) {
                    item.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    item.classList.remove('active');
                    content.style.maxHeight = null;
                }
            });
        });
    });
    