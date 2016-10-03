'use strict';

// Warm up

// setTimeout(function() {
//   console.log('TIMED OUT!')
// }, 300)

// 2) Fulfill a promise

//  var promise = new Promise(function (fulfill, reject) {
//       setTimeout(function () {
//       fulfill('FULFILLED!');
//     }, 300);
//    });
//
// promise.then(console.log);

// 3) Reject a promise

// var promise = new Promise(function (fulfill, reject) {
//
//   setTimeout(function () {
//     reject(new Error('REJECTED!'))
//   }, 300);
// });
//
// function onReject (error) {
//   console.log(error.message);
// }
//
// promise.then(null, onReject)

// 4) To reject or not to reject

// var promise = new Promise(function (fulfill, reject) {
//
//   fulfill('I FIRED');
//   reject(new Error('I DID NOT FIRE'));
//
// });
//
// function onReject (error) {
//   console.log(error.message);
// }
//
// promise.then(console.log, onReject)

// 5) Always asynch

// var promise = new Promise(function (fulfill, reject) {
//
//   fulfill('PROMISE VALUE');
// });
//
// promise.then(console.log)
//
// console.log('MAIN PROGRAM')

// 6) Shortcuts

// var promise = Promise.resolve('I FIRED')
//
// promise.catch(function(error){
//    console.error('THERE IS AN ERROR!!');
//    console.error(error.message);
// })

// 7) Promise after promise

// var firstPromise = first();
//
// var secondPromise = firstPromise.then(function (value) {
//   return second(value);
// });
//
// secondPromise.then(console.log);

// 8) Promises and values

// function attachTitle(e) {
//   return 'DR. ' + e
// }
//
// Promise.resolve('MANHATTAN')
//   .then(attachTitle)
//   .then(console.log)


// 9) Throw an error

// nah

// 10) Important Rule
//
// function alwaysThrows() {
//   throw new Error('OH NOES')
// }
//
// function iterate(i) {
//   console.log(i);
//   return ++i
// }
//
// Promise.resolve(iterate(1))
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(alwaysThrows)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(null, console.log);
