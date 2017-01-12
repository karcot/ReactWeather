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
            <h3 className ="text-center"> {temp} , {location} </h3>
  );


  };




module.exports = WeatherMessage;
