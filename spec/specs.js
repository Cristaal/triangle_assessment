describe('triangleMaker', function() {
  it("will return false if the length of the sides are equal to or less than zero", function() {
    expect(triangleMaker(0, 1, 2)).to.equal(false);
  });
});
