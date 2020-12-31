// Import stylesheets
import "./style.css";

// Write Javascript code!
$(document).ready(function() {
  $("button").click(function() {
    var ajaxParams = {
      type: "GET",
      url: "https://fakestoreapi.com/products/1",
      //data: getParams,
      success: function(data, status) {
        alert("Data: " + data + "\nStatus: " + status);
        document.getElementById("id1").innerHTML = data.id;
        document.getElementById("title").innerHTML = data.title;
        document.getElementById("price").innerHTML = data.price;
        document.getElementById("disc").innerHTML = data.discription;
        document.getElementById("cat").innerHTML = data.category;
        document.getElementById("img").innerHTML = data.image;
      },
      error: function(error) {
        alert("err: ", error);
      },
      cache: true
    };
    $.ajax(ajaxParams);
  });
});
