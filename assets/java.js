  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDOhbe4UOKqln1obSopjL6rcqpzDR6D6qM",
    authDomain: "train-schedule-40f90.firebaseapp.com",
    databaseURL: "https://train-schedule-40f90.firebaseio.com",
    projectId: "train-schedule-40f90",
    storageBucket: "train-schedule-40f90.appspot.com",
    messagingSenderId: "786438227852"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $('#add-train').on('click', function(event){
    event.preventDefault();
    var trainName = $('#train-name').val().trim();
    var destination = $('#destination').val().trim();
    var trainTime = $('#train-time').val().trim();
    var frequency = $('#frequency').val().trim();
    console.log(trainName);
    console.log(destination);
    console.log(trainTime);
    console.log(frequency);
    $('#train-name').val('');


  });
