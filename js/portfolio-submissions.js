
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCwAMMBohrTx6s7MvRQsAplZ1_AyDu0FSY",
    authDomain: "portfolio-submissions.firebaseapp.com",
    databaseURL: "https://portfolio-submissions.firebaseio.com",
    projectId: "portfolio-submissions",
    storageBucket: "portfolio-submissions.appspot.com",
    messagingSenderId: "231137951659"
  };
  firebase.initializeApp(config);

  var database = firebase.database()
  var name = ""
  var email = ""
  var message = ""

  database.ref().on("child_added", function(snapshot) {
      var data = snapshot.val()
      console.log(data)
      newUserSubmission(data)
  }) 

  function newUserSubmission(data) {
      var submission = data
      name = submission.name
      email = submission.email
      message = submission.email
  }

  $("#submit-button").on("click", function(event) {

    name = $("#name").val().trim()
    email = $("#email").val().trim()
    message = $("#message").val().trim()
    database.ref().push({
        name: name,
        email: email,
        message: message,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    })
    
  })
  
