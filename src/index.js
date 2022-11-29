import './style/main.styl';

"use strict"

const popUpContainers = document.querySelectorAll('.popUp_wrapper');

popUpContainers.forEach(container => {
    const btnOpen = container.querySelector('.open_pop_up');
    const popUp = container.querySelector('.pop_up');
    const popUpContainer = popUp.querySelector('.pop_up_container');
    const popUpClose = popUp.querySelector('.pop_up_close');
    const withoutContainer = popUp.dataset.withoutContainer;
    const withoutCros = popUp.dataset.withoutCross;

    btnOpen.addEventListener('click', function(e) {
        e.preventDefault();
        popUp.classList.add('active');
    })

    if(!withoutContainer) {
        popUpContainer.addEventListener('click', function(e) {
            e.preventDefault();
            if (e.target === popUpContainer) {
                popUp.classList.remove('active');
            }
        })
    }
    if(!withoutCros) {
        popUpClose.addEventListener('click', function(e) {
            e.preventDefault();
            popUp.classList.remove('active');
        })
    } else {
        popUpClose.style.display = 'none';
    }
});

//-------------------------------------------------------------------------------------

// const array = [
//     {
//         percent: '-20%',
//         text: 'Новинка'
//         // src: 'img/image_1.png',
//     }
// ];
// const containerCard = document.querySelector('.section_2_content_box_5');
// for (const element of array) {
//     const box5Card = document.createElement('div');
//     box5Card.classList.add('section_2_content_box_5_card');
//
//     const box5CardDom1 = document.createElement('div');
//     box5CardDom1.classList.add('section_2_content_box_5_card_dom_1');
//     const box5CardDom2Border = document.createElement('div');
//     box5CardDom2Border.classList.add('section_2_content_box_5_card_dom_2_border');
//
//     const box5CardDom1A = document.createElement('div');
//     box5CardDom1A.classList.add('section_2_content_box_5_card_dom_1_a');
//     const pA = document.createElement('p');
//     pA.innerText = element.percent;
//     box5CardDom1A.append(pA);
//
//     const box5CardDom1B = document.createElement('div');
//     box5CardDom1B.classList.add('section_2_content_box_5_card_dom_1_b');
//     const pB = document.createElement('p');
//     pB.innerText = element.text;
//     box5CardDom1B.append(pB);
//
//     box5CardDom1.append(box5CardDom1A);
//     box5CardDom1.append(box5CardDom1B);
//     box5Card.append(box5CardDom1, box5CardDom2Border);
//     containerCard.append(box5Card);
// }

//------------------------------------------------------------------------------------------------------














