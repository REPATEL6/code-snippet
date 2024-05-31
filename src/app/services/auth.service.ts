import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private uid?: string;

  constructor(private route: Router) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
        console.log("User logged in as:",user.email);
      } else {
        this.uid = undefined
        console.log("User logged out");
      }
    });
  }

  isAuthenticated() {
    return this.uid ? true : false;
  }

  getUid() {
    return this.uid;
  }

  registerUser(email: string, password: string) {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log({ user });
        this.route.navigate(['/login']);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error:' + errorMessage);
        alert('Something went wrong while signing up.Please try again');
        // ..
      });
  }

  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log({ user });
        this.route.navigate(['/']);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error:' + errorMessage);
        alert('Something get wrong while login.Please try again');
      });
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      // .then(() => {
      //   // Sign-out successful.
      // })
      .catch((error) => {
        // An error happened.
        console.log('Error:' + error.message);
        alert('Something get wrong while logging out.Please try again');
      });
  }
}
