var React = require ('react');

// var WeatherMessage = React.createClass ({
// render: function (){
//   var {temp,location} = this.props;
//   return (
//             <h4> {temp} , {location} </h4>
//   );
// }
//
// });

var WeatherMessage = ({temp,location}) => {
  

  return (
            <h4> {temp} , {location} </h4>
  );


  };




module.exports = WeatherMessage;
