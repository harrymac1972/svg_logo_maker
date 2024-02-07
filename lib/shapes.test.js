
const { Circle,Square,Triangle } = require('./shapes');

describe('Render Triangle', () => {
  describe('Text', () => {
    test('confirm that text is in the markup', () => {
      const triangle = new Triangle();
      expect(triangle.render("orange","black","JHM")).toContain('>JHM</text>');
    });
  }),
  describe('Points', () => {
    test('confirm that polygon points exist', () => {
      const triangle = new Triangle();
      expect(triangle.render("blue","purple","ECL")).toContain('><polygon points="150,0 0,200 300,200"');
    });
  });
});
