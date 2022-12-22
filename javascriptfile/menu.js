const hamburger = document.querySelector('.hamburger_img');
const closeHamburgerBtn = document.querySelector('.close_hamburger');
const modalMenuContainer = document.querySelector('.modal_menu_container');
const menuOption = document.querySelectorAll('.menu_option');
const seeProjectDetailsBtn = document.querySelector('#see-projects-btn');
const worksSection = document.querySelector('.works_section');

const cardsData = [
  {
    id: 0,
    name: ['Tonic', "Tonic"],
    description: [
      "A daily selection of privately personalized reads; no accounts or sign-ups required.", "A daily selection of privately personalized reads; no accounts or sign-ups required."],
    image: ["../img/jumbo1.jpg", "../img/jumbo5.png"],
    technologies: ["html", " css ", "javaScript"],
    technologiesDesk: ["html", "Ruby on rails", "css", "javaScript"],
    technologiesPop: ["html", " css", "javaScript", "github", "ruby", "Bootstraps"],
    Source: 'https://github.com/emekaemmanuel/res_portfolio',
    liveLink: 'https://github.com/emekaemmanuel/res_portfolio',
  },

  {
    id: 1,
    name: ["Multi-Post Stories", "Multi-Post Stories"],
    description: [
      "A daily selection of privately personalized reads; no accounts or sign-ups required.", "A daily selection of privately personalized reads; no accounts or sign-ups required.", "Experimental content creation feature that allows users to add to an existing story over the course a day without spamming their friends."],
    image: ["../img/jumbo4.jpg", "../img/jumbo4b.jpg"],
    technologies: ["html", " css ", "javaScript"],
    technologiesDesk: ["html", "Ruby on rails", "css", "javaScript"],
    technologiesPop: ["html", " css", "javaScript", "github", "ruby", "Bootstraps"],
    Source: 'https://github.com/emekaemmanuel/res_portfolio',
    liveLink: 'https://github.com/emekaemmanuel/res_portfolio',
  },

  {
    id: 2,
    name: ["Tonic", "Facebook 360"],
    description:
      ["A daily selection of privately personalized reads; no accounts or sign-ups required.", "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR..."],
    image: ["../img/jumbo3.jpg", "../img/jumbo1b.png"],
    technologies: ["html", " css ", "javaScript"],
    technologiesDesk: ["html", "Ruby on rails", "css", "javaScript"],
    technologiesPop: ["html", " css", "javaScript", "github", "ruby", "Bootstraps"],
    Source: 'https://github.com/emekaemmanuel/res_portfolio',
    liveLink: 'https://github.com/emekaemmanuel/res_portfolio',
  },

  {
    id: 3,
    name: ["Multi-Post Stories", "Uber Navigation"],
    description:
      ["A daily selection of privately personalized reads; no accounts or sign-ups required.", "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car."],
    image: ["../img/jumbo4.jpg", "../img/jumbo2b.png"],
    technologies: ["html", " css ", "javaScript"],
    technologiesDesk: ["html", "Ruby on rails", "css", "javaScript"],
    technologiesPop: ["html", " css", "javaScript", "github", "ruby", "Bootstraps"],
    Source: 'https://github.com/emekaemmanuel/res_portfolio',
    liveLink: 'https://github.com/emekaemmanuel/res_portfolio',
  },
];

const toggleMobileMenu = (e) => {
  e.preventDefault();
  modalMenuContainer.classList.toggle('hide1');
};

hamburger.addEventListener('click', toggleMobileMenu);
closeHamburgerBtn.addEventListener('click', toggleMobileMenu);

menuOption.forEach((e) => {
  e.onclick = () => {
    modalMenuContainer.classList.toggle('hide1');
  };
});

