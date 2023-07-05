$(function(){
  $(window).on('scroll', function () {
    var st = $(this).scrollTop();

    if (st > 0) {
      $('#header').addClass('fixed');
    } else {
      $('#header').removeClass('fixed');
    }
  });
  
  let observer = new IntersectionObserver((e)=>{
    e.forEach((fade)=>{
      if(fade.isIntersecting){
        fade.target.style.opacity=1;
        fade.target.style.animation='fade1 1s';
      }else{
        fade.target.style.opacity=0;
        fade.target.style.animation='fade2 1s';
      }
    })
  });
  
  let fade = document.querySelectorAll('.slide')
  observer.observe(fade[0])

  ScrollOut({
    onShown : ()=>{
      new TypeIt('.typing')
      .pause(100)
      .go();      
    }
  });

  var canvas = document.getElementById("ps");
  var value = 100;
  new Chart(canvas, {
    type: "doughnut",
    data:{
      datasets: [
        {
          data: [value, 100 - value],
          backgroundColor: ["#5362c0", "#ffffff05"],
          borderWidth: 0,
          borderRadius: 50,
        },
      ],
    },
    options:{
      cutout: '70%',
    },
  });

  var canvas = document.getElementById("ai");
  var value = 90;
  new Chart(canvas, {
    type: "doughnut",
    data:{
      datasets: [
        {
         data: [value, 100 - value],
         backgroundColor: ["#f8a522", "#ffffff05"],
         borderWidth: 0,
         borderRadius: 50,
        },
      ],
    },
    options:{
      cutout: '70%',
    },
  });

  var canvas = document.getElementById("html");
  var value = 90;
  new Chart(canvas, {
    type: "doughnut",
    data:{
      datasets: [
        {
         data: [value, 100 - value],
         backgroundColor: ["#3bb6ea", "#ffffff05"],
         borderWidth: 0,
         borderRadius: 50,
        },
      ],
    },
    options:{
      cutout: '70%',
    },
  });

  var canvas = document.getElementById("css");
  var value = 90;
  new Chart(canvas, {
    type: "doughnut",
    data:{
      datasets: [
        {
         data: [value, 100 - value],
         backgroundColor: ["#f6c223", "#ffffff05"],
         borderWidth: 0,
         borderRadius: 50,
        },
      ],
    },
    options:{
      cutout: '70%',
    },
  });

  var canvas = document.getElementById("js");
  var value = 60;
  new Chart(canvas, {
    type: "doughnut",
    data:{
      datasets: [
        {
         data: [value, 100 - value],
         backgroundColor: ["#8dd62f", "#ffffff05"],
         borderWidth: 0,
         borderRadius: 50,
        },
      ],
    },
    options:{
      cutout: '70%',
    },
  });

  let popup = document.querySelectorAll('.worksList')
  let popupFull = document.querySelectorAll('.worksList .full')
  let popupClose = document.querySelectorAll('.worksList .full')

  for(let s of popupFull){s.style.display='none'}

  popup.forEach(function(i){
    i.addEventListener('click',function(e){
      e.preventDefault()
      this.nextElementSibling.style.display='block';
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    })
  })
  popupClose.forEach(function(i){
    i.addEventListener('click',function(){
      this.style.display='none'
      document.getElementsByTagName('body')[0].style.overflow = 'visible';
    })
  })
  anime({
    targets: '.tit1 p',
    delay:anime.stagger(200),
    translateY: [50, 0],    
    scaleX: [0, 1],
    easing: 'easeInExpo',
    duration:500
  });
  anime({
    targets: '.tit2 p',
    translateY: [50, 0],
    scaleY: [0, 1],
    delay:1500,
  });
  // 'easeInQuad'	'easeOutQuad'	'easeInOutQuad'	'easeOutInQuad'
  // 'easeInCubic'	'easeOutCubic'	'easeInOutCubic'	'easeOutInCubic'
  // 'easeInQuart'	'easeOutQuart'	'easeInOutQuart'	'easeOutInQuart'
  // 'easeInQuint'	'easeOutQuint'	'easeInOutQuint'	'easeOutInQuint'
  // 'easeInSine'	'easeOutSine'	'easeInOutSine'	'easeOutInSine'
  // 'easeInExpo'	'easeOutExpo'	'easeInOutExpo'	'easeOutInExpo'
  // 'easeInCirc'	'easeOutCirc'	'easeInOutCirc'	'easeOutInCirc'
  // 'easeInBack'	'easeOutBack'	'easeInOutBack'	'easeOutInBack'
  // 'easeInBounce'	'easeOutBounce'	'easeInOutBounce'	'easeOutInBounce'
  

  setTimeout(function(){
    $('.worksMenu').hide();
    $('.worksMenu').css("opacity","1");
    $('.worksMenu').eq(0).show();
  },100);

$('main .works').each(function(){
  var tab = $(this).find(".cate a");
  var cont = $(this).find('.worksMenu');

  tab.click(function(){
    var ind=$(this).index();
    tab.removeClass("active");
    $(this).addClass("active");
    cont.removeClass("active");
    cont.eq(ind).addClass();
    cont.hide();
    cont.eq(ind).show();
  });
});



});