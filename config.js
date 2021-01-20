import firebase from 'firebase'
 require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyCmHW5ZQYxGIzuOW5PSj5yji5qGRlXgI1c",
    authDomain: "book-santa-1fa62.firebaseapp.com",
    projectId: "book-santa-1fa62",
    storageBucket: "book-santa-1fa62.appspot.com",
    messagingSenderId: "738535586235",
    appId: "1:738535586235:web:5a98a938db04f03b15ec9e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