let displayCard = ""
for (let i = 0; i < cardsData.length; i++) {
  let even = i % 2 === 0;
  console.log(even, i);
  displayCard += `
  
  <article class="works_article bg_color7">

            <figure class="figure1">

                <a href="#"><img src="${cardsData[i].image[0]}" alt="Tonic_img"></a>

            </figure>

            <figure class="figure2">

                <a href="#"><img src="${cardsData[i].image[1]}" alt="Nature_img"></a>

            </figure>

            <div class="works_articlediv show1">

                <h3><a class="textdecoration font1" href="#">${cardsData[i].name[0]}</a></h3> 

                <ul>

                    <li><a class="textdecoration font2" href="#">CANOPY</a></li>
                    <li><a class="textdecoration" href="#"><img src="../img/mid_dot.jpg" alt="mit_dot"></a></li>
                    <li><a class="textdecoration font3" href="#">Back End Dev</a></li>
                    <li class="textdecoration"><a href="#"><img src="../img/mid_dot.jpg" alt="mit_dot"></a></li>
                    <li><a class="textdecoration font3" href="#">2015</a></li>


                </ul> 


                <p>${cardsData[i].description[0]}</p>

                <ul class="gridbox1">

                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologies[0]}</a></li>
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologies[1]}</a></li>
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologies[3]}</a></li>

                </ul>

                <button class="font5 textdecoration seepopup" type="button" index=${cardsData[i].id}>See Project</button>

            </div>

            <div class="works_articlediv show2">

                <h3><a class="textdecoration font1" href="#">${cardsData[i].name[0]}</a></h3>

                <ul class="ul1">

                    <li><a class="textdecoration font2" href="#">CANOPY</a></li>
                    <li><a class="textdecoration" href="#"><img src="../img/mid_dot.jpg" alt=""></a></li>
                    <li><a class="textdecoration font3" href="#">Back End Dev</a></li>
                    <li><a class="textdecoration" href="#"><img src="../img/mid_dot.jpg" alt=""></a></li>
                    <li><a class="textdecoration font3" href="#">2015</a></li>


                </ul>

                <p>${cardsData[i].description[1]}</p>

                <ul class="gridbox1">

                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologiesDesk[0]}</a></li>
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologiesDesk[1]}</a></li>
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologiesDesk[2]}</a></li>
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologiesDesk[3]}</a></li>

                </ul>

                <button class="font5 textdecoration seepopup" type="button" index=${cardsData[i].id}>See Project</button>

            </div>

        </article>

  `
}

worksSection.innerHTML = ""
worksSection.innerHTML = displayCard

console.log(worksSection);
console.log(cardsData);





// const showModal = () => {
//   const btn = document.querySelectorAll('.work-btn');
//   const modalContainer = document.createElement('section');
//   modalContainer.className = 'modal-container';
//   const modalMobile = document.createElement('section');
//   modalMobile.className = 'modal-container-mobile';
//   btn.forEach((e) => {
//     e.addEventListener('click', () => {k
//       const index = e.getAttribute('ownIndex');
//       const forLaptop = modalElem(projectArr[index]);
//       const forMobile = modalMob(projectArr[index]);
//       const body = document.querySelector('body');
//       body.append(modalContainer);
//       body.append(modalMobile);
//       const modalContain = document.querySelector('.modal-container');
//       const mobileContain = document.querySelector('.modal-container-mobile');
//       mobileContain.innerHTML = forMobile;
//       modalContain.innerHTML = forLaptop;
//       const closeModal = document.querySelectorAll('.close-modal');
//       closeModal.forEach((e) => {
//         e.addEventListener('click', () => {
//           modalMobile.remove();
//           modalContain.remove();
//         });
//       });
//     });
//   });
// };
// showModal();





// console.log(popupContent(cardsData));

