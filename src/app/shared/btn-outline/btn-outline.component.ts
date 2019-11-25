import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-btn-outline',
  templateUrl: './btn-outline.component.html',
  styleUrls: ['./btn-outline.component.scss']
})
export class BtnOutlineComponent implements OnInit {

  @Input() btnText: string;

  constructor() { }

  ngOnInit() {
  }

}
