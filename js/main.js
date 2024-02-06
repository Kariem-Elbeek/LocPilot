// variables for scroll
let windowTop;
let windowBottom;
let navbarHeight = $('#navbar').height();
let homeHeight = $('#home').height();
let windowWidth = $(window).width();
let windowHeight = $(window).height();
let aboutUsTop = $('#about-us').length ? $('#about-us').offset().top : 0;
let aboutHeadingHeight = $('#about-us .section-heading').height();
let aboutUsHeight = $('#about-us').height();
// let servicesTop = $('#services').offset().top;
let servicesTop = $('#services').length ? $('#services').offset().top : 0;
let servicesHeadingHeight = $('#services .section-heading').height();
let trServicesTop = $('#tr-services').length ? $('#tr-services').offset().top : 0;
let trServicesHeadingHeight = $('#tr-services .section-heading').height();
let locServicesTop =  $('#loc-services').length ? $('#loc-services').offset().top : 0;
let locServicesHeadingHeight = $('#loc-services .section-heading').height();
let trcrServicesTop = $('#trcr-services').length ? $('#trcr-services').offset().top : 0;
let trcrServicesHeadingHeight = $('#trcr-services .section-heading').height();
let referencesTop = $('#references').length ? $('#references').offset().top : 0;
let refHeadingHeight = $('#references .section-heading').height();
let whyUsTop = $('#why-us').length ? $('#why-us').offset().top : 0;
let whyUsHeadingHeight = $('#why-us .section-heading').height();
let aboutUsContentTop = $('#about-us .content').length ? $('#about-us .content').offset().top : 0;
// let servicesContentTop = $('#services .content').offset().top;
let servicesContentTop = $('#services .content').length ? $('#services .content').offset().top : 0;
let trServicesContentTop = $('#tr-services .content').length ? $('#tr-services .content').offset().top : 0;
let locServicesContentTop = $('#loc-services .content').length ? $('#loc-services .content').offset().top : 0;
let trcrServicesContentTop = $('#trcr-services .content').length ? $('#trcr-services .content').offset().top : 0;
let referencesContentTop = $('#references .content').length ? $('#references .content').offset().top : 0;
let whyUsContentTop = $('#why-us .content').length ? $('#why-us .content').offset().top : 0;
let fixedFrameUpperTop = $('#fixed-frame-top, #fixed-frame-left, #fixed-frame-right').length ? $('#fixed-frame-top, #fixed-frame-left, #fixed-frame-right').offset().top : 0;
// let fixedFrameHeight = windowHeight - navbarHeight -17;
let fixedFrameUpper = $('#fixed-frame-top, #fixed-frame-left, #fixed-frame-right');


// variables for navbar
let navId;
let goToNavIdTop;

// variables for about-us

let aboutUsRoundHeight = $('#about-us .round-container').height();
let aboutUsRoundWidth = $('#about-us .round-container').width();
// $(selector).attr(attributeName, value);
$('.round-container').css({'height': aboutUsRoundHeight * 2, 'width': aboutUsRoundWidth});


// variables for backgroundImage
let bgImageValue = $('.bg-image').attr('bg-image');
console.log(bgImageValue);

// variables for form

let submitButton = $('#submit-btn');

submitButton.click(function(){
    let formUserName = $('[name="user-name"]').val();
    let formUserEmail = $('[name="user-email"]').val();
    let formUserPhone = $('[name="user-phone"]').val();
    let formUserMsg = $('[name="user-msg"]').val();
    console.log(`${formUserName}, ${formUserEmail}, ${formUserPhone}, ${formUserMsg}`);
})

// fixed-frame height

// fixedFrameUpper.css({'height' : `${fixedFrameHeight}`});


// pre-animation

if (windowWidth >= 768){
    // pre-animation
    $('#about-us .content-left').css({'transform': 'translateX(-120%)', 'transition': 'all 1.5s linear'});
    $('#about-us .content-right').css({'transform': 'translateX(120%)', 'transition': 'all 1.5s linear'});
    $('#services .content .content-part, #tr-services .content .content-part, #loc-services .content .content-part, #trcr-services .content .content-part').css({'display': 'none'});
    $('#references .content-left').css({'transform': 'translateX(-120%)', 'transition': 'all 1.5s linear'});
    $('#references .content-right').css({'transform': 'translateX(120%)', 'transition': 'all 1.5s linear'});
    $('#why-us .content-left').css({'transform': 'translateX(-120%)', 'transition': 'all 1.5s linear'});
    $('#why-us .content-right').css({'transform': 'translateX(120%)', 'transition': 'all 1.5s linear'});
}
else{
    $('.content-part').css({'display': 'none'});
}

// window scroll behaviour