// const displayPopup = () => {
const showPopupBtn = document.querySelectorAll('.seepopup');
// console.log(showPopupBtn);
const popUpContainer = document.createElement('section');
popUpContainer.className = "popup_section"
popUpContainer.classList.add("bg_color6")
// console.log(popUpContainer);
showPopupBtn.forEach(e => {
  console.log(e.type);
  e.addEventListener('click', () => {
    console.log(e);
    const btnIndex = e.getAttribute("index")
    console.log(btnIndex);

    // 
    let popupEle =

      `
  <article class="popup_article bg_color7">

<div class="popup_articlediv show1">

    <header class="popup_flex1">

        <h3><a class="textdecoration font1" href="#">${cardsData[btnIndex].name[0]}</a></h3>

        <button type="button" class="close_popup "><img src="../img/closepopup.png" alt=""></button>

    </header>

    <ul class="list1">

        <li><a class="textdecoration font2" href="#">CANOPY</a></li>
        <li><a class="textdecoration" href="#"><img src="../img/mid_dot.jpg" alt="mit_dot"></a></li>
        <li><a class="textdecoration font3" href="#">Back End Dev</a></li>
        <li class="textdecoration"><a href="#"><img src="../img/mid_dot.jpg" alt="mit_dot"></a></li>
        <li><a class="textdecoration font3" href="#">2015</a></li>


    </ul>

    <figure class="figure1">

        <a href="#"><img src="${cardsData[btnIndex].image[0]}" alt="Tonic_img"></a>

    </figure>

    <article class="desc1">
        <p>${cardsData[btnIndex].description[0]}</p>

        <ul class="gridbox1 gridbox1b">

            <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologies[0]}</a></li>
            <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologies[1]}</a></li>
            <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologies[2]}</a></li>

        </ul>
    </article>

    <footer>
        <button class="footer_btn textdecoration" id="see-projects-btn" type="submit">
            <span>See Source</span>
            <img src="../img/live_icon.png" alt="">
        </button>

        <button class="footer_btn textdecoration" id="see-projects-btn" type="submit">
            <span>See Live</span>
            <img src="../img/github_source.jpg" alt="">
        </button>
        
    </footer>

</div>

<div class="popup_articlediv show2">

    <header class="popup_flex1">

        <h3><a class="textdecoration font1" href="#">${cardsData[btnIndex].name[0]}</a></h3>

        <button type="button" class="close_popup"><img src="../img/closepopup.png" alt=""></button>

    </header> 

    <ul class="list1 ul1">

        <li><a class="textdecoration font2" href="#">CANOPY</a></li>
        <li><a class="textdecoration" href="#"><img src="../img/mid_dot.jpg" alt=""></a></li>
        <li><a class="textdecoration font3" href="#">Back End Dev</a></li>
        <li><a class="textdecoration" href="#"><img src="../img/mid_dot.jpg" alt=""></a></li>
        <li><a class="textdecoration font3" href="#">2015</a></li>

    </ul>

    <figure class="figure2 ">

        <a href="#"><img src="${cardsData[btnIndex].image[1]}" alt="Nature_img"></a>

    </figure>

    <article class="popup_flex2">
        <p class="width80">${cardsData[btnIndex].description[1]}</p>

        <div>

            <ul class="gridbox2">

                <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologiesPop[0]}</a></li>
                <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologiesPop[1]}</a></li>
                <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologiesPop[2]}</a></li>
                <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologiesPop[3]}</a></li>
                <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologiesPop[4]}</a></li>
                <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologiesPop[5]}</a></li>

            </ul>

            <footer>
                <button class="align_3 footer_btn textdecoration" id="see-projects-btn" type="submit">
                    <span>See Source</span>
                    <img src="../img/live_icon.png" alt="">
                </button>

                <button class="align_3 footer_btn textdecoration" id="see-projects-btn" type="submit">
                    <span>See Live</span>
                    <img src="../img/github_source.jpg" alt="">
                </button>
            </footer>
            
        </div>
       
    </article>
 

    

</div>

</article>
`;

console.log(popupEle);

    // popupContent(cardsData[btnIndex]) 

    const body = document.querySelector('body');
    console.log(body);
    console.log(popUpContainer);
    // console.log(body.insertAdjacentHTML("afterbegin", popUpContainer)); 
   console.log( body.appendChild(popUpContainer));

    const popUpBox = document.querySelector('.popup_section');
    popUpBox.innerHTML = popupEle;
    console.log(popUpBox);
    const closePopup = document.querySelectorAll('.close_popup');
    closePopup.forEach((e) => {
      e.addEventListener('click', () => {
        popUpContainer.remove();
      });
    });
  })
})
// }

// displayPopup()