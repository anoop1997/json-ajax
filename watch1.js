// NOTE: If you run this file locally
// You will not get a server status
// You can comment out lines 9 and 26 to make it work locally

var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       // When readystate changes
  // The following conditional check will not work locally - only on a server
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);

    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) { // Loop through object
      newContent += '<div class="event" style="  border:2px solid #d4d7d8; width:25em; margin-left:.5em; height:8.5em;">';
      newContent += '<h1 style="color: #28c5b7; margin-left:.2em;">' + responseObject.events[i].Name + '</h1> ';
      newContent += '<div class="pull-right" style="color: #28c5b7; margin-right:.2em;">' + responseObject.events[i].date + '</div> ';
      newContent += '<p style="color: #28c5b7; margin-left:.4em;"><b>' + responseObject.events[i].details +'</b></p>';

      newContent += '</div>';
    }

    // Update the page with the new content
    document.getElementById('content').innerHTML = newContent;


};

xhr.open('GET', 'data/watch.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request
