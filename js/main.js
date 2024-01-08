// variables for scroll
let windowTop;
let windowBottom;
let navbarHeight = $('#navbar').height();
let homeHeight = $('#home').height();
let windowWidth = $(window).width();
let windowHeight = $(window).height();
let ueberUnsTop = $('#ueber-uns').offset().top;
let ueberHeadingHeight = $('#ueber-uns .section-heading').height();
let ueberUnsHeight = $('#ueber-uns').height();
let dienstTop = $('#dienstleistungen').offset().top;
let dienstHeadingHeight = $('#dienstleistungen .section-heading').height();
let referenzenTop = $('#referenzen').offset().top;
let refnzHeadingHeight = $('#referenzen .section-heading').height();
let ueberUnsContentTop = $('#ueber-uns .content').offset().top;
let dienstContentTop = $('#dienstleistungen .content').offset().top;
let referenzenContentTop = $('#referenzen .content').offset().top;
let fixedFrameUpperTop = $('#fixed-frame-top, #fixed-frame-left, #fixed-frame-right').offset().top;
// let fixedFrameHeight = windowHeight - navbarHeight -17;
let fixedFrameUpper = $('#fixed-frame-top, #fixed-frame-left, #fixed-frame-right');


// variables for navbar
let navId;
let goToNavIdTop;

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
    $('#ueber-uns .content-left').css({'transform': 'translateX(-120%)', 'transition': 'all 1.5s linear'});
    $('#ueber-uns .content-right').css({'transform': 'translateX(120%)', 'transition': 'all 1.5s linear'});
    $('#dienstleistungen .content .content-part').css({'display': 'none'});
    $('#referenzen .content-left').css({'transform': 'translateX(-120%)', 'transition': 'all 1.5s linear'});
    $('#referenzen .content-right').css({'transform': 'translateX(120%)', 'transition': 'all 1.5s linear'});
}
else{
    $('.content-part').css({'display': 'none'});
}

// window scroll behaviour

$(window).scroll(function(){
    windowTop = $(window).scrollTop();
    windowBottom = windowTop + windowHeight;
    navbarShow();

    if (windowTop + navbarHeight + 17 > fixedFrameUpperTop){
        fixedFrameUpper.css({'position': 'fixed', 'top' : `${navbarHeight+17}px`});
    }
    else{
        fixedFrameUpper.css({'position': 'absolute', 'top' : '100vh'});
    }
    
    if (windowWidth >= 768){
        if (windowTop > ueberUnsTop - (ueberUnsHeight * .7)){
            ueberUnsShowBig();
        }
        if (windowBottom > dienstTop + (dienstHeadingHeight * 1.5)){
            dienstShowBig();
        }
        if (windowBottom > referenzenTop + (refnzHeadingHeight * 1.5)){
            refnzShowBig();
        }
    }
    else{
        if (windowBottom > ueberUnsContentTop + ueberHeadingHeight){
            ueberUnsShowSmall();
        }
        if (windowBottom > dienstContentTop + dienstHeadingHeight){
            dienstShowSmall();
        }
        if (windowBottom > referenzenContentTop + refnzHeadingHeight){
            refnzShowSmall();
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

// section ueber-uns

function ueberUnsShowBig () {
    $('#ueber-uns .content-left').css('transform', 'translateX(0%)');
    $('#ueber-uns .content-right').css('transform', 'translateX(0%)');
}
function ueberUnsShowSmall () {
    $('#ueber-uns .content .content-part').each(function(i){
        let element = $(this);
        showEachSlideDown(element, i);
    });
}


// section dienstleistungen

function dienstShowBig () 
{
    $('#dienstleistungen .content .content-part').slideDown(2000);
}

function dienstShowSmall (){
    $('#dienstleistungen .content .content-part').each(function(i){
        let element = $(this);
        showEachSlideDown(element, i);
    });    
}

// section referenzen

function refnzShowBig () {
    $('#referenzen .content-left').css('transform', 'translateX(0%)');
    $('#referenzen .content-right').css('transform', 'translateX(0%)');    
}
        
function refnzShowSmall () {
    $('#referenzen .content-part').each(function(i){
        let element = $(this);
        showEachSlideDown(element, i);
    });
}

