// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Portland', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp)
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     resolve(79);
//     reject('City not found');
//   });
// }
//
// getTempPromise('Portland').then(function (temp) {
//   console.log('promise success', temp);
// }, function (errr) {
//   console.log('promise error', err);
// })
//
// Challenge Area
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a=== 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('A & b need to be numbers');
    }
  });
}

addPromise(2, 3).then(function (sum) {
  console.log('success', sum);
} function (err) {
  console.log('error', err);
});

addPromise('Jesse', 9).then(function (sum) {
  console.log('this shouold not show up');
}, function (err) {
  console.log('This should appear', err) ;
});
