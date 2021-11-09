$(document).ready(function() {
    $('#image1').on('click', largeImageHandle);
    $('#image1').on('click', addImage);
});

function largeImageHandle(){
    console.log('e')
    var image_src = $('.small-images').attr('src');
    $('#large-image').append(`<img src="${image_src}" class="large-image" />`)
}

function addImage(){
    var image_src = $('.small-images').attr('src');
    $('.container').append('<div class="copied-images"></div>');  
    $('.copied-images').append(`<img src="${image_src}" class="small-image" />`)
}