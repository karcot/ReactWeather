var express = require ('express');


//create our app

var app = express();
const PORT = process.env.PORT || 3000;
app.use(fucntion (req, res, next) {
  if (req.headers ['x-forwarded-proto']=== 'http' ) {
    next();

  } else{
    res.redirect('http://'+req.jostname + req.url);
  }


});




app.use(express.static('public'));
app.listen (PORT, function () {
  console.log ('express server is up and running on port' +  PORT);
});
