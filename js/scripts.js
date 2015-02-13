var triangleMaker = function(side1, side2, side3) {
  if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    return false;
  } else if (side1 + side2 < side3) {
    return false;
  } else if (side1 === side2 && side1 === side3) {
    return "equilateral";
  } else if ((side1 === side2 && side1 !== side3) || (side1 === side3 && side1 !== side2) || (side2 === side3 && side2 !== side1)) {
    return "isoceles";
  } else if (side1 !== side2 && side2 !== side3) {
    return "scalene";
  };
};

$(document).ready(function() {
  $('form#triangle-maker').submit(function(event) {
    event.preventDefault();
    var side1 = parseInt($('input#side1').val());
    var side2 = parseInt($('input#side2').val());
    var side3 = parseInt($('input#side3').val()):
    var result = triangleCalculator(side1, side2, side3);

    if (result === false) {
      result = 'not at all a'
      $('.triangle').text('a(n)' + result);
    }
  });
});
