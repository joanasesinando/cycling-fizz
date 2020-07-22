import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogHandlerService {

  url: String = "http://admin.blog.cyclingfizz.pt/";


  constructor() { }

  private httpGet(path: string) {

    return fetch(this.url + path, {
      method : 'GET',
    });
  }

  getTopBlogPosts() {
    return this.httpGet('get-top-posts')
      .then(r => r.json())
      .then(json => {
        let postsArray: {photoSrc: string, topic: string, date: Date, title: string, nrComments: number, nrLikes: number, link: string}[] = [];
        for (let j of json) {
          let post = {
            title: j.title,
            topic: j.category,
            photoSrc: j.image != null ? j.image :  "../../../assets/images/demo/photos/blog0.jpg",
            date: new Date(j.date),
            nrComments: 0,
            nrLikes: 0,
            link: "https://blog.cyclingfizz.pt/" + j.link,
          };

          postsArray.push(post);
        }
        return postsArray;
      });
  }
}
