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
    var trainTime = moment($('#train-time').val().trim(),'HH:mm').format('x');
    var frequency = $('#frequency').val().trim();
    //console.log(trainName);
    //console.log(destination);
    //console.log(trainTime);
    //console.log(frequency);

    var newTrain = {
      name: trainName,
      destination: destination,
      time: trainTime,
      frequency: frequency,


    };

    database.ref().push(newTrain);

    console.log(newTrain);
    alert('Train Added! Choo Choo!')
    $('#train-name').val('');
    $('#destination').val('');
    $('#train-time').val('');
    $('#frequency').val('');
    




  });

  database.ref().on('child_added', function(childSnapshot, prevChildKey) {
    console.log(childSnapshot.val());

    //var addData = childSnapshot.val();
    var trainName = childSnapshot.val().name;
    var destination = addData.destination;
    var trainTime = addData.time;
    var frequency = addData.frequency;

    console.log(trainName);
    console.log(destination);
    console.log(trainTime);
    console.log(frequency);

  });
