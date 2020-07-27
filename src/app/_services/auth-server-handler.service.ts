import { Injectable } from '@angular/core';



export interface UserBasicInfo {
  username: string;
  firstName: string;
  lastName: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthServerHandlerService {

  constructor() {}

  // url: String = "https://auth.server.cyclingfizz.pt";
  url: String = "https://localhost:5000";


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


  private httpGetCookies(path: string) {
    return fetch(this.url + path, {
      method : "GET",
      credentials: 'include',
      mode: "cors"
    });
  }

/***************************************************************************/

  private userLogged: boolean = false;

  private basicUserInformation: {
    'email': string,
    'isEmailVerified': boolean,
    'username': string,
    'firstName': string,
    'lastName': string,
    'fullName': string
  } = null;


  isUserLogged() {
    return this.userLogged;
  }

  onSuccessLogin() {
    this.userLogged = true;
    this.getBasicUserInformation()
      .then(res => {
        console.log(res);
      });
  }

  isEmailVerified() {
    if (!this.isUserLogged() || !this.basicUserInformation) return false;

    return this.basicUserInformation.isEmailVerified;
  }


  tryLoginByCookie() {
    return this.checkCookie()
      .then(res => {
        if (res.status == "success") {
          this.onSuccessLogin();
        }
        return res;
      });
  }

  checkCookie() {
    return this.httpPostCookies("/checkCookie", {}).then(r => r.json());
  }



  setSessionTokenFromServer(idToken) {
    let data: {} = {idToken: idToken};

    return this.httpPostCookies("/sessionLogin", data).then(r => r.json());
  }


  logout() {
    return this.httpPostCookies("/sessionLogout", {}).then(r => r.json())
      .then(res => {
        if (res.status == "success") {
          this.userLogged = false;
        }
        return res;
      });
  }


  doCompleteUserProfileRegistry(userInfo: UserBasicInfo) {
    let data: {} = this.toJson(userInfo);
    return this.httpPostCookies("/complete-user-profile-registry", data);
  }

  getBasicUserInformation() {
    return this.httpGetCookies('/get-basic-user-info').then(r => r.json())
      .then(res => {
        if (res.status == "success") {
          this.basicUserInformation = res.result;
        }
        return res;
      });
  }


  private toJson(data): {} {
    let json: {} = {};
    Object.keys(data).filter(key => json[key] = data[key]);
    return json;
  }
}
