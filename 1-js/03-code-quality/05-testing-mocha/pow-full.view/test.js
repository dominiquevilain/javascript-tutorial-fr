describe("pow", function() {

  describe("élève x à la puissance n", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} à la puissance 3 est ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  it("si n est négatif, le résultat est NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("si n n'est pas un entier, le résultat est NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });

});
