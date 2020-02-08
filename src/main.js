import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GalacticAge } from './galactic-age';

var galacticage = new GalacticAge(age);

$(document).ready(function() {
  $("#age-form").submit(function() {
    event.preventDefault();
    let age = $("#age").val();

    let mercuryYears = galacticAge.mercuryYears();
    let venusYears = galacticAge.venusYears();
    let marsYears = galacticAge.marsYears();
    let jupiterYears = galacticAge.jupiterYears();

    $(".mercury-years").text(mercuryYears);
    $(".venus-years").text(venusYears);
    $(".mars-yers").text(marsYears);
    $(".jupiter-years").text(jupiterYears);
    

  });

  

});