import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-comments',
  templateUrl: './map-comments.component.html',
  styleUrls: ['./map-comments.component.scss']
})
export class MapCommentsComponent implements OnInit {

  messages = [
    {
      type: "text",
      text: "Et id magna amet nostrud quis nulla irure ad et laborum.",
      reply: false,
      user: {
        name: "Ralph Alexander",
        avatar: "../../../../../assets/images/map/avatars/avatar1.jpg"
      },
      date: new Date()
    },
    {
      type: "text",
      text: "Ipsum esse culpa ea non cupidatat nisi dolor occaecat laboris culpa aute deserunt in.",
      reply: false,
      user: {
        name: "Tyrone Fox",
        avatar: "../../../../../assets/images/map/avatars/avatar2.jpg"
      },
      date: new Date()
    },
    {
      type: "text",
      text: "Exercitation laboris dolore aliqua irure do enim adipisicing eiusmod id officia ad quis culpa. Ex ipsum ad mollit quis aute " +
          "sunt cupidatat. Eiusmod elit sit cupidatat dolore mollit. Aliquip voluptate in ad officia nostrud proident.",
      reply: false,
      user: {
        name: "Victoria Bell",
        avatar: "../../../../../assets/images/map/avatars/avatar3.jpg"
      },
      date: new Date(1996, 5, 21, 12, 44, 20)
    }
  ];

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
