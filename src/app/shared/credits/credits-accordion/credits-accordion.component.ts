import { Component, OnInit } from '@angular/core';
import creditsInfo from 'assets/credits/credits.json';


@Component({
  selector: 'app-credits-accordion',
  templateUrl: './credits-accordion.component.html',
  styleUrls: ['./credits-accordion.component.scss']
})
export class CreditsAccordionComponent implements OnInit {

  homepage: {img: string, by: string, byUrl: string, from: string, fromUrl: string}[] = creditsInfo.homepage;
  map: {img: string, by: string, byUrl: string, from: string, fromUrl: string}[] = creditsInfo.map;
  the_project: {img: string, by: string, byUrl: string, from: string, fromUrl: string}[] = creditsInfo.theProject;

  login: {img: string, by: string, byUrl: string, from: string, fromUrl: string}[] = creditsInfo.login;
  navbar: {img: string, by: string, byUrl: string, from: string, fromUrl: string}[] = creditsInfo.navbar;

  orderedItems;

  constructor() {  }

  ngOnInit() {
    this.orderedItems = [
      ['navbar.homepage', this.homepage],
      ['navbar.map', this.map],
      ['navbar.about.dropdown.project', this.the_project],
      ['Login', this.login],
      ['Navbar', this.navbar],
    ];
  }

}
