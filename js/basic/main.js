// Counter task1
let counter = 0;
function count(){
    counter++;
    document.querySelector('#counter').innerHTML=counter;
    if(counter % 10 == 0){
        alert(`counter is ${counter}`);
    }
}
// document.addEventListener('DOMContentLoaded',()=>{
//     document.querySelector('.counter-btn').onclick=count;
// });

// task2

// document.addEventListener('DOMContentLoaded',()=>{
//     // for task 1
//     document.querySelector('.counter-btn').onclick=count;


//     document.querySelector('#red').onclick = ()=>{
//     document.querySelector('#color').style.color = 'red';
//     }
//     document.querySelector('#green').onclick = ()=>{
//     document.querySelector('#color').style.color = 'green';
//     }
//     document.querySelector('#blue').onclick = ()=>{
//     document.querySelector('#color').style.color = 'blue';
//     }

// });

// task 3
// document.addEventListener('DOMContentLoaded',()=>{

//     //task3 
//     document.querySelectorAll('.btn').forEach((button)=>{
//         button.onclick = ()=>{
//             document.querySelector('#color1').style.color = button.dataset.color;
//         }
//     });
// });


document.addEventListener('DOMContentLoaded',()=>{

    // for task 1
    document.querySelector('.counter-btn').onclick=count;

    // task 2
    document.querySelector('#red').onclick = ()=>{
    document.querySelector('#color').style.color = 'red';
    }
    document.querySelector('#green').onclick = ()=>{
    document.querySelector('#color').style.color = 'green';
    }
    document.querySelector('#blue').onclick = ()=>{
    document.querySelector('#color').style.color = 'blue';
    }

    // task 3
    document.querySelectorAll('.btn').forEach((button)=>{
        button.onclick = ()=>{
            document.querySelector('#color1').style.color = button.dataset.color;
        }
    });

    //task 4
    document.querySelector('select').onchange = function () {
        document.querySelector('#color2').style.color = this.value;
    }

    //task 5
    document.querySelector('#submit').disabled = true;

    document.querySelector('#task').onkeyup = ()=> {
        if(document.querySelector('#task').value.length > 0){
            document.querySelector('#submit').disabled = false;
        }
        else{

            document.querySelector('#submit').disabled = true;
        }
    }

    document.querySelector('form').onsubmit =function(){
        // bydefault button should be disabled
        
        const task = document.querySelector('#task').value; //input field value
        const li = document.createElement('li');
        li.innerHTML= task;
        document.querySelector('#tasks').append(li);
        document.querySelector('#task').value = ''; // empty for next time
        document.querySelector('#submit').disabled = true;
        return false;
    }

});