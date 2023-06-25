$(document).ready(function() {
  $("#genre").on("mouseover", function() {
    var l = $(this).find("option").length ;
    
    $(this).attr("size", l) ;
  }) ;

  $("#genre").on("mouseout", function() {
    $(this).attr("size", 1) ;
  }) ;
  
  $("#genre").on("click", function() {
    $(this).attr("size", 1) ;
  }) ;
});