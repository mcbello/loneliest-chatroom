$(function() {


  var button = $('#new-message-button');
  button.click(function(){
    var message = $('#new-message-body').val();
    $('#new-message-body').val("");
    console.log(message);
    $('#conversation').append("<li class='message'>\
    <a class='delete'>delete</a>\
    <h3 class='author'>"+author()+"</h3>\
    <p class='message-body'>"+message+"</p>\
    <span class='timestamp'>"+timeStamp()+"</span>\
    </li>");
    console.log(button);


  })
  $('#new-message-body').keypress(function(e){
    if(e.which == 13){
      var message = $('#new-message-body').val();
      $('#new-message-body').val("");
      console.log(message);
      $('#conversation').append("<li class='message'>\
      <a class='delete'>delete</a>\
      <h3 class='author'>"+author()+"</h3>\
      <p class='message-body'>"+message+"</p>\
      <span class='timestamp'>"+timeStamp()+"</span>\
      </li>");
      console.log(button);
    }
  })
  $('#conversation').on("click", ".delete",function(){

    $(this).closest('.message').remove();
  })
  function timeStamp(){
    var d = new Date()
    var hour = d.getHours()
    var minutes = d.getMinutes()


    return d.getHours() + ":" + d.getMinutes()


}
var i = 0;
function author() {
  var authors = ['Me', 'Myself', 'I'];
  var author = authors[i % 3];
  i ++;
  return author;
}


});
