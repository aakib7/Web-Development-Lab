// select male or female and enter submit outpou will be selected option for
$(document).ready(()=>{

    $('#submit').click(()=>{
        var myResulet = $('input[type="radio"]:checked');
        $('#output').html(myResulet.val()); 
        // html -->innerHtml val() --> value()
    });

$('#submit1').click(()=>{
    var results = [];
$('input[name="subject"]:checked').each(function() {
    results += $(this).val();
    $('#selected').html(results);

});
$('.totals').html(results.length);

});





 
$('.check').click(()=>{
    var res = [];
 var ch = $("input[name='subject']:checked");
 if(ch.length>0){
     ch.each(function() {
        res +=$(this).val()+"<br>";
                    });
 }
 $('#selected1').html(res)
    
});

});

