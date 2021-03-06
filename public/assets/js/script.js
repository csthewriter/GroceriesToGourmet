$( document ).ready(function() { // begin "document ready" function

// Front-End Display Related Javascript
//=================================================================

// Modal Control

$(".close-modal").on("click", function() {
  $(this).closest('.modal').removeClass('active');
});
  
$("#showModal").on("click", function() {
  $('#modal-1').addClass('active');
});



// User Auth Functionality
//==========================================================================

// Log IN
$("#userLogin").on("click", function(){
  var username = $("#login-name").val();
  var password = $("#login-password").val();
  console.log("Login Info - username:"+username+"       password:"+password);
  window.location.href = "/loggedin"; //redirects user to logged in page upon login
})

// Create Account
$("#NewAcctSub").on("click", function(){
  let email = $("#create-email").val();
  let firstname = $("#create-firstname").val();
  let lastname = $("#create-lastname").val();
  let password = $("#create-password").val();
  let passVer = $("#verify-password").val();
  console.log("New Acct Info - username:"+userName+"       password:"+password);
  window.location.href = "/home"; //redirects user to logged in page upon login
})

// Get Recipes API Call and Painting the Page w/results...
// =========================================================================

$("#getRecipes").on("click", function() {
  $("#recipeDiv").empty();

  var recipe = $(this).attr("data-recipe");

  var queryURL = "http://api.yummly.com/v1/api/recipes?_app_id=06ea8989&_app_key=c55ce74997d120adad548639c6269576&q=&requirePictures=true&maxResult=30&start=30"; 

  $.ajax({
    url: queryURL, //call the above API url and fetch results
    method: "GET"
  })
  .then(function(response) {

    console.log(response);

      // results variable contians the API responses
      var results = response.matches;
      for (var i = 0; i < results.length; i++) {


        var recipeCardDiv = $("<div>"); //Creates the main "cardDiv"
          recipeCardDiv.addClass("cardDiv");

            var cardImageDiv = $("<div>"); //Creates the div for the "card image"
              cardImageDiv.addClass("card-image"); 
              recipeCardDiv.append(cardImageDiv);

            var cardHeaderDiv = $("<div>"); //Creates the div for the "card header"
              cardHeaderDiv.addClass("card-header"); 
              recipeCardDiv.append(cardHeaderDiv);

                    var cardTitleDiv = $("<div>"); //Creates the div for the "card Title"
                      cardTitleDiv.addClass("card-title h5"); 
                      cardHeaderDiv.append(cardTitleDiv);

                    var cardSubtitleDiv = $("<div>"); //Creates the div for the "card SubTitle"
                      cardSubtitleDiv.addClass("card-subtitle text-gray");
                      cardHeaderDiv.append(cardTitleDiv); 

        var rpImage = $("<img>");
          rpImage.attr("src", results[i].smallImageUrls);
            cardImageDiv.append(rpImage);

        var rpName = $("<div>");
          rpName.text(results[i].recipeName);
            cardTitleDiv.append(rpName);

        $("#recipeDiv").prepend(recipeCardDiv);
      }
    });
});


$(".toast").on("click", function() {
  $(this).remove();
})

$("#additembtn").on("click", function() {
  var ingInput = $("#addIng").val();
  console.log(ingInput)

  var addIngDiv = $("<div>"); //Creates the div for the ingredient
  addIngDiv.addClass("toast groceryitem");

  var addIngContent = $("<button>"); //Creates the div for the "card image"
  addIngContent.addClass("btn btn-clear float-right"); 
  addIngContent.append(ingInput);
  addIngDiv.append(addIngContent);

  console.log(addIngDiv)

  $("ingredList").append(addIngDiv);

})

/* <div class="toast groceryitem" id="ing1">
  <button class="btn btn-clear float-right"></button>
  Eggs
</div> */


// =================================================================================
//Attempt to replicate the above API call internally


// $("#cardContainer").load(function() 
$("#getRecipes2").on("click", function(){
  // Handler for when this specific page loads
  $("#recipeDiv").empty();

  var results = response.matches;
      for (var i = 0; i < results.length; i++) {

        var recipeCardDiv = $("<div>"); //Creates the main "cardDiv"
          recipeCardDiv.addClass("cardDiv");

            var cardImageDiv = $("<div>"); //Creates the div for the "card image"
              cardImageDiv.addClass("card-image"); 
              recipeCardDiv.append(cardImageDiv);

            var cardHeaderDiv = $("<div>"); //Creates the div for the "card header"
              cardHeaderDiv.addClass("card-header"); 
              recipeCardDiv.append(cardHeaderDiv);

                    var cardTitleDiv = $("<div>"); //Creates the div for the "card Title"
                      cardTitleDiv.addClass("card-title h5"); 
                      cardHeaderDiv.append(cardTitleDiv);

                    var cardSubtitleDiv = $("<div>"); //Creates the div for the "card SubTitle"
                      cardSubtitleDiv.addClass("card-subtitle text-gray");
                      cardHeaderDiv.append(cardTitleDiv); 

        var rpImage = $("<img>");
          rpImage.attr("src", results[i].smallImageUrls);
            cardImageDiv.append(rpImage);

        var rpName = $("<div>");
          rpName.text(results[i].recipeName);
            cardTitleDiv.append(rpName);

        $("#recipeDiv").prepend(recipeCardDiv);
      }
    });


/*    The Code Above Should Be Dynamically Creating Cards in this structure... 

                    <div class="cardDiv">
                        <div class="card-image">
                                <img src="C:\Users\Christopher\Documents\GroceriesToGourmet\public\assets\img\stock-api-img.jpg" class="img-responsive">
                        </div>
                        <div class="card-header">
                                <div class="card-title h5">Microsoft</div>
                                <div class="card-subtitle text-gray">Software and hardware</div>
                        </div>
                    <div>
*/


//==========================================================================================
}); // End of "Document Ready" function