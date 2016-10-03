var _ = require("lodash");
// 1) Getting started

// var worker = function(worker) {
//   return _.filter(worker, {active: true})
// };
//
//
// module.exports = worker;

// 2) Sort By

// var sold = function(item) {
//   return _.sortBy(item, 'quantity').reverse()
// };
//
//
// module.exports = sold;

// 3) In every case

// var addSize = function(collection) {
//   return _.forEach(collection, function(item) {
//     if (item.population > 1) {
//       item.size = "big";
//     } else if(item.population > 0.5) {
//       item.size = "med";
//     } else {
//       item.size = "small";
//     }
//   });
// };
//
// module.exports = addSize;

// 4) Everyone is Min

// var sorted = function (item) {
//     var result = {
//         hot: [],
//         warm: []
//     };
//
//     function checkTemperature (item) {
//         return item > 19;
//     }
//
//     _.forEach(item, function (town, townname) {
//
//         if (_.every(town, checkTemperature)) {
//             result.hot.push(townname);
//         } else if (_.some(town, checkTemperature)) {
//             result.warm.push(townname);
//         }
//
//     });
//
//     return result;
// };
//
// module.exports = sorted;

// 5) Chain Mail

// var chained = function(item) {
//   return _.chain(item)
//     .map(function(item) {
//       return item + 'chained'
//     })
//     .map(function(item) {
//       return item.toUpperCase()
//     })
//     .sortBy()
//     .value()
// };
//
// module.exports = chained;

// 6) Count the Comments

// var comment_count = function (comments) {
//   var result = []
//   var grouped = _.groupBy(comments, 'username')
//
//   _.forEach(grouped, (value, username) => {
//       result.push({
//       username: username,
//       comment_count: _.size(value)
//   })
// })
//
// return _.sortBy(result, 'comment_count').reverse()
//
//
//
// module.exports = comment_count

// 7) Give me an overview

// var overview = function (orders) {
//
//     var overviewarray = [],
//         total = 0;
//
//     orders = _.groupBy(orders, 'article');
//
//     _.forEach(orders, function (item, key) {
//
//         key = parseInt(key);
//         total = 0;
//
//         if (item.length === 1) {
//             total = item[0].quantity;
//
//         } else {
//             total = _.reduce(item, function(sum, item) {
//                 return sum + item.quantity;
//             }, 0);
//         }
//
//         overviewarray.push({
//             article: key,
//             total_orders: total
//         });
//
//     });
//
//     overviewarray = _.sortBy(overviewarray, "total_orders").reverse();
//
//     return overviewarray;
// };
//
// module.exports = overview;

// 8) analyze

// var analyze = function (item) {
//
//     var average,
//         underperform,
//         overperform;
//
//     item = _.sortBy(item, "income");
//
//     average = _.reduce(item, function(sum, num) {
//         return sum + num.income;
//     }, 0);
//
//     average = average / item.length;
//
//     underperform = _.filter(item, function (num) {
//         return num.income <= average;
//     });
//
//     overperform = _.filter(item, function (num) {
//         return num.income > average;
//     });
//
//     return {
//         average: average,
//         underperform: underperform,
//         overperform: overperform
//     };
//
// };
//
// module.exports = analyze;

// 9) Templating
