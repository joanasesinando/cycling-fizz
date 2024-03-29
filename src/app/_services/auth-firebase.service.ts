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
  public auth = null;
  public db = null;

  constructor(public afAuth: AngularFireAuth) {
    let thisObj = this;
    this.auth = firebase.auth();
    this.db = firebase.firestore();
    this.auth.onAuthStateChanged(function(user) {
      thisObj.userChanged(user);
    });

  }

  setLanguageCode(code) {
    this.auth.languageCode = code;
  }

  sendEmailVerification() {
    if (!this.isUserLogged) return;
    this.currentUser.sendEmailVerification().then(function() {
      console.log("Email Sent");
    }).catch(function(error) {
      console.log("An error happened.");
    });
  }

  recoverPassword(email: string) {
    this.auth.sendPasswordResetEmail(email).then(function() {
      console.log("Email Sent");
    }).catch(function(error) {
      console.log("An error happened.");
    });
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
