let pic = document.getElementById('pic');

document.addEventListener('DOMContentLoaded', function() {
getQuote();

})


function generateNumbers(max) {
    return Math.floor(Math.random() * (max + 1))
}


function getQuote() {
    let i = generateNumbers(10);
    fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?content=rand").then(response => response.json()).then(data => {
    //https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand
    //https://quotesondesign.com/wp-json/wp/v2/posts/?name=rand
    //https://quotesondesign.com/wp-json/wp/v2/posts/?title=rand
    //https://quotesondesign.com/wp-json/
        // document.querySelector('#quote').innerHTML = '"' + data[0].content.rendered.trim()  + '"' ;  
        document.querySelector('#quote').innerHTML = data[i].content.rendered.trim();  
        document.querySelector('#author').innerHTML = "-Author: " + data[i].title.rendered;    
       
        
            
    })  
}

pic.addEventListener('click', getQuote)
/* 
$(document).ready(function () {

    $('div').hover(
    function () {
        $(this).stop().fadeOut(function () {
            var $temp = $(this).attr('src');
            $(this).attr('src', $(this).attr('data-alt-src'));
            $(this).attr('data-alt-src', $temp);
        });

        $(this).fadeIn();
    },

    function () {
        $(this).stop().fadeOut(function () {
            var $temp = $(this).attr('data-alt-src');
            $(this).attr('data-alt-src', $(this).attr('src'));
            $(this).attr('src', $temp);
        });

        $(this).fadeIn();

    });
}); */