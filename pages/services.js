// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAACs8Era5zHrAACIgLOUdQF8veOkAGENM",
    authDomain: "rozy-beauty-parlor.firebaseapp.com",
    databaseURL: "https://rozy-beauty-parlor-default-rtdb.firebaseio.com",
    projectId: "rozy-beauty-parlor",
    storageBucket: "rozy-beauty-parlor.appspot.com",
    messagingSenderId: "23145796565",
    appId: "1:23145796565:web:268b15d767ae338afda35c",
    measurementId: "G-4WXL3ZJNTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

var name = document.getElementById("name");
var date = document.getElementById("date");
var time = document.getElementById("time");

window.submitData = function () {
    var obj = {
        name: name.value,
        date: date.value,
        time: time.value
    }
    obj.id = Math.random().toString().slice(2);
    console.log(obj);

const reference = ref(database, `appointments/${obj.id}/`);
set(reference, obj).then(function(){alert("Appointment Booked Successfully")}).catch(function(err){alert(err.message)})
};
// function getData() {
//     var dataList = [];
//     const reference = ref(database, `appointments/`);
//     onChildAdded(reference, function (dt) {
//         dataList.push(dt.val());
//         parent.innerHTML = "";
//         for (var i = 0; i < dataList.length; i++) {
//             parent.innerHTML += `<li>${}</li>`
//         }
//     })
// }
// getData();

window.offersPage = function(){
    window.location.assign("deals.html");
    console.log("done");
};


