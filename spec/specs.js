describe('triangleMaker', function() {
  it("will return false if the length of the sides are equal to or less than zero", function() {
    expect(triangleMaker(0, 1, 2)).to.equal(false);
  });

  it("will return false if the length of one side is greater than the other two", function() {
    expect(triangleMaker(1, 1, 20)).to.equal(false);
  });

  it("will return equilateral if the length of the three sides are equal", function() {
    expect(triangleMaker(9, 9, 9)).to.equal("equilateral");
  });

  it("will return isoceles if two sides are equal to one another", function() {
    expect(triangleMaker(9, 9, 5)).to.equal("isoceles");
  });
});
