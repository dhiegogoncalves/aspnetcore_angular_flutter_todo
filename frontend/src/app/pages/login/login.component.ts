
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private angularFireAuth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.angularFireAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
  }
}
