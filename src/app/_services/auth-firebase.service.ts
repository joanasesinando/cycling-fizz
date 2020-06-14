import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  public currentUser = null;
  public currentUserIdToken = null;
  public isUserLogged: boolean = false;

  constructor(public afAuth: AngularFireAuth) {
    let thisObj = this;
    firebase.auth().onAuthStateChanged(function(user) {
      thisObj.userChanged(user);
    });

  }

  sendEmailVerification() {
    if (!this.isUserLogged) return;
    this.currentUser.sendEmailVerification();
  }

  isEmailVerified() {
    if (!this.isUserLogged) return false;
    return this.currentUser.emailVerified;
  }

  userChanged(user) {
    this.currentUser = user;
    this.isUserLogged = !!this.currentUser;
    if (this.isUserLogged) {
      this.getCurrentUserIdTokenPromise().then(res => {
        this.currentUserIdToken = res;
      }, err => {
        console.log(err);
        console.log(err.message);
      });
    }
  }

  private getCurrentUserIdTokenPromise() {
    if (!this.isUserLogged) {
      return null;
    } else {
      return this.currentUser.getIdToken();
    }
  }

  logout() {
    this.afAuth.auth.signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
          .then(res => {
            resolve(res);
          }, err => reject(err))
    })
  }

  doLogin(value){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
          .then(res => {
            resolve(res);
          }, err => reject(err))
    })
  }

  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
          .signInWithPopup(provider)
          .then(res => {
            resolve(res);
          })
    })
  }
}
