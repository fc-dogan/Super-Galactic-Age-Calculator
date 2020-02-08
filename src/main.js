import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#age-form").submit(function() {
    event.preventDefault();
    var age = $("#age").val();
    

  });

});