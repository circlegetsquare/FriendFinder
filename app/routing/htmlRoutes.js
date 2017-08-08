// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
    hitcount++;
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
    hitcount++;
});

// Get Reservations
app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
    hitcount++;
});
app.get("/count",function(req,res){
    var showme = hitcount.toString();
    res.end(showme);
});