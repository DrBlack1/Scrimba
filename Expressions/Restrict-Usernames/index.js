/**
 * 1) If there are numbers, they must be at the end.
 * 2) Letters can be lowercase and uppercase.
 * 3) At least two characters long. Two-letter names can't have numbers.
 */

let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2,}\d*$/; // Change this line
let result = userCheck.test(username);