"use strict";

function generate() {
  var res, data;
  return regeneratorRuntime.async(function generate$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://api.adviceslip.com/advice"));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(res.json());

        case 5:
          data = _context.sent;
          // document.querySelector("p").innerText = "A D V I S E # " +data.slip.id;
          document.querySelector("h2").innerText = '"' + data.slip.advice + '"';

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

document.querySelector('button').onclick = function () {
  generate();
};