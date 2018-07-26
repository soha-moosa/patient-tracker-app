
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

console.log("Firebase Running");
console.log("Details", firebase);


// signup function

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let user = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let radioButtonValue = undefined;
    let buttons = document.getElementById("gender");
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].checked == true) {
            radioButtonValue = buttons[i];
        }
    }
    let dateOfBirth = document.getElementById("dateOfBirth").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;



    let auth =    firebase.auth();

    auth.createUserWithEmailAndPassword(email,password)
    .then(function(data){

        localStorage.setItem("user", JSON.stringify(data.user));
           
       })
       
       .catch(function(error){
           console.log(error.message);
       })

   
       });


firebase.auth().onAuthStateChanged( function(user){
    if(user){
        window.location.href = "../dashboard.html";
    }
    else{
        console.log("Logged Out!");
    }
});