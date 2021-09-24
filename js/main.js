document.addEventListener("DOMContentLoaded", () => {
    (function scrollSpy() {
     const targets = document.querySelectorAll(".section"),
      options = {
       threshold: 0.5
      };
     // check if IntersectionObserver is supported
     if ("IntersectionObserver" in window) {
      (() => {
       const inView = target => {
        const interSecObs = new IntersectionObserver(entries => {
         entries.forEach(entry => {
          const elem = entry.target;
          let currentNav = document.querySelector(
           `#home-nav ul li a[href='#${elem.id}']`
          );
          entry.isIntersecting
           ? currentNav.classList.add("active-"+elem.id)
           : currentNav.classList.remove("active-"+elem.id);
         });
        }, options);
        interSecObs.observe(target);
       };
       targets.forEach(inView);
      })();
     }
    })();
   });
  
  var $window = $(window);
  var $document = $(document);
  var $navButtons = $("#home-nav ul li a");

  var $navGoPrev = $(".go-prev");
  var $navGoNext = $(".go-next");
  var $slidesContainer = $("#HomePage");
  var $slides = $("article");
  var $currentSlide = $slides.first();

  var isAnimating = false;

  var pageHeight = $window.innerHeight();

  var keyCodes = {
    UP  : 38,
    DOWN: 40
  }

  goToSlide($currentSlide);



  $window.on("resize", onResize).resize();
  $window.on("mousewheel DOMMouseScroll", onMouseWheel);
  $document.on("keydown", onKeyDown);
  $navButtons.on("click", onNavButtonClick);
  $navGoPrev.on("click", goToPrevSlide);
  $navGoNext.on("click", goToNextSlide);

var self  = this;


  function onNavButtonClick(event)
  {
    var $button = $(this);

    var $slide = $($button.attr("href"));


    if($slide.length)
    {
      goToSlide($slide);
      event.preventDefault();
    }
  }

  function onKeyDown(event)
  {

    var PRESSED_KEY = event.keyCode;

    if(PRESSED_KEY == keyCodes.UP)
    {
      goToPrevSlide();
      event.preventDefault();
    }
    else if(PRESSED_KEY == keyCodes.DOWN)
    {
      goToNextSlide();
      event.preventDefault();
    }

  }

  function onMouseWheel(event)
  {
    var delta = event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail;

    if(delta < -1)
    {
      goToNextSlide();
    }
    else if(delta > 1)
    {
      goToPrevSlide();
    }
  }

  function goToPrevSlide()
  {
    if($currentSlide.prev().length)
    {
      goToSlide($currentSlide.prev());
    }
  }
  function goToNextSlide()
  {
    if($currentSlide.next().length)
    {
      goToSlide($currentSlide.next());
    }
  }
  function goToSlide($slide)
  {
    if(!isAnimating && $slide.length)
    {

      isAnimating = true;
      
      $currentSlide = $slide;
      

      $currentID = $currentSlide.attr("id");
      $currentButton = $navButtons.filter( "." + $currentID );

      TweenLite.to($slidesContainer, 1, {scrollTo: {y: pageHeight * $currentSlide.index() }, onComplete: onSlideChangeEnd, onCompleteScope: this});

      
        // add other nav btns here
      $navButtons.removeClass("active-landing active-cctv active-fire active-alarm active-contact active-wireless active-smart");
      $currentButton.addClass("active-"+$currentID);



    }
  }


  function onSlideChangeEnd()
  {
    isAnimating = false;
  }

  function onResize(event)
  {

    var newPageHeight = $window.innerHeight();


    if(pageHeight !== newPageHeight)
    {
      pageHeight = newPageHeight;

      TweenLite.set([$slidesContainer, $slides], {height: pageHeight + "px"});

      TweenLite.set($slidesContainer, {scrollTo: {y: pageHeight * $currentSlide.index() }});
    }

  }
const AutoSlider = () => {
  const playBtn = document.getElementById('play-btn');
  const pauseBtn = document.getElementById('pause-btn');
  const firstSlideBtn = document.getElementById("landing-btn")
  var pause = true;
  var playing;

  const handelPlay = () => {
    pause = !pause;
    console.log(pause);

    const goNext = () =>{
      if($currentSlide.next().length)
      {
        goToSlide($currentSlide.next());
      }
      else{
        firstSlideBtn.click();
      }
    }
    
    playing = setInterval(goNext,2000);
  }

  const handelPause = () => {
      clearInterval(playing)
  }

  playBtn.addEventListener("click", handelPlay);
  pauseBtn.addEventListener("click", handelPause);
}
AutoSlider()

const openBtn = document.getElementById("menu-btn")
const closeBtn = document.getElementById("close-menu-btn")


const openFunc = () => {
    const menu = document.getElementsByClassName("first-nav")[0]
    menu.classList.add("open")
}

const closeFunc = () => {
    const menu = document.getElementsByClassName("first-nav")[0]
    menu.classList.remove("open")
}

openBtn.addEventListener("click", openFunc)
closeBtn.addEventListener("click", closeFunc)
  