// function getTempCallback (location,callback) {
//   callback (undefined, 78);
//   callback ('city not found');
// }
//
// getTempCallback('Philadephia', function (err, temp) {
//   if (err) {
//
//     console.log ('error', err);
//   } else {
//     console.log ('success', temp)
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise (function (resolve, reject) {
//     setTimeout (function(){
//       resolve (79);
//       reject('city not found');
//
//     }, 1000);
//
//   });
// }
// getTempPromise ('Philadephia').then (function (temp) {
//   console.log ('promise success', temp);
// }, function (err) {
//
// console.log ('promisse error', err);
// })
// challenge area

function addPromise (a,b) {
  return new Promise (function (resolve, reject) {
    someNumber = a+b;
    if (typeof someNumber === 'number') {
        resolve(a+b);
    } else {
      reject ('both have to be numbers');
    }
  });

}

addPromise ('good',7).then (function (someNumber) {
  console.log ('success', someNumber);
}, function (err) {
  console.log ('error', err);
})


addPromise (6,7).then (function (someNumber) {
  console.log ('success', someNumber);
}, function (err) {
  console.log ('error', err);
})
