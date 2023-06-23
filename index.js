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
        fade.target.style.animation='fade1 0.5s';
      }else{
        fade.target.style.opacity=0;
        fade.target.style.animation='fade2 .5s';
      }
    })
  });
  
  let fade = document.querySelectorAll('.skill')
  observer.observe(fade[0])

  ScrollOut({
    onShown : ()=>{
      new TypeIt('.typing')
      .pause(1000)
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

  let popup = document.querySelectorAll('.design li a')
  let popupFull = document.querySelectorAll('.design li .full')
  let popupClose = document.querySelectorAll('.design li .full')

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

});