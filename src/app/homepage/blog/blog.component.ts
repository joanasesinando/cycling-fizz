import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as feather from 'feather-icons';
import {BlogHandlerService} from "../../_services/blog-handler.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterViewInit {

  cardArray: {photoSrc: string, topic: string, date: Date, title: string, nrComments: number, nrLikes: number, link: string}[] = []; //FIXME max 44 caract. + ...; check if small enough, otherwise truncate

  constructor(private blogHandlerService: BlogHandlerService) { this.blogHandlerService.getTopBlogPosts().then( posts => {this.cardArray = posts; console.log(this.cardArray)})}

  ngOnInit() {
      this.truncateTitle(this.cardArray);
  }

  ngAfterViewInit() {
      feather.replace();
  }

  truncateTitle(array) {
      for(let i = 0; i < array.length ; i++) {
          let length = array[i].title.length;
          array[i].title = array[i].title.substring(0, 55);
          if(length > 55) array[i].title += "...";
      }
  }

}
