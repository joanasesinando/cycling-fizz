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


  // url :String = "https://cfservertest.cf";
  url :String = "http://localhost:5000";


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
