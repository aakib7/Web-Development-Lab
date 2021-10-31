var myInfo = {
    frist_name: 'Aaqib',
    last_name: 'Javed',
};
$(document).ready(function(){

    $('#showInfo').click(function(){
    $("#name").html( myInfo.frist_name + " "+ myInfo.last_name );
    });

    // var info = JSON.stringify(myInfo);
    //attr
    // $('div').attr('id','class2')
    // $('div').attr('id','class2 class3')

    // Multiple attrib
    // var divs = $('div');
    // divs.each(function(index) {
    //     $(this).attr('id','myId'+index);
    // });

    // wrap
    // $( "#child" ).wrap( "<div id='parrent'></div>" );

    // wrapainner
    // $( "#parent" ).wrapInner( "<div id='child'>jj</div>" );
    // wrapaAll
    $( "p" ).wrapAll( "<div></div>" );



});


// parse --> string to json object
// stinggify --> json to string