// Firebase config
var firebaseConfig = {
    apiKey: "AIzaSyAoHVpfRNnuk9S0la8rXB1Q-uwgjAn9xMc",
    authDomain: "flood-detection-system-1ee7b.firebaseapp.com",
    databaseURL: "https://flood-detection-system-1ee7b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "flood-detection-system-1ee7b",
    storageBucket: "flood-detection-system-1ee7b.firebasestorage.app",
    messagingSenderId: "257501928409",
    appId: "1:257501928409:web:83d8e3218b7560ebaf57c8",
    measurementId: "G-0KSZ4H28WV"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference to the node in Firebase where your sensor data is stored
  var sensorRef = firebase.database().ref('your_firebase_node');
  
  // Listen for changes in the data and update the dashboard
  sensorRef.on("value", function(snapshot) {
    var data = snapshot.val();
    console.log("Firebase data:", data);
  
    if (data) {
      // Update the UI with the sensor data from Firebase
      document.getElementById('humi').textContent = data.humi;
      document.getElementById('temp').textContent = data.temp;
      document.getElementById('level').textContent = data.level;
      document.getElementById('prediction').textContent = data.prediction;
      document.getElementById('windspeed').textContent = parseFloat(data.windspeed).toFixed(2);
  
      // Display the flood risk alert if prediction or water level is high
      if (data.prediction > 0 || data.level > 5) {
        document.getElementById('alert').style.display = 'block';
      } else {
        document.getElementById('alert').style.display = 'none';
      }
    }
  }, function(error) {
    console.error("Error reading Firebase data:", error);
  });
  