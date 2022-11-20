$('.navToggle').on('click', function (e) {
  e.preventDefault();
  $('body').toggleClass('navToggleActive');
});


$(window).scroll(function(){
  if ($(this).scrollTop() > 10) {
    $('body').addClass('fixedHeader');
  } else {
    $('body').removeClass('fixedHeader');
  }
});


var swiper = new Swiper(".testimonialSwiper", {
  navigation: {
    nextEl: ".test-swiper-button-next",
    prevEl: ".test-swiper-button-prev",
  },
});


var swiper = new Swiper(".certificatesSlider", {
  slidesPerView: 1,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".cert-swiper-button-next",
    prevEl: ".cert-swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },
});

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openCity2(evt2, cityName2) {
  // Declare all variables
  var j, tabcontent2, tablinks2;

  // Get all elements with class="tabcontent" and hide them
  tabcontent2 = document.getElementsByClassName("tabcontent2");
  for (j = 0; j < tabcontent2.length; j++) {
    tabcontent2[j].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks2 = document.getElementsByClassName("tablinks2");
  for (j = 0; j < tablinks2.length; j++) {
    tablinks2[j].className = tablinks2[j].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName2).style.display = "block";
  evt2.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
document.getElementById("defaultOpen2").click();