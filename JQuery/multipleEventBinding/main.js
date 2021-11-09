$('document').ready(function() {
    $('.clickBtn').on('click mouseover mouseout', eventAdd);
    $('#disableButton').on('click',disableHandle);
    $('#enableButton').on('click',function(event){
    $('.clickBtn').on('mouseover',eventAdd);

    });
    
    // function(event){ // event binding
    //     // if(event.type=='click'){
    //     //     console.log('click');
    //     // }
    //     // else if(event.type=='mouseover'){
    //     //     $('.clickBtn').addClass('red-class');
    //     // }
    //     // else{
    //     //      $('.clickBtn').removeClass('red-class');
    //     // }
    // }
    // )
});

function eventAdd(event){
    if(event.type=='click'){
            console.log('click');
        }
        else if(event.type=='mouseover'){
            $('.clickBtn').addClass('red-class');
        }
        else{
             $('.clickBtn').removeClass('red-class');
        }
}

function disableHandle(){
    console.log('click disable');
    $('.clickBtn').off('mouseover');}

/// Taskk 2
