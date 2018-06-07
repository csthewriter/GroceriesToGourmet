// File to contain jQuery for front-end javascript
//---------------------------------------------------------
$( document ).ready(function() { // begin "document ready" function



// Modal Control

$(".close-modal").on("click", function() {
  $(this).closest('.modal').removeClass('active');
});
  
$("#showModal").on("click", function() {
  $('#modal-1').addClass('active');
});




// Get Recipes API Call and Painting the Page w/results... 

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



}); // End of "Document Ready" function