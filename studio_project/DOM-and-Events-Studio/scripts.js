window.addEventListener("load", () => {

 let takeOff = document.getElementById("takeoff");
  takeOff.addEventListener("click", () => {
    let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");

    if (confirmation) {
      document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
      
      document.getElementById("shuttleBackground").style.backgroundColor = "blue";
      
      let shuttleHeight = parseInt(document.getElementById("spaceShuttleHeight").innerHTML)

      shuttleHeight += 10000
      
      document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;
    }
    
  });

  let landing = document.getElementById("landing");
  landing.addEventListener("click", () => {
    alert("The shuttle is landing. Landing gear engaged.")
    
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed."

    document.getElementById("shuttleBackground").style.backgroundColor = "green";

    let shuttleHeight = parseInt(document.getElementById("spaceShuttleHeight").innerHTML);

    shuttleHeight = 0;
      
    document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;

  });

  


});