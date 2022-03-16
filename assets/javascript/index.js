'use strict';

// Dom elements
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
const allPreveImageElm = document.querySelector('.all_sm_iamges');
const bigPrevImageElm = document.querySelector('.prev_imge');
const barIconsElm = document.querySelector('.barsIconsElm');
const secondTopNavBarElem = document.querySelector('.navbar_second_innercontent');
const secondNavbarCloseButton = document.querySelector('.second_close_button');
const smNavbarTabIconsELm = document.querySelectorAll('.sm_nav_icon_div');
const tabParentDivElm = document.querySelectorAll('.selection_pr_div');
const TabOverLyDiv = document.querySelector('.tabs_overlay_div');
const hideTabContent = document.querySelectorAll('.hide_content');
const targetELmDark = document.querySelectorAll('.selection_inner_div');
const tabsSelectRadioElm = document.querySelectorAll('.tabs_select_radio');
const techTabsSecondElm = document.querySelector('.tech_tab_second');
const tabsSmCartDivELm = document.querySelector('.tech_tabs_sm_cart');
const tabsSmCartOptionDivElm = document.querySelector('.tech_tabs_option_div');
const options = document.querySelectorAll('.ten_option');
const navigationArrowElm = document.querySelectorAll('.arrow_overlay_div');
const scrollTabDivElm = document.querySelectorAll('.tabs_container_inner_div');
const editTabDivElm = document.querySelector('.tabs_eidt_div');
const productContainerDivElm = document.querySelectorAll('.product_contaner_div');
const resultDivElm = document.querySelectorAll('.result_div');
const searchSmtabsElm = document.querySelector('.searchBytabs_second');
const searchSmTopNavbarElm = document.querySelector('.searchBy_sm_tabs');
const searchSmTabCmElm = document.querySelectorAll('.searchBy_sm_tabs_second');

// global variables
let height = 600;
let width;
let elmDiv;
let num = 0;
let prevSmCardImage;
let targetElmId;
let showSmTabs;

// home page tabs when the screen
if (searchSmTopNavbarElm) {
    searchSmTopNavbarElm.addEventListener('click', function () {
        if (!showSmTabs) {
            showSmTabs = true;

            searchSmtabsElm.classList.add('searchBytabs_second_active');
        } else {
            showSmTabs = false;

            searchSmtabsElm.classList.remove('searchBytabs_second_active');
        }
    });

    // remover all preview active tabs
    const removeAllPrevTabs = function () {
        tabsContent.forEach((el) => {
            el.style.display = 'none';
        });
    };

    // get the mobile top navbar elem for changing the style, text and images src
    let searchSmChElm = searchSmTopNavbarElm.childNodes[1].childNodes[1].childNodes;

    // grab the first and thred elem from the array [1] -> image, [3] -> paragraph
    let searchSmSrc = searchSmChElm[1];
    let searchSmTextContent = searchSmChElm[3];

    searchSmTabCmElm.forEach((el) => {
        el.addEventListener('click', function () {
            removeAllPrevTabs();

            // grab the selected element data..
            let searchSmELmSrc = searchSmSrc.getAttribute('src');
            let searchSmElmTextContent = searchSmTextContent.textContent;
            let targetElmAttrubute = this.getAttribute('data-target');
            let topNavDataTarget = searchSmTopNavbarElm.getAttribute('data-target');

            // get the all child from the target element
            const chidlEm = this.childNodes;
            let chidlELmAttribute = this.getAttribute('data-target');
            this.setAttribute('data-target', topNavDataTarget);
            searchSmTopNavbarElm.setAttribute('data-target', chidlELmAttribute);

            let targetElmChildNode = chidlEm[1].childNodes[1];
            let src = targetElmChildNode.childNodes[1];
            let targetTextContent = targetElmChildNode.childNodes[3];

            searchSmSrc.src = src.getAttribute('src');
            searchSmTextContent.textContent = targetTextContent.textContent;
            src.setAttribute('src', searchSmELmSrc);
            targetTextContent.textContent = searchSmElmTextContent;

            // changing the tabs style and rest the tabs open settings.
            const activeTabDivElm = document.querySelector(`#${targetElmAttrubute}`);
            activeTabDivElm.style.display = 'block';
            searchSmtabsElm.classList.remove('searchBytabs_second_active');
            showSmTabs = false;
        });
    });
}

// removing active class
const removeActiveCl = function () {
    searchTabsCards.forEach((el) => {
        el.classList.remove('search_by_year_div_active');
        // switch the elem image
        if (!el.classList.contains('search_by_year_div_active')) {
            engineCliELm.forEach((el) => {
                if (el.id % 2 === 0) {
                    // hide the elem when the id % 2 = 0
                    el.style.display = 'none';
                } else {
                    // show the elem when the id % 2 = 1
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

        // grab the target id for finding the current targer elm from the dome
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
        if (firstTab && secondTab) {
            if (el.classList.contains('search_by_year_div_active')) {
                // togal the images with style property
                firstTab.style.display = 'block';
                secondTab.style.display = 'none';
            }
        }
    });
});

// remove all active classes and styles
const removetabElmActive = function () {
    tabsContnetELm.forEach((el) => {
        el.classList.remove('tech_active');
    });
};

for (let i = 0; i < tabsContnetELm.length; i++) {
    tabsContnetELm[i].addEventListener('click', function () {
        removetabElmActive();

        this.classList.add('tech_active');

        // grab the elem from the dome and find the element using the target element target attribute
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
    // genrate the dom element and inject it into the dom
    const html = `
    <div class="image_prev_innner_div">
        <img src="${elem.src}" id="${elem.id}" class="prevImageSm${elem.id} prevImage_sm_elm"
        alt="${elem.src}">
    </div>`;

    allPreveImageElm.insertAdjacentHTML('beforeend', html);
};

// image preview and the next function when the user click on the next button the change image src by incress the number
prevImage.forEach((el) => {
    num++;
    el.setAttribute('id', num);

    // genrate the new element every single time when the user click on the next button
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

// showing the hidden navbar dom elem
const showTheSecondNavbar = function () {
    // change the navbar style when the user click on the bars button then change the heigth of the navbar
    secondTopNavBarElem.style.height = `100%`;
};

const hideSecondNavbar = function () {
    // reset the navbar height proprty
    secondTopNavBarElem.style.height = '0px';
};

// show the second navbar
barIconsElm.addEventListener('click', showTheSecondNavbar);
secondNavbarCloseButton.addEventListener('click', hideSecondNavbar);

// navbar aciver and hide function
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

// adding style into the dom element
const tabElmStyle = function (elm) {
    // apply some style in mobile view in tabs contents
    elm.style.display = 'block';
    elm.style.zIndex = '300';
    elm.style.position = 'absolute';
    elm.style.top = '50%';
    elm.style.left = '50%';
    elm.style.transform = 'translate(-50%, -90%)';
};

window.addEventListener('resize', function () {
    width = this.window.innerWidth;

    if (TabOverLyDiv && hideTabContent && tabsSelectRadioElm && targetELmDark) {
        if (width > 600) {
            TabOverLyDiv.classList.remove('tabs_overlay_div_active');

            hideTabContent.forEach((el) => {
                el.style.display = 'block';
                el.style.zIndex = '300';
                el.style.position = 'relative';
                el.style.top = '0';
                el.style.left = '0';
                el.style.transform = 'none';
            });

            tabsSelectRadioElm.forEach((el) => {
                el.style.display = 'none';
            });
        } else {
            hideTabContent.forEach((el) => {
                el.style.display = 'none';
            });

            targetELmDark.forEach((el) => {
                const child = el.childNodes;
                child[1].classList.remove('darkcolor');
            });
        }
    }
});

if (width === undefined) {
    // if the width is not set then set the width = window current widht
    width = window.innerWidth;
}

const showSelectedElm = function () {
    const elmValue = this.parentNode.childNodes[1];

    // user selected radio button value ---------------------------
    console.log(elmValue);
    // user selected radio button value ---------------------------
};

// add the active class in the target element. and check the radio button also
// const removerPrevActive = function () {
//     targetELmDark.forEach((el) => {
//         el.classList.remove('activeTargetElm');
//     });
// };

// const userCheckTargetElm = function (event) {
//     removerPrevActive();

//     this.classList.add('activeTargetElm');
// };

// mobile view tabs component when the screen viewport is less then 600px then the tabse view and style is changed like card is the if you want to change the card property then change the property from the tabElmStyle funtion.
if (tabParentDivElm) {
    tabParentDivElm.forEach((el) => {
        el.addEventListener('click', function () {
            if (width <= 600) {
                if (tabsSelectRadioElm) {
                    tabsSelectRadioElm.forEach((el) => {
                        el.style.display = 'block';

                        el.addEventListener('click', showSelectedElm);
                    });
                }

                // show the overlay div when the user click the any tab and if the width is less then 600
                TabOverLyDiv.classList.add('tabs_overlay_div_active');

                if (TabOverLyDiv.classList.contains('tabs_overlay_div_active')) {
                    // document.body.style.overflowY = 'hidden';

                    const id = this.id;

                    // grab the dom elem useing the target id
                    elmDiv = document.querySelector(`#${id}_content`);

                    // change the tabs style
                    tabElmStyle(elmDiv);

                    // loop over the card content for adding style in one single time
                    targetELmDark.forEach((event, i) => {
                        const child = event.childNodes;

                        // event.addEventListener('click', userCheckTargetElm);

                        // grab the first child from the tabs by using the array property and add the class into that element.
                        child[1].classList.add('darkcolor');

                        // if the element index % 2 = 0 then the change the style and some color and backgound color
                        if (i % 2 == 0) {
                            event.style.backgroundColor = '#e1e1e1';
                        } else {
                            event.style.backgroundColor = '#fff';
                        }
                    });
                }
            } else {
                return;
            }
        });
    });

    window.addEventListener('click', function (e) {
        const target = e.target;
        if (target.classList.contains('tabs_overlay_div_active')) {
            // reset all setting when the user clikc on the overlay div without check any option

            // this.document.body.style.overflowY = 'scroll';
            TabOverLyDiv.classList.remove('tabs_overlay_div_active');
            elmDiv.style.display = 'none';
        }
    });
}

// open the close tab function
let openTab = false;

if (tabsSmCartDivELm) {
    tabsSmCartDivELm.addEventListener('click', function () {
        if (!openTab) {
            openTab = true;
            tabsSmCartOptionDivElm.classList.add('tech_tabs_option_div_active');
        } else {
            openTab = false;
            tabsSmCartOptionDivElm.classList.remove('tech_tabs_option_div_active');
        }
    });

    options.forEach((elm) => {
        elm.addEventListener('click', function () {
            elm.style.color = '#fff';

            const topTabChildElm = tabsSmCartDivELm.childNodes;
            // grab the first child value and store it
            const tabValue = topTabChildElm[1].textContent;
            let tabAttribute = topTabChildElm[1].getAttribute('data-target');

            // grab all child notes to change the style and grab the inner text value from the dom elem
            const chilElm = topTabChildElm;

            // if the user click on any option button and div the change the top tab value and store it, and change value the clicked elem and assign the new value
            let targetElmChildElm = this.childNodes;
            let targeAttribute = targetElmChildElm[1].getAttribute('data-target');

            chilElm[1].textContent = targetElmChildElm[1].textContent;

            targetElmChildElm[1].textContent = tabValue;

            // swipe the attribute when the user click on some option div
            topTabChildElm[1].setAttribute('data-target', targeAttribute);
            targetElmChildElm[1].setAttribute('data-target', tabAttribute);

            // every time when the user click on the tab option then click the tab and remove the class from the tab
            openTab = false;
            tabsSmCartOptionDivElm.classList.remove('tech_tabs_option_div_active');
        });
    });
}

// navigation arrow elem
const removerNavigationArrow = function (el) {
    el.addEventListener('scroll', function (e) {
        let scrollLeft = this.scrollLeft;

        if (scrollLeft >= 10) {
            navigationArrowElm.forEach((event) => {
                event.style.display = 'none';
            });
        }
    });
};

// when the user scroll the table then remove the arrow navigation
const removeArroAnimation = function () {
    if (scrollTabDivElm) {
        scrollTabDivElm.forEach((el) => {
            removerNavigationArrow(el);
        });
    }

    if (editTabDivElm) {
        removerNavigationArrow(editTabDivElm);
    }

    if (productContainerDivElm) {
        productContainerDivElm.forEach((el) => {
            removerNavigationArrow(el);
        });
    }

    if (resultDivElm) {
        resultDivElm.forEach((el) => {
            removerNavigationArrow(el);
        });
    }
};

removeArroAnimation();
