import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map-card-notes',
  templateUrl: './map-card-notes.component.html',
  styleUrls: ['./map-card-notes.component.scss']
})
export class MapCardNotesComponent implements OnInit {

  @Input() iconSrc: string;
  @Input() notes: string;
  @Input() editMode: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
