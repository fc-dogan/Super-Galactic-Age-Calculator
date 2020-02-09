import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GalacticAge } from './galactic-age';
// import { LifeExpectancy } from './lifeExpectancy';
// import { GalacticYearsLeft } from './galactic-years-left';
import './../img/jupiter-300x300.png';
import './../img/mars-300x300.jpg';
import './../img/mercury-300x300.png';
import './../img/venus-300x300.png';


$(document).ready(function() {
  $("#age-form").submit(function() {
    event.preventDefault();
    let age = parseInt($("#age").val());
    var newGalacticAge = new GalacticAge(age);

    let mercuryYears = newGalacticAge.mercuryYears();
    let venusYears = newGalacticAge.venusYears();
    let marsYears = newGalacticAge.marsYears();
    let jupiterYears = newGalacticAge.jupiterYears();

    $(".mercury-years").text(mercuryYears);
    $(".venus-years").text(venusYears);
    $(".mars-yers").text(marsYears);
    $(".jupiter-years").text(jupiterYears);


  });



});