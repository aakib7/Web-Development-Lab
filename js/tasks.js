// @ Aaqib Javed 



/// Task 1
let area_of_triangle = 0.5 * 210;
document.getElementById('area-of-triangle').innerHTML ="Area of triangle is: " + area_of_triangle;

/// Task 1
let temperature_in_celcius = document.getElementById("temperature-celsius").childNodes.item(0).data;
let temp = parseInt(temperature_in_celcius);
let temp_f = temp*9/5 + 32;
document.getElementById("temperature-fahrenheit").innerHTML="Temperature in Fahrenheit: "+temp_f +" f";




// let number = prompt("Enter a Number(1-10)");
// let gussed_number = Math.floor(Math.random() * 10)+1;
// if (number != null && gussed_number == number) {
//     // console.log("Good Luck");
//     document.getElementById("task3").style.color ='green';
//     document.getElementById("task3").style.display = 'block';
//     document.getElementById("task3").innerHTML = "Good Luck";
// } 
// else{
//     // console.log("Not Matched");
//     document.getElementById("task3").style.color ='red';
//     document.getElementById("task3").style.display = 'block';
//     document.getElementById("task3").innerHTML = "Not Matched, Actual number is " + gussed_number + " But you enter "+ number;
// }

