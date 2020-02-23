import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  public currentUser = null;
  public isUserLogged: boolean = false;

  constructor(public afAuth: AngularFireAuth) {
    let thisObj = this;
    firebase.auth().onAuthStateChanged(function(user) {
      thisObj.userChanged(user);
    });

  }

  userChanged(user) {
    this.currentUser = user;
    this.isUserLogged = !!this.currentUser; //Don' believe this works

    console.log(this.currentUser);
    console.log(this.isUserLogged);

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
