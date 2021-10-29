let nav = document.querySelector('.menuleft');
let btnmenu = document.querySelector('header .btnmenu');
let btnclose = document.querySelector('.menuleft .menuleft__bottom .menuleft__bottom-logo');

btnmenu.addEventListener('click', function () {
    nav.classList.add('active');
})
btnclose.addEventListener('click', function () {
    nav.classList.remove('active');
})

let backtotop = document.querySelector('footer .backtotop');
backtotop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

//Hien thi Menu Header khi scroll 
let header = document.querySelector('header'); //khai báo biến header của header
let heightHeader = header.clientHeight; //lấy chiều cao của header
let menu = document.querySelector('.menutop')
let slider = document.querySelector('.slider');

if (slider){ //kiem tra bien slider
    let heightSlider = slider.clientHeight; //lấy chiều cao của slide
    document.addEventListener('scroll', function(){
        let heightScroll = window.pageYOffset;  //khai báo biến 'chiều cao khi scroll' = 

        if(heightScroll > (heightSlider - heightHeader)){
            menu.classList.add('active');
        }
        else{
            menu.classList.remove('active');
        }
    })
}

let banner = document.querySelector('.banner');
let heightBanner = banner.clientHeight;

document.addEventListener('scroll', function () {
    let scrollY = window.pageYOffset;
    if (scrollY > (heightBanner - heightHeader)) {
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
});