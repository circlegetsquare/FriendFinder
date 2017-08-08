// API Routes
// =============================================================
app.post("/api/new", function(req, res) {
    var newreservation = req.body;
    //console.log(newreservation);
    //console.log(reservations.length);
    
    //make the object body into the class defined here
    var addme = new reservation(newreservation.customerName, newreservation.phoneNumber, newreservation.customerEmail, newreservation.customerID);
    
    if(newreservation.customerName == "Mark Techson" || "mark techson"){
        reservations[0] == addme;
        res.json(1);
    }
    // check if more than 4 reservations are made
    if(reservations.length < 5) {
       // console.log("before push: " + reservations);
        reservations.push(addme);
       // console.log("after push: " + reservations);
        res.json(1);
       // res.json(newreservation);
    }
    // add to waitlist because more than 5 reservations are made
    else{
      console.log("reservations full, adding to wait list");
        waitlist.push(addme);
        res.json('');
       // res.json(newreservation);
    }
});

//return the friends array
app.get("/api/friends", function(req, res){
  res.json(reservations);
});

