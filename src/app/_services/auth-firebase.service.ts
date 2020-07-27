import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {AuthServerHandlerService} from "./auth-server-handler.service";

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  // public currentUser = null;
  // public currentUserIdToken = null;
  public auth = null;
  public db = null;

  constructor(public afAuth: AngularFireAuth, private authServerHandlerService: AuthServerHandlerService) {
    let thisObj = this;
    this.auth = firebase.auth();
    this.db = firebase.firestore();

    this.auth.setPersistence(firebase.auth.Auth.Persistence.NONE);


    // this.auth.onAuthStateChanged(function(user) {
    //   thisObj.userChanged(user);
    // });

  }

  setLanguageCode(code) {
    this.auth.languageCode = code;
  }


  // sendEmailVerification() {
  //   if (!this.isUserLogged()) return;
  //   this.currentUser.sendEmailVerification().then(function() {
  //     console.log("Email Sent");
  //   }).catch(function(error) {
  //     console.log("An error happened.");
  //   });
  // }
  //
  // recoverPassword(email: string) {
  //   this.auth.sendPasswordResetEmail(email).then(function() {
  //     console.log("Email Sent");
  //   }).catch(function(error) {
  //     console.log("An error happened.");
  //   });
  // }
  //


  // userChanged(user) {
  //   this.currentUser = user;
  //   this.isUserLogged() = !!this.currentUser;
  //   if (this.isUserLogged()) {
  //     this.getCurrentUserIdTokenPromise().then(res => {
  //       this.currentUserIdToken = res;
  //     }, err => {
  //       console.log(err);
  //       console.log(err.message);
  //     });
  //   }
  // }

  // private getCurrentUserIdTokenPromise() {
  //   if (!this.isUserLogged()) {
  //     return null;
  //   } else {
  //     return this.currentUser.getIdToken();
  //   }
  // }

  // logout() {
  //   return this.afAuth.auth.signOut().then(() => {
  //     return this.authServerHandlerService.logoutServer()
  //       .then(res => {
  //         if (res.status == "success") {
  //           this.userLogged = false;
  //         }
  //         return res;
  //       });
  //   }).catch(function(error) {
  //     console.log(error);
  //   });
  // }

  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    }).then(login => {
      return login.user.getIdToken().then(idToken => {
        return this.authServerHandlerService.setSessionTokenFromServer(idToken)
          .then(res => {
            if (res.status == "success") {
              this.authServerHandlerService.onSuccessLogin();
            }
            return res;
          });
      });
    });
  }


  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
        .then(res => resolve(res), err => reject(err))})
      .then(login => {
        return login.user.getIdToken().then(idToken => {
          return this.authServerHandlerService.setSessionTokenFromServer(idToken)
            .then(res => {
              if (res.status == "success") {
                this.authServerHandlerService.onSuccessLogin();
              }
              return res;
            });
        });
      });
  }
  

  // doGoogleLogin(){
  //   return new Promise<any>((resolve, reject) => {
  //     let provider = new firebase.auth.GoogleAuthProvider();
  //     provider.addScope('profile');
  //     provider.addScope('email');
  //     this.afAuth.auth.signInWithPopup(provider).then(res => {
  //         resolve(res);
  //       })
  //   })
  // }



  checkIfUsernameExists = async(username) => {
    let userdata = this.db.collection("userdata");

    return userdata.where("username", "==", username).get()
      .then(querySnapshot => {
        return querySnapshot.size > 0;
      })
      .catch(error => {
        return null;
      });
  }
}
