import { Component, OnInit } from '@angular/core';
import { js1 } from './js/vendor/jquery-2.2.4.min.js';
// "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"
// import { js3 } from "https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA"
import { js2 } from './js/bootstrap.min.js'; 
import {js3} from "./js/easing.min.js";
import {js4} from "./js/hoverIntent.js";
import {js5} from "./js/superfish.min.js";
import {js6} from "./js/jquery.ajaxchimp.min.js";
import {js7} from "./js/jquery.magnific-popup.min.js";
import {js8} from "./js/owl.carousel.min.js"	;
import {js9} from "./js/hexagons.min.js";
import {js10} from "./js/jquery.nice-select.min.js";
import {js11} from "./js/jquery.counterup.min.js";
import {js12} from "./js/waypoints.min.js";
import {js13} from "./js/mail-script.js";
import {js14} from "./js/main.js";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    'css/linearicons.css',
    'css/font-awesome.min.css',
    'css/bootstrap.css',
    'css/magnific-popup.css',
    'css/nice-select.css',
    'css/hexagons.min.css',
    'css/animate.min.css',
    'css/owl.carousel.css',
    'css/main.css'
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    js1;
    js2;
    js3;
    js4;
    js5;
    js6;
    js7;
    js8;
    js9;
    js10;
    js11;
    // js12;
    js13;
    js14;
  }

}