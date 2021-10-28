// console.log("Code Start ")
// $(()=>{
//     console.log("binding")
//     $("#load").click(sendAjax); // only function referance not function call 
// });

// function sendAjax(){

//     console.log("Sending request");
//     // send request here 
//     $.get('./student.txt',handleResponse);

//     console.log("request send")
// }

// function handleResponse(response){
//     console.log(response)
//     $('#result').empty();
//     $('#result').append(response);

// }
// console.log('Finished')

// Simplified

$(()=>{
$("#load").click(()=>{
        $.get('student.txt',response => {
            $('#result').empty();
            $('#result').append(response);
        });
});
});
