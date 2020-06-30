import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map-comments',
  templateUrl: './map-comments.component.html',
  styleUrls: ['./map-comments.component.scss']
})
export class MapCommentsComponent implements OnInit {

  @Input() comments;

  constructor() {
  }

  ngOnInit(): void {
  }

  sendMessage(e) {
    console.log("Comentário registado!");
  }

  hidePlaceholder() {
    let placeholder = $(".section-comments .placeholder");
    placeholder.addClass("d-none");
  }

  showPlaceholder() {
    //TODO
  }

}
