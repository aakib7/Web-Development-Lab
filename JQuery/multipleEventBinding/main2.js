$(document).ready(function() {
    $('#image1').on('click', largeImageHandle);
    $('#image1').on('click', addImage);
    $('.container').append('<div class="copied-images"></div>');
});

function largeImageHandle(){
    console.log('e')
    var image_src = $('.small-images').attr('src');
    $('#large-image').append(`<img src="${image_src}" class="large-image" />`)
}

function addImage(){
    var image_src = $('.small-images').attr('src');  
    $('.copied-images').append(`<img src="${image_src}" class="small-image" />`)
}