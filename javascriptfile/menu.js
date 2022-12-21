const hamburger = document.querySelector('.hamburger_img');
const closeHamburgerBtn = document.querySelector('.close_hamburger');
const modalMenuContainer = document.querySelector('.modal_menu_container');
const menuOption = document.querySelectorAll('.menu_option');
const seeProjectDetailsBtn = document.querySelector('#see-projects-btn');
const worksSection = document.querySelector('.works_section');

const cardsData = [
  {
    id: 1,
    name: ['Tonic', "Tonic"],
    description:[
    "A daily selection of privately personalized reads; no accounts or sign-ups required.", "A daily selection of privately personalized reads; no accounts or sign-ups required."],
    image:[ "../img/jumbo1.jpg" , "../img/jumbo5.png" ],
    technologies: ["html", " css ", "javaScript" ],
    technologiesDesk: ["html", "Ruby on rails", "css", "javaScript"],
    technologiesPop: ["html" ," css" ,"javaScript", "github","ruby", "Bootstraps" ],
    Source: 'https://github.com/emekaemmanuel/res_portfolio',
    liveLink: 'https://github.com/emekaemmanuel/res_portfolio',
  },

  {
    id: 2,
    name: ["Multi-Post Stories", "Multi-Post Stories"],
    description:[
      "A daily selection of privately personalized reads; no accounts or sign-ups required.", "A daily selection of privately personalized reads; no accounts or sign-ups required.", "Experimental content creation feature that allows users to add to an existing story over the course a day without spamming their friends."],
    image: ["../img/jumbo4.jpg" , "../img/jumbo4b.jpg"],
    technologies: ["html", " css ", "javaScript" ],
    technologiesDesk: ["html", "Ruby on rails", "css", "javaScript"],
    technologiesPop: ["html" ," css" ,"javaScript", "github","ruby", "Bootstraps" ],
    Source: 'https://github.com/emekaemmanuel/res_portfolio',
    liveLink: 'https://github.com/emekaemmanuel/res_portfolio',
  },

  {
    id: 3,
    name: [ "Tonic", "Facebook 360"],
    description:
      [ "A daily selection of privately personalized reads; no accounts or sign-ups required.", "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR..." ],
    image: ["../img/jumbo3.jpg", "../img/jumbo1b.png" ],
    technologies: ["html", " css ", "javaScript" ],
    technologiesDesk: ["html", "Ruby on rails", "css", "javaScript"],
    technologiesPop: ["html" ," css" ,"javaScript", "github","ruby", "Bootstraps" ],
    Source: 'https://github.com/emekaemmanuel/res_portfolio',
    liveLink: 'https://github.com/emekaemmanuel/res_portfolio',
  },

  {
    id: 4,
    name:[ "Multi-Post Stories", "Uber Navigation"],
    description:
      ["A daily selection of privately personalized reads; no accounts or sign-ups required.", "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car." ],
      image: ["../img/jumbo4.jpg" , "../img/jumbo2b.png"],
      technologies: ["html", " css ", "javaScript" ],
      technologiesDesk: ["html", "Ruby on rails", "css", "javaScript"],
      technologiesPop: ["html" ," css" ,"javaScript", "github","ruby", "Bootstraps" ],
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
  let even = i % 2===0;
  console.log(even, i);
  // console.log(cardsData[i].name);
  // console.log(cardsData[i].description);
  // console.log(cardsData[i].liveLink);
  // console.log(cardsData[i].Source);
  // console.log(cardsData[i].id);
  // console.log(cardsData[i].technologies);
  // console.log(cardsData[i].technologiesPop); 
  // console.log(cardsData[i].technologiesDesk);
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

                <button id="see-projects-btn" indexBtn=${cardsData[i]} type="submit"><a class="font5 textdecoration" href="#">See Project</a></button>

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

                <button class="font5 textdecoration seepopup" type="submit" index=${cardsData[i]}>See Project</button>

            </div>

        </article>

  `
}

worksSection.innerHTML=""
worksSection.innerHTML=displayCard

console.log(worksSection);
console.log(cardsData);

const displayPopup = () => {
  const showPopupBtn = document.querySelectorAll('.seepopup');
  const popUpContainer = document.createElement('section');
  popUpContainer.className = "popupsection"
  showPopupBtn.forEach((e) => {
e.addEventListener("click", () => {
  e.preventDefault();
  const btnIndex = e.getAttribute("index")
  let popupEle = popupContent(cardsData[btnIndex]) 
  const body = document.body;  
  body.append(popUpContainer); 
  const popUpBox = document.querySelector('.popupsection'); 
  popUpBox.innerHTML = popupEle; 
  const closePopup = document.querySelectorAll('.close-popup');
      closePopup.forEach((e) => {
        e.addEventListener('click', () => {
          popUpContainer.remove(); 
        });
      });
    })
})
}

displayPopup()



// const showModal = () => {
//   const btn = document.querySelectorAll('.work-btn');
//   const modalContainer = document.createElement('section');
//   modalContainer.className = 'modal-container';
//   const modalMobile = document.createElement('section');
//   modalMobile.className = 'modal-container-mobile';
//   btn.forEach((e) => {
//     e.addEventListener('click', () => {
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




const popupContent = (arr) => `
 <div class="modal-body">
        <figure class="close-img">
          <img class="close-modal" src="./img/close-x.png" alt="" />
        </figure>
        <figure class="modal-img">
          <img class="img-file" src="./img/card1.png" alt="" />
        </figure>
        <div class="modal-tittle">
          <div class="heading">
            <h2>${arr.name}</h2>
          </div>
          <div class="modal-btns">
            <a href="" target="_blank"><button>See Live <img src="./img/see-live.png" alt=""></i></button></a>
            <a href="" target="_blank"><button>See Source <img src="./img/gh.png" alt="github"></button></a>
          </div>
        </div>
        <div class="technologies">
          <ul>
          ${uList}
          </ul>
        </div>
        <div class="desc">
          <p>
            ${arr.description}
          </p>
        </div>
      </div>
`;
