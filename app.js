/* Prabhu Sivaraja
   Second Admission Challenge : Step 2 where inventory 
   	is tracked through an object as opposed to plain old HTML
*/

/* Global object */
var inventory = {
  product: {
    money: 1000,
    cookies: 0
  },
  ingredients: {
    sugar: 10,
    flour: 10
  },
  pot: {
    sugar: 0,
    flour: 0
  }
};

$(document).ready(function() {
  
  //update the HTML elements the first time page loads
  $("#product .cookies").text(inventory.product.cookies);
	$("#product .money").text(inventory.product.money);
  $("#ingredients .sugar").text(inventory.ingredients.sugar);
  $("#ingredients .flour").text(inventory.ingredients.flour);
  $("#pot .sugar").text(inventory.pot.sugar);
  $("#pot .flour").text(inventory.pot.flour);

  $(".use-sugar").click(function() {
  	if (inventory.ingredients.sugar > 0) {
      inventory.ingredients.sugar -= 1;
      $("#ingredients .sugar").text(inventory.ingredients.sugar);

      inventory.pot.sugar += 1;
      $("#pot .sugar").text(inventory.pot.sugar);  
    }
    else
      alert("No more sugar. Purchase more sugar");
  });

  $(".use-flour").click(function() {
    if (inventory.ingredients.flour > 0) {
      inventory.ingredients.flour -= 1;
      $("#ingredients .flour").text(inventory.ingredients.flour);

      inventory.pot.flour += 1;
      $("#pot .flour").text(inventory.pot.flour);
    }
    else
      alert("No more flour. Purchase more flour");
  });

  $("#pot button").click(function() {
    if ( (inventory.pot.flour >= 6) && (inventory.pot.sugar >= 3) ) {
      inventory.pot.flour -= 6;
      $("#pot .flour").text(inventory.pot.flour);

      inventory.pot.sugar -= 3;
      $("#pot .sugar").text(inventory.pot.sugar);

      inventory.product.cookies += 1;
      $("#product .cookies").text(inventory.product.cookies);
    }
    else
      alert("Need at least 6 units of flour and 3 units of sugar to make cookie.\
      	Add more to the pot.");
  });

  $(".buy-sugar").click(function() {
    if ((inventory.product.money - 10) >= 0) {
      inventory.product.money -= 10;
      $("#product .money").text(inventory.product.money);

      inventory.ingredients.sugar += 1;
      $("#ingredients .sugar").text(inventory.ingredients.sugar);
    }
    else
      alert("Need at least $10 to purchase sugar");
  });

  $(".buy-flour").click(function() {
    if ((inventory.product.money - 15) >= 0) {
      inventory.product.money -= 15;
      $("#product .money").text(inventory.product.money);

      inventory.ingredients.flour += 1;
      $("#ingredients .flour").text(inventory.ingredients.flour);
    }
    else
      alert("Need at least $15 to purchase flour");
  });
});
