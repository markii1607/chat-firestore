import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import Store from './store';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWQnOw7DZez4YLRTI4Mr-VU1uFhwhFIA4",
  authDomain: "chat-firestore-160408.firebaseapp.com",
  databaseURL: "https://chat-firestore-160408.firebaseio.com",
  projectId: "chat-firestore-160408",
  storageBucket: "chat-firestore-160408.appspot.com",
  messagingSenderId: "966742168017",
  appId: "1:966742168017:web:0b9bcb2a10d8df285ad0f0"
};

firebase.initializeApp(firebaseConfig);

window.store = Store;

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
