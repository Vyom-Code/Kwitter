
var firebaseConfig = {
    apiKey: "AIzaSyAZIVlE7-BQM8Dvu0IlBQ7OYel2PgeBfgY",
    authDomain: "kwitter-25afb.firebaseapp.com",
    databaseURL: "https://kwitter-25afb-default-rtdb.firebaseio.com",
    projectId: "kwitter-25afb",
    storageBucket: "kwitter-25afb.appspot.com",
    messagingSenderId: "974550842515",
    appId: "1:974550842515:web:c0a240226d9e2fb96a2166"
  };

   firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";
  function addRoom (){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
});
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
console.log("room name -" + Room_names);
row= "<div class='room_name' id="+ Room_names+ " onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";

document.getElementById("output").innerHTML+= row;
        
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function Logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location ="login.html";
}