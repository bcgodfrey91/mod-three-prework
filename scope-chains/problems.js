// function foo() {
//   var bar
// }


// function foo() {
//   var bar
//   function zip() {
//     var quux
//   }
// }

// function foo() {
//   var bar
//   quux = 1
//   function zip() {
//     var quux = 2
//   }
// }

// function foo() {
//   var bar
//   quux = 1
//   return zip
//   function zip() {
//     var quux = 2
//     bar = true
//   }
// }

function foo() {
  var bar
  quux = 1
  return zip
  function zip() {
    var quux = 2
    bar = true
  }
}
