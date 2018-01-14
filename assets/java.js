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
    var trainTime = moment($('#train-time').val().trim(),'HH:mm').subtract(10, 'years').format('X');
    var frequency = $('#frequency').val().trim();
    

    var newTrain = {
      name: trainName,
      destination: destination,
      time: trainTime,
      frequency: frequency,


    };

    if (trainName === '' || destination === '' || trainTime === '' || frequency === ''){
    alert('Please fill in all inputs')
      return false;
    }

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

    var addData = childSnapshot.val();
    var trainName = addData.name;
    var destination = addData.destination;
    var trainTime = addData.time;
    var frequency = addData.frequency;

    console.log(trainName);
    console.log(destination);
    console.log(trainTime);
    console.log(frequency);

    var timeDifference = moment().diff(moment.unix(trainTime), 'minutes');
    console.log(timeDifference);
    var  timeRemainder = moment().diff(moment.unix(trainTime), 'minutes') % frequency;
    var minutesRemaining = frequency - timeRemainder;
    var nextTrainArrivalTime = moment().add(minutesRemaining, 'm').format('hh:mm A');
    console.log(nextTrainArrivalTime);

    $('#train-table').append('<tr><td>' + trainName + '</td><td>' + destination + '</td><td>' + frequency + '</td><td>' + nextTrainArrivalTime  + '</td><td>' + minutesRemaining + '</td></tr>');

  });
