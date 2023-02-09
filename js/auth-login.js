const firebaseConfig = {
  apiKey: "AIzaSyCYgNOjmsPHTSG9MJDnd6Weu4NETw1TzT0",
  authDomain: "sibeta-4dd37.firebaseapp.com",
  projectId: "sibeta-4dd37",
  storageBucket: "sibeta-4dd37.appspot.com",
  messagingSenderId: "819686580210",
  appId: "1:819686580210:web:1baf67eb3ad637f363156b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

var datab = firebase.database().ref("data");
function userRegister() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var email = document.getElementById("password").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(username, email, password)
    .then(function () {

    }).catch(function(error) {
        var errorcode = error.code;
        var errormsg = error.message;
    });
}
const auth = firebase.auth();
function SignIn() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch(e=>alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById;