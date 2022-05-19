document.addEventListener ('DOMContentLoaded', function() {
  let contryBtns = document.querySelectorAll('.section-catalog__btn');
  contryBtns.forEach(function(btn){
    btn.addEventListener('click', function(event){
      contryBtns.forEach(function(ContryBtn){
        ContryBtn.classList.remove('is-active');
      })
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.section-catalog__deatil-left').forEach(function (tabContent) {
        tabContent.classList.remove('open');
      });
      btn.classList.add('is-active');
      document.querySelector(`[data-target="${path}"]`).classList.add('open');

      document.querySelectorAll('.section-catalog__item-blocks').forEach(function (block) {
        block.classList.remove('open-bloks');
        block.classList.remove('open-databloks')
      });

      document.querySelectorAll(`[data-contry="${path}"]`).forEach(function(block) {
          console.log(path);
          if(path === 'Unknown') {
            block.classList.add('open-bloks');
          }
          else {
            block.classList.add('open-databloks');
          }
      });
    });
  });


  let galleryImg = document.querySelectorAll('.section-gallery__slide');
  galleryImg.forEach(function(img){
    img.addEventListener('click', function(){
      let modalwindowBg = document.querySelector('.modalwindow__background');
      let modalwindow = document.querySelector('.modalwindow');
      modalwindowBg.classList.add('open-bloks');
    })
  });

  document.querySelector('.modalwindow__btn-close').addEventListener('click', function(){
    document.querySelector('.modalwindow__background').classList.remove('open-bloks');
  })


  document.querySelectorAll('.section-catalog__item-link').forEach(function(link){
    link.addEventListener('click', function(event){
      event.preventDefault();
      const who = event.currentTarget.dataset.who;
      document.querySelectorAll('.section-catalog__deatil-left').forEach(function (tabContent) {
        tabContent.classList.remove('open');
      });
      document.querySelector(`[data-painter="${who}"]`).classList.add('open');
      if (window.innerWidth <= 320){
        document.querySelector(`[data-painter="${who}"]`).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  document.querySelectorAll('.section-catalog__item-header').forEach(function(block){
    block.addEventListener('click', function(){
      block.parentNode.classList.toggle('section-catalog__list-item--active');
    });
  });

  document.querySelectorAll('.section-public__input').forEach(function(input){
    input.addEventListener('input', function() {
      this.value = this.value.replace(/[^0-9 \,]/, '');
      let value = this.value.replace(/\s/g, '');
      let newValue = '';
      if(value.length>=4) {
        let n = (value.length%3) ? Math.floor(value.length/3) : Math.floor(value.length/3) - 1;
        console.log(n);
        for (let i = 0; i < n; i++) {
          newValue =' '+value.slice(-3) + newValue;
          value = value.slice(0, value.length-3);
        }
        newValue = value + newValue;
        this.value = newValue;
      }
    });
  });

  document.querySelectorAll('.menu-link').forEach(function(link){
    link.addEventListener('click', function(event){
      event.preventDefault();
      id = link.dataset.section;
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      });
    })
  });


  let doingBtn = document.querySelector('.section-doing__btn');
  doingBtn.addEventListener('click', function(){
    document.querySelectorAll('.section-doings__list-item').forEach(function(item){
      console.log(item);
      item.classList.remove('section-doings__list-item--active');
      console.log(item.parentNode);
    });
    doingBtn.classList.add('close');
  });


  let subMenuLink = document.querySelectorAll('.header__bottom-link');
  subMenuLink.forEach(function(link){
    link.addEventListener('click', function(event){
      let droplistId = event.currentTarget.dataset.link;
      document.querySelectorAll('.header__droplist').forEach(function (droplist) {
        droplist.classList.remove('open');
      });
      if (!link.classList.contains('header__bottom-link--active')){
        document.querySelector(`[data-droplist="${droplistId}"]`).classList.add('open');
        subMenuLink.forEach(function(link){
          link.classList.remove('header__bottom-link--active');
        });
        link.classList.add('header__bottom-link--active');
      }
      else {
        link.classList.remove('header__bottom-link--active');
      }
    });
  });


  document.addEventListener('click', function(event){
    let target = event.target;
    if (!target.closest('.header__bottom-list')) {
      document.querySelectorAll('.header__droplist').forEach(element => {
        element.classList.remove('open');
      });
      document.querySelectorAll('.header__bottom-link').forEach(element => {
        element.classList.remove('header__bottom-link--active');
      });
    }
  });

  document.querySelector('.header__burger-btn').addEventListener('click', function(){
    document.querySelector('.header__burger-menu').classList.add('open');
  });
  document.querySelector('.header__close-btn').addEventListener('click', function(){
    document.querySelector('.header__burger-menu').classList.remove('open');
  });

  let searchBtn = document.querySelector('.header__search-btn');
  searchBtn.addEventListener('click', function(){
    document.querySelector('.header__search').classList.add('input-open');
    document.addEventListener('click', function(event){
      let target = event.target;
      if (!target.parentElement.classList.contains('.header_search')&&!target.parentElement.classList.contains('header__search-btn')&&!target.parentElement.classList.contains('header__search-form')) {
        document.querySelector('.header__search').classList.remove('input-open');
      }
    });
  });
  document.querySelector('.header__search-close-btn').addEventListener('click', function(){
    document.querySelector('.header__search').classList.remove('input-open');
  });

  if (window.innerWidth <=320) {
    let headerSelect = document.querySelector('.section-public__checkbox-select');
    let selectList = document.querySelector('.section-public__checkboxes-list');
    selectList.classList.add('hidden');
    selectList.classList.add('close');
    headerSelect.addEventListener('click', function(){
      headerSelect.classList.toggle('section-public__checkbox-select--open');
      selectList.classList.toggle('hidden');
      if (selectList.classList.contains('close')) {
        selectList.classList.remove('close');
      }
      else {
        setTimeout(function() {
          selectList.classList.add('close');
        }, 300)
      }
    });
    let checkItems = document.querySelectorAll('.section-public__list-item');
    checkItems.forEach(item => {
      item.addEventListener('click', function(event){
        const selected = event.currentTarget.dataset.check;
        console.log(selected)
        if (item.childNodes[1].checked) {
          console.log(document.querySelector(`[data-selected="${selected}"]`))
          document.querySelector(`[data-selected="${selected}"]`).classList.add('open-bloks');
        }
        else {
          document.querySelector(`[data-selected="${selected}"]`).classList.remove('open-bloks');
        }

      });
    });
    let closeItemBtn = document.querySelectorAll('.section-public__selected-btn');
    closeItemBtn.forEach(btn => {
      btn.addEventListener('click', function(){
        const check = btn.parentNode.dataset.selected;
        let item = document.querySelector(`[data-check="${check}"]`);
        item.childNodes[1].checked = false;
        btn.parentNode.classList.add('hidden');
        setTimeout(function() {
          btn.parentNode.classList.remove('open-bloks');
          btn.parentNode.classList.remove('hidden');
        }, 300)
      });
    });
    let checkboxlabels = document.querySelectorAll('.section-public__selected-label');
    checkboxlabels.forEach(label => {
      label.addEventListener('click', function(){
        const check = label.parentNode.dataset.selected;
        let item = document.querySelector(`[data-check="${check}"]`);
        item.childNodes[1].checked = false;
        console.log(label.parentNode.childNodes[1]);
        label.parentNode.classList.add('hidden')
        setTimeout(function() {
          label.parentNode.classList.remove('open-bloks');
          label.parentNode.classList.remove('hidden');
          label.parentNode.childNodes[1].checked= true;
        }, 300);
      });
    });
  }


});
