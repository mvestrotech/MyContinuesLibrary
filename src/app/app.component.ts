import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyLibrary';
  constructor() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyCRRynQdnBXrgDSDwpKOTuMyhqg7smSVZo',
      authDomain: 'mylibrary-37138.firebaseapp.com',
      projectId: 'mylibrary-37138',
      storageBucket: 'mylibrary-37138.appspot.com',
      messagingSenderId: '588540882288',
      appId: '1:588540882288:web:e9280792184be043d333b5'
    };
    // Initialize Firebase
    if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
  }
}
