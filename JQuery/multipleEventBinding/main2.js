$(document).ready(function() {
    $('#image1').on('click', largeImageHandle);
    $('#image1').on('click', addImage);
    $('.copied-images').on('click','img',function(e){
        $(this).fadeOut();

    });
    
});

function largeImageHandle(){
    var image_src = $('.small-images').attr('src');
    $('#large-image').append(`<img src="${image_src}" class="large-image" />`)
}

function addImage(){
    var image_src = $('.small-images').attr('src');  
    $('.copied-images').append(`<img src="${image_src}" class="small-image" id='imgdl' />`);
}
// function deleteImg(){
//     console.log('hello')
//     //   $(img).fadeOut();
   
// }