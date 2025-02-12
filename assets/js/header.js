const lang_btns = document.querySelectorAll('.lang-active');
const lang_lists = document.querySelectorAll('.lang-list li');

lang_btns.forEach(lang_btn => {
    lang_btn.addEventListener('click', () => {
        lang_btn.parentElement.classList.toggle('showLang')
    });
});

lang_lists.forEach(list => {
    list.addEventListener('click', () => {
        lang_lists.forEach(li => {
            li.classList.remove('active')
        });
        list.classList.add('active')
        list.parentElement.previousElementSibling.children[0].textContent = list.textContent;
        list.parentElement.parentElement.classList.remove('showLang');
    })
})

document.addEventListener('click', (e) => {
    lang_btns.forEach(lang_btn => {
        lang_btn.parentElement.contains(e.target) || lang_btn.parentElement.classList.remove('showLang')
    });
})


const menuBtn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.menu'),
      logo = document.querySelector('.header .logo'),
      body = document.querySelector('body');


menuBtn.addEventListener('click', () => {
  menu.classList.toggle('d-none')
  menuBtn.classList.toggle('clickedBtn')
  logo.classList.toggle('darkLogo')
  body.classList.toggle('bodyStopScroll')
});



const dealer_btns = document.querySelectorAll('.dealer-btn'),
      popUp_form = document.querySelector('.popUp-form');


dealer_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        popUp_form.classList.remove('d-none')
        body.classList.toggle('bodyStopScroll')
    })
});


// popUp-form
const userName = document.getElementById('user_name'),
    userPhone = document.getElementById('user_phone'),
    formBtn = document.querySelector('.popUp-form .form-btn');

formBtn.addEventListener('click', () => {
checkInputs();
const userNameSuc =  userName.nextElementSibling.classList,
      userPhoneSuc =  userPhone.nextElementSibling.classList;

if(userNameSuc == 'success' && userPhoneSuc == 'success') {
  // formBtn.type = 'submit'
//   location.reload();
popUp_form.children[0].classList.add('d-none')
popUp_form.children[1].classList.remove('d-none')
}
})

function checkInputs() {
const userNameVal = userName.value.trim(),
      userPhoneVal = userPhone.value.trim();

if(userNameVal == '' || userName.value.length <= 2) {
  setError(userName)
} else {
  setSuccess(userName)
}

if(userPhoneVal == '' || userPhone.value.substr(-1) === '_') {
    setError(userPhone)
    userPhone.nextElementSibling.innerHTML = '*Введите 11 значный номер'
    } else {
        setSuccess(userPhone)
        userPhone.nextElementSibling.innerHTML = ''
    }

}




// search result
const search_inp = document.querySelector('.popUp-search .search-inp'),
      results = document.querySelectorAll('.swiper-result .swiper-slide'),
      searchBtns = document.querySelectorAll('header .search-btn'),
      popUp_search = document.querySelector('.popUp-search');


searchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        popUp_search.classList.remove('d-none')
        body.classList.toggle('bodyStopScroll')
    })
})

search_inp.addEventListener('input', () => {
    if(search_inp.value.length > 1) {
        results.forEach(result => {
            result.classList.add('show')
        })
    } else {
        results.forEach(result => {
            result.classList.remove('show')
        })
    }
})

const result = new Swiper('.swiper-result', {
    loop: false,
    scrollbar: {
        el: '.result-scrollbar',
        draggable: true,
        snapOnRelease: true,
        dragSize: 'auto',
      },
    breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 16,
          grid: {
              rows: 1,
              fill: 'row'
            },
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 14,
          grid: {
              rows: 2,
              fill: 'row'
            },
        },
  }
  });

  const block2 = new Swiper('.swiper-block2', {
    loop: false,
    breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 16,
          loop: false,
          centeredSlides: false,
          grid: {
              rows: 3,
              fill: 'row'
            },
        },
        768: {
          slidesPerView: 3.5,
          spaceBetween: 14,
          loop: true,
          centeredSlides: true,
        },
        992: {
          slidesPerView: 4.2,
          spaceBetween: 14,
          loop: true,
          centeredSlides: true,
        },
  }
  });


  // Свяжитесь с нашим специалистом
const user_name = document.getElementById('name'),
    user_phone = document.getElementById('phone'),
    form_btn = document.querySelector('.block8-form .form-btn');

form_btn.addEventListener('click', () => {
formCheckInputs();
const user_nameSuc =  user_name.nextElementSibling.classList,
  user_phoneSuc =  user_phone.nextElementSibling.classList;

if(user_nameSuc == 'success' && user_phoneSuc == 'success') {
// form_btn.type = 'submit'
// location.reload();
popUp_form.children[0].classList.add('d-none')
popUp_form.children[1].classList.remove('d-none')
popUp_form.classList.remove('d-none')
}
})

function formCheckInputs() {
const user_nameVal = user_name.value.trim(),
  user_phoneVal = user_phone.value.trim();

if(user_nameVal == '' || user_name.value.length <= 2) {
setError(user_name)
} else {
setSuccess(user_name)
}

if(user_phoneVal == '' || user_phone.value.substr(-1) === '_') {
setError(user_phone)
user_phone.nextElementSibling.innerHTML = '*Введите 11 значный номер'
} else {
    setSuccess(user_phone)
    user_phone.nextElementSibling.innerHTML = ''
}

}


  function setSuccess(input) {
    input.parentElement.children[3].classList.add('success');
    input.parentElement.children[3].classList.remove('error');
    input.nextElementSibling.classList.add('success')
    }
    
    function setError(input) {
    input.parentElement.children[3].classList.add('error');
    input.parentElement.children[3].classList.remove('success');
    }
     
      
    // input mask
      $("#user_phone").inputmask({"mask": "+7(999) 999-99-99"});
      $("#phone").inputmask({"mask": "+7(999) 999-99-99"});



