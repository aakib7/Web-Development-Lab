$(()=>{
  loadRecipes();
  $('#recipes').on('click','.btn-danger',handleDelete);
  $('#recipes').on('click','.btn-warning',handleUpdate);
  $('#addbtn').click(handleAdd);
  
  $('#updateSave').click(()=>{
    var id = $('#updateId').val();
    var title = $('#updateTitle').val();
    var body = $('#updateBody').val();
    $.ajax({
      url : 'https://usman-recipes.herokuapp.com/api/recipes/'+id,
      data : {title,body},
      method : 'PUT',
      success: function(response){
        console.log(response);
        loadRecipes();
      }
    });
  });
});


function handleDelete(){
  var btn = $(this);
  var parentDiv = btn.closest('.recipe');
  let id = parentDiv.attr('data-id');
  $.ajax({
    url : 'https://usman-recipes.herokuapp.com/api/recipes/'+id,
    method: "DELETE",
    success: function(response){
      // console.log(response);
      loadRecipes(); //again send request so our page data stay uptoda with server data after delete

    },
  });
}

function handleAdd(){
  console.log('hello');
  var title = $('#title').val();
  var body = $('#body').val();
  $.ajax({
    url : 'https://usman-recipes.herokuapp.com/api/recipes/',
    method: "POST",
    data : {title,body},
    success: function(response) {
      console.log(response);
      $("#title").val("");
      $("#body").val("");
      loadRecipes();
    },
  });
}

function handleUpdate(){
  $("#updateModal").modal("show");
  var btn = $(this);
  var parentDiv = btn.closest('.recipe');
  let id = parentDiv.attr('data-id');
  var updateTitle = $('#updateTitle');
  var updateBody = $('#updateBody');
  var updateId = $('#updateId');

  $.get('https://usman-recipes.herokuapp.com/api/recipes/'+id,
  function(response){
    updateId.val(response._id);
    updateTitle.val(response.title);
    updateBody.val(response.body);

  });

  
  
  

}

function loadRecipes() {
  $.ajax({
    url : 'https://usman-recipes.herokuapp.com/api/recipes',
    method: 'GET',
    success: function(response){

      console.log(response);
      var recipes = $("#recipes");
      recipes.empty();

      for(var i=0; i<response.length; i++){
          var recipe = response[i];
        recipes.append(`<div class=recipe data-id='${recipe._id}'>
        <h3>${recipe.title}</h3>
        <p>${recipe.body}
        <button class='btn btn-danger float-right'>Delete</button> 
        <button class='btn btn-warning float-right'>Edit</button> 
        </p>
        </div>
        `);
      }
    },
    error:function(response){
      var recipes = $("#recipes");
      recipes.empty();
      recipes.append("An Error has occurred:");
    }

  });
}




