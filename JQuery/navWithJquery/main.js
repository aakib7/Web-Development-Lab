$('document').ready(function() {
 
  $('#para1').on('click', paragraph1);
  $('#para2').on('click', paragraph2);
  $('#para3').on('click', paragraph3);
  $('#threeLayer').on('click', wrap);

  $('.container').on('click','#hide-para1',function(){
  $('.paragraph1').addClass('hide-content');
  });
  $('.container').on('click','#hide-para2',function(){
  $('.paragraph2').addClass('hide-content');
  });
  $('.container').on('click','#hide-para3',function(){
  $('.paragraph3').addClass('hide-content');
  });
  
  

});

function paragraph1(){
  $('.container').append(`
  <div class='paragraph1'>
  <h1>What is Lorem Ipsum?</h1>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <h2>Why do we use it?</h2>
  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><br>
  <button id ='hide-para1'>Hide Paragraph1</button>
  </div>
  `);
  $('.paragraph1').addClass('stylePara1');
}
function paragraph2(){
  $('.container').append(`
  <div class='paragraph2'>
  <h1>What is Lorem Ipsum?</h1>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <h2>Why do we use it?</h2>
  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><br>
  <button id ='hide-para2'>Hide Paragraph2</button>
  </div>
  `);
  $('.paragraph2').addClass('stylePara2');
}
function paragraph3(){
  $('.container').append(`
  <div class='paragraph3'>
  <h1>AAKIB</h1>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <h2>Why do we use it?</h2>
  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><br>
  <button id ='hide-para3'>Hide Paragraph3</button>
  </div>
  `);
    $('.paragraph3').addClass('stylePara3');
}

function wrap(){
  $('.paragraph1, .paragraph2, .paragraph3').wrapAll('<div class="row">');
  $('.paragraph1').addClass('col-md-4');
  $('.paragraph2').addClass('col-md-4');
  $('.paragraph3').addClass('col-md-4');
}
