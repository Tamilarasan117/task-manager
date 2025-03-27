// animation for left card
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".box1");  // select all box1 elem
  console.log(cards)  // debugging

  const pageScroll = () => {
      cards.forEach(card => {
        console.log(card)  // debugging
          const elemInfo = card.getBoundingClientRect();  // get elem info
          
          console.log('Left Card Info: ', elemInfo)  // debugging
          console.log('Left Card Top: ', elemInfo.top)  // debugging
          console.log('Window height: ', window.innerHeight)  // debugging
          
          let elemTop = elemInfo.top
          let winHig = window.innerHeight

          elemTop < winHig * 0.8 ? card.classList.add("card1") : ''
      });
  };

  setTimeout(() => pageScroll(), 1000);
  /* scroll event listener for window,
     when the page is scrolled call the function to apply class */
  window.addEventListener("scroll", pageScroll);
});

// animation for right card
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".box2");

  const pageScroll = () => {
      cards.forEach(card => {
          const elemInfo = card.getBoundingClientRect();

          let elemTop = elemInfo.top
          let winHig = window.innerHeight

          elemTop < winHig * 0.8 ? card.classList.add("card2") : ''
      });
  };

  setTimeout(() => pageScroll(), 1000);
  window.addEventListener("scroll", pageScroll);
});

// animation for rounded
document.addEventListener("DOMContentLoaded", () => {
  const rounds = document.querySelectorAll(".rounded");

  const pageScroll = () => {
      rounds.forEach(round => {
          const elemInfo = round.getBoundingClientRect();

          let elemTop = elemInfo.top
          let winHig = window.innerHeight

          elemTop < winHig * 0.98 ? round.classList.add("change") : ''
      });
  };

  setTimeout(() => pageScroll(), 1000);
  window.addEventListener("scroll", pageScroll);
});