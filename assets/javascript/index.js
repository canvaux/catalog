'use strict';

const searchTabsCards = document.querySelectorAll('.search_by_year_div');
const engineCliELm = document.querySelectorAll('.engine_cli');
const tabsContent = document.querySelectorAll('.tabs_content');
const tabsContnetELm = document.querySelectorAll('.tabs_options');
const tabsContainerSectionELm = document.querySelectorAll('.tabs_container_section');
const prevImage = document.querySelectorAll('.prevImage');
const prevImageCloseBtn = document.querySelector('.prev_close_image');
const prevImageDivElm = document.querySelector('.prev_image_div');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const allPreveImageElm = document.querySelector('.image_prev_all');
const bigPrevImageElm = document.querySelector('.prev_imge');
const barIconsElm = document.querySelector('.barsIconsElm');
const secondTopNavBarElem = document.querySelector('.navbar_second_innercontent');
const secondNavbarCloseButton = document.querySelector('.second_close_button');
const smNavbarTabIconsELm = document.querySelectorAll('.sm_nav_icon_div');

// removing active class
const removeActiveCl = function () {
    searchTabsCards.forEach((el) => {
        el.classList.remove('search_by_year_div_active');
        // switch the elem image
        if (!el.classList.contains('search_by_year_div_active')) {
            engineCliELm.forEach((el) => {
                if (el.id % 2 === 0) {
                    el.style.display = 'none';
                } else {
                    el.style.display = 'block';
                }
            });
        } else {
            return;
        }
    });
};

// tabs active class adding
searchTabsCards.forEach((el) => {
    el.addEventListener('click', function () {
        removeActiveCl();
        let id = this.id;

        const target = el.getAttribute('data-target');

        tabsContent.forEach((el) => {
            if (target === el.getAttribute('id')) {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
        });

        // grab the dom element
        const firstTab = document.querySelector(`.${id}_engline_image`);
        const secondTab = document.querySelector(`.${id}_engline_image_second`);
        // adding the active class
        el.classList.add('search_by_year_div_active');
        // show and hide the image
        if (el.classList.contains('search_by_year_div_active')) {
            firstTab.style.display = 'block';
            secondTab.style.display = 'none';
        }
    });
});

const removetabElmActive = function () {
    tabsContnetELm.forEach((el) => {
        el.classList.remove('tech_active');
    });
};

for (let i = 0; i < tabsContnetELm.length; i++) {
    tabsContnetELm[i].addEventListener('click', function () {
        removetabElmActive();
        this.classList.add('tech_active');
        const target = tabsContnetELm[i].getAttribute('data-target');

        tabsContainerSectionELm.forEach((el) => {
            if (el.id === target) {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
        });
    });
}

// inser the dom elem
const insertFunction = function (elem) {
    const html = `<div class="image_prev_innner_div">
   <img src="${elem.src}" id="${elem.id}" class="prevImageSm${elem.id} prevImage_sm_elm"
       alt="${elem.src}">
   </div>`;

    allPreveImageElm.insertAdjacentHTML('beforeend', html);
};

let num = 0;
let prevSmCardImage;
let targetElmId;

prevImage.forEach((el) => {
    num++;
    el.setAttribute('id', num);
    insertFunction(el);

    // when the user click on the any image then show the previmage div
    el.addEventListener('click', function () {
        const src = this.getAttribute('src');
        prevImageDivElm.classList.add('prve_image_active');
        bigPrevImageElm.src = src;
        bigPrevImageElm.setAttribute('id', this.id);

        const prevImageId = bigPrevImageElm.getAttribute('id');
        targetElmId = prevImageId;

        if (el.id === prevImageId) {
            prevSmCardImage = document.querySelector(`.prevImageSm${el.id}`);
            let perent = prevSmCardImage.parentNode;

            perent.style.border = '1px solid #E3001B';
            prevSmCardImage.classList.add('prveImageActiveElem');
            // perent.style.backgroundColor = '#E3001B';
        }
    });
});

const grabActiveElm = function () {
    const prevAllImagesDiv = document.querySelectorAll('.image_prev_innner_div');
    prevAllImagesDiv.forEach((el) => {
        el.style.border = 'none';
        el.style.backgroundColor = 'var(--scrollBarCl)';
    });
};

// close the model (prev image dev) window
if (prevImageCloseBtn) {
    prevImageCloseBtn.addEventListener('click', function () {
        prevImageDivElm.classList.remove('prve_image_active');
        grabActiveElm();
    });
}

const changeimageData = function () {
    let prevImageAC = document.querySelector(`.prevImageSm${targetElmId}`);
    let perent = prevImageAC.parentNode;

    if (prevImageAC && perent) {
        let src = prevImageAC.getAttribute('src');

        bigPrevImageElm.src = src;

        perent.style.border = '1px solid #E3001B';
        prevImageAC.classList.add('prveImageActiveElem');
        // perent.style.backgroundColor = '#E3001B';
    } else {
        return;
    }
};

// grab the dom elem when the dom element successfuly injected
const smCardElm = document.querySelectorAll('.prevImage_sm_elm');

const changeimageToRight = function () {
    grabActiveElm();

    if (targetElmId === smCardElm.length) {
        targetElmId = 0;
        changeimageData();
    } else {
        targetElmId++;
        changeimageData();
    }
};

const changeimageToLeft = function () {
    grabActiveElm();

    if (targetElmId === 0) {
        targetElmId = smCardElm.length;
        changeimageData();
    } else {
        targetElmId--;
        changeimageData();
    }
};

// show image by clike the thumb
smCardElm.forEach((el) => {
    el.addEventListener('click', function () {
        grabActiveElm();
        let src = this.getAttribute('src');
        let perent = this.parentNode;

        bigPrevImageElm.src = src;
        targetElmId = this.id;

        perent.style.border = '1px solid #E3001B';
        this.classList.add('prveImageActiveElem');
        // perent.style.border = '1px solid #E3001B';
    });
});

// events
if (arrowRight) {
    arrowRight.addEventListener('click', changeimageToRight);
}

if (arrowLeft) {
    arrowLeft.addEventListener('click', changeimageToLeft);
}

let height = 600;

// showing the hidden navbar dom elem
const showTheSecondNavbar = function () {
    secondTopNavBarElem.style.height = `100%`;
};

const hideSecondNavbar = function () {
    secondTopNavBarElem.style.height = '0px';
};

// show the second navbar
barIconsElm.addEventListener('click', showTheSecondNavbar);
secondNavbarCloseButton.addEventListener('click', hideSecondNavbar);

const removeActiveSmCl = function () {
    for (let i = 0; i < smNavbarTabIconsELm.length; i++) {
        smNavbarTabIconsELm[i].classList.remove('sm_nav_icon_div_active');
    }
};

smNavbarTabIconsELm.forEach((el) => {
    el.addEventListener('click', function () {
        removeActiveSmCl();

        this.classList.add('sm_nav_icon_div_active');
    });
});
