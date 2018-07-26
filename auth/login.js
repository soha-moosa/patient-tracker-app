// // Initialize Firebase

var config = {
    apiKey: "AIzaSyBUvXdnEULdtBJCRMfFM_mWOQNdDlD-g34",
    authDomain: "patient-tracker-app-8c634.firebaseapp.com",
    databaseURL: "https://patient-tracker-app-8c634.firebaseio.com",
    projectId: "patient-tracker-app-8c634",
    storageBucket: "",
    messagingSenderId: "934358866547"
};

var firebase = firebase.initializeApp(config);


// login function
var auth = firebase.auth();


document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(email, password);

    auth.signInWithEmailAndPassword(email,password)
        .then(function(data){

         localStorage.setItem("user", JSON.stringify(data.user));
            
        })
        
        .catch(function(error){
            console.log(error.message);
        })

    
        });

auth.onAuthStateChanged(function(user){
    if(user){
        window.location.href = "../dashboard.html";

    }
});