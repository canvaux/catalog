'use strict';

const searchTabsCards = document.querySelectorAll('.search_by_year_div');
const engineCliELm = document.querySelectorAll('.engine_cli');
const tabsContent = document.querySelectorAll('.tabs_content');
const tabsContnetELm = document.querySelectorAll('.tabs_options');

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
   });
}
