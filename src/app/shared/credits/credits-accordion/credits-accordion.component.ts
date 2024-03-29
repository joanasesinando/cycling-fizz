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
  contact: {img: string, by: string, byUrl: string, from: string, fromUrl: string}[] = creditsInfo.contact;

  login: {img: string, by: string, byUrl: string, from: string, fromUrl: string}[] = creditsInfo.login;
  navbar: {img: string, by: string, byUrl: string, from: string, fromUrl: string}[] = creditsInfo.navbar;
  page_not_found: {img: string, by: string, byUrl: string, from: string, fromUrl: string}[] = creditsInfo.pageNotFound;

  orderedItems;

  constructor() {  }

  ngOnInit() {
    this.orderedItems = [
      ['navbar.homepage', this.homepage],
      ['navbar.map', this.map],
      ['navbar.about.dropdown.project', this.the_project],
      ['navbar.about.dropdown.contact', this.contact],
      ['Login', this.login],
      ['Navbar', this.navbar],
      ['page404.title', this.page_not_found],
    ];
  }

}