$(window).scroll(function(){
    windowTop = $(window).scrollTop();
    windowBottom = windowTop + windowHeight;
    navbarShow();
    console.log(`window top = ${windowTop} * window bottom = ${windowBottom} * window height = ${windowHeight} * navbar height = ${navbarHeight}`);

    if (windowTop + navbarHeight + 17 > fixedFrameUpperTop){
        fixedFrameUpper.css({'position': 'fixed', 'top' : `${navbarHeight+17}px`});
    }
    else{
        fixedFrameUpper.css({'position': 'absolute', 'top' : '100vh'});
    }
    
    if (windowWidth >= 768){
        if (windowTop > aboutUsTop - (aboutUsHeight * .7)){
            aboutUsShowBig();
        }
        if (windowBottom > servicesTop + (servicesHeadingHeight * 1.5)){
            servicesShowBig('services');
        }
        if (windowBottom > trServicesTop + (trServicesHeadingHeight * 1.5)){
            servicesShowBig('tr-services');
        }
        if (windowBottom > locServicesTop + (locServicesHeadingHeight * 1.5)){
            servicesShowBig('loc-services');
        }
        if (windowBottom > trcrServicesTop + (trcrServicesHeadingHeight * 1.5)){
            servicesShowBig('trcr-services');
        }
        if (windowBottom > referencesTop + (refHeadingHeight * 1.5)){
            refShowBig();
        }
        if (windowBottom > whyUsTop + (whyUsHeadingHeight * 1.5)){
            whyUsShowBig();
        }
    }
    else{
        if (windowBottom > aboutUsContentTop + aboutHeadingHeight){
            aboutUsShowSmall();
        }
        if (windowBottom > servicesContentTop + servicesHeadingHeight){
            servicesShowSmall('services');
        }
        if (windowBottom > trServicesContentTop + trServicesHeadingHeight){
            servicesShowSmall('tr-services');
        }
        if (windowBottom > locServicesContentTop + locServicesHeadingHeight){
            servicesShowSmall('loc-services');
        }
        if (windowBottom > trcrServicesContentTop + trcrServicesHeadingHeight){
            servicesShowSmall('trcr-services');
        }
        if (windowBottom > referencesContentTop + refHeadingHeight){
            refShowSmall();
        }
        if (windowBottom > whyUsContentTop + whyUsHeadingHeight){
            whyUsShowSmall();
        }
    }
});


// navbar

function navbarShow (){
    windowTop = $(window).scrollTop();
    if (windowTop > homeHeight - navbarHeight){
        $('#navbar').addClass('bg-light');
        $('#navbar').removeClass('bg-transparent');
    }
    else{
        $('#navbar').addClass('bg-transparent');
        $('#navbar').removeClass('bg-light'); 
    }
}

$('.nav-link').click(function () { 
    navId = $(this).attr('nav-id');
    goToNavIdTop = $(navId).offset().top;
    window.scrollTo(0, goToNavIdTop - navbarHeight);
});




// show functions

// showOnSmallWidth
function showEachSlideDown(element, i) 
    {
        setTimeout(function() 
            {
                element.slideDown(1000);
            }, i * 1300
        ); // Delay each animation based on the index
    }

// section about-us

function aboutUsShowBig () {
    $('#about-us .content-left').css('transform', 'translateX(0%)');
    $('#about-us .content-right').css('transform', 'translateX(0%)');
}
function aboutUsShowSmall () {
    $('#about-us .content .content-part').each(function(i){
        let element = $(this);
        showEachSlideDown(element, i);
    });
}


// section services

function servicesShowBig (c) 
{
    $(`#${c} .content .content-part`).slideDown(2000);
    $(`#${c} .content .subrow .content-part`).css('display', 'flex');
}

function servicesShowSmall (c){
    $(`#${c} .content .content-part`).each(function(i){
        let element = $(this);
        showEachSlideDown(element, i);
    });    
}
// // section services

// function servicesShowBig (c) 
// {
//     $('#services .content .content-part').slideDown(2000);
// }

// function servicesShowSmall (){
//     $('#services .content .content-part').each(function(i){
//         let element = $(this);
//         showEachSlideDown(element, i);
//     });    
// }
// // section services

// function servicesShowBig () 
// {
//     $('#services .content .content-part').slideDown(2000);
// }

// function servicesShowSmall (){
//     $('#services .content .content-part').each(function(i){
//         let element = $(this);
//         showEachSlideDown(element, i);
//     });    
// }
// // section services

// function servicesShowBig () 
// {
//     $('#services .content .content-part').slideDown(2000);
// }

// function servicesShowSmall (){
//     $('#services .content .content-part').each(function(i){
//         let element = $(this);
//         showEachSlideDown(element, i);
//     });    
// }

// section references

function refShowBig () {
    $('#references .content-left').css('transform', 'translateX(0%)');
    $('#references .content-right').css('transform', 'translateX(0%)');    
}
        
function refShowSmall () {
    $('#references .content-part').each(function(i){
        let element = $(this);
        showEachSlideDown(element, i);
    });
}


// section why-us

function whyUsShowBig () {
    $('#why-us .content-left').css('transform', 'translateX(0%)');
    $('#why-us .content-right').css('transform', 'translateX(0%)');    
}
        
function whyUsShowSmall () {
    $('#why-us .content-part').each(function(i){
        let element = $(this);
        showEachSlideDown(element, i);
    });
}

