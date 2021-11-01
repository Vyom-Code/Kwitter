//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAZIVlE7-BQM8Dvu0IlBQ7OYel2PgeBfgY",
      authDomain: "kwitter-25afb.firebaseapp.com",
      databaseURL: "https://kwitter-25afb-default-rtdb.firebaseio.com",
      projectId: "kwitter-25afb",
      storageBucket: "kwitter-25afb.appspot.com",
      messagingSenvderId: "974550842515",
      appId: "1:974550842515:web:c0a240226d9e2fb96a2166"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag= "<h4>" +name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag= "<h4 class='message_h4'>" +message+"</h4>";
like_button="<button class='btn btn-warning'id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;


//End code

      } });  }); }
getData();
function updateLike(message_id)
{
      console.log("clicked on like button-"+ message_id);
      button_id = message_id;
      likes= document.getElementById(button_id).value;
      update_likes= Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: update_likes
      });
}
function logut()
{
localStorage.removeItem("user_name");
local.Storage.removeItem("room_name");
window.location = "login.html";
}
function send()
{
      msg = document.getElementById("msg").value; 
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0  
      });
      document.getElementById("msg").value="";
}