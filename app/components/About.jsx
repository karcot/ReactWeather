var React = require('react');

// var About = React.createClass ({
//   render: function (){
//     return (
//     <h3>About Component</h3>
//     )
//   }
// });

var About =  (props) => {
  return (
    <div>
  <h1 className ="text-center">About Component</h1>
  <p> This is a weather app</p>
  <p>
    Here are some of the tools
    <ul>
      <li>
        <a href="https://facebook.github.io/react"> JS framwework</a>
      </li>
      <li>
        <a href = "http://openweathermap.org"> used this</a>
      </li>
    </ul>
  </p>
</div>


  )
};
module.exports = About;
