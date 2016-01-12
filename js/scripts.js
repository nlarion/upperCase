$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var person1 = $("input#person1").val();
    person1 = person1.toUpperCase();

    $('div.modal-body').text(person1);

    event.preventDefault();
  })

});
