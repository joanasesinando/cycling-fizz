import { Injectable } from '@angular/core';
import {JsonObject} from "@angular/compiler-cli/ngcc/src/packages/entry_point";



export interface UserBasicInfo {
  username: string;
  firstName: string;
  lastName: string;
}


@Injectable({
  providedIn: 'root'
})
export class ServerHandlerService {


  url: String = "https://auth.server.cyclingfizz.py";
  // url :String = "https://localhost:5000";


  constructor() { }


  private httpPost(path: string, data:any) {
    let myHeaders = new Headers({
      "Content-Type": "application/json",
    });


    return fetch(this.url + path, {
      method : "POST",
      headers: myHeaders,
      body : JSON.stringify(data),
    });
  }

  private httpPostCookies(path: string, data:any) {
    let myHeaders = new Headers({
      "Content-Type": "application/json",
    });


    return fetch(this.url + path, {
      method : "POST",
      headers: myHeaders,
      body : JSON.stringify(data),
      credentials: 'include',
      mode: "cors"
    });
  }



  setSessionTokenFromServer(idToken) {
    let data: {} = {idToken: idToken};

    return this.httpPostCookies("/sessionLogin", data)
      .then(res => {
        console.log(res.headers.get('set-cookie')); // undefined
        console.log(document.cookie); // nope
        return res;
      });
  }


  logoutServer() {
    return this.httpPost("/sessionLogout", {})
  }


  doCompleteUserProfileRegistry(userID, userInfo:UserBasicInfo) {
    let data: {} = this.toJson(userInfo);
    data["userID"] = userID;
    return this.httpPost("/complete-user-profile-registry", data)
  }


  private toJson(data): {} {
    let json: {} = {};
    Object.keys(data).filter(key => json[key] = data[key]);
    return json;
  }
}
