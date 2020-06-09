import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-badge-dot',
  templateUrl: './badge-dot.component.html',
  styleUrls: ['./badge-dot.component.scss']
})
export class BadgeDotComponent implements OnInit {

  @Input() badgeType: string;

  constructor() { }

  ngOnInit(): void {
  }

}
