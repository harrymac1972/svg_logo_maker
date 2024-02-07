
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
  }),
  describe('Background Colour', () => {
    test('confirm that fill colour is correct', () => {
      const triangle = new Triangle();
      expect(triangle.render("black","white","HP")).toContain('style="fill:black"');
    });
  });
});

describe('Render Circle', () => {
  describe('Text', () => {
    test('confirm that text is in the markup', () => {
      const circle = new Circle();
      expect(circle.render("green","grey","Orb")).toContain('>Orb</text>');
    });
  }),
  describe('Size and Radius', () => {
    test('confirm correct size and radius', () => {
      const circle = new Circle();
      expect(circle.render("pink","black","NEO")).toContain('<circle cx="150" cy="100" r="80"');
    });
  }),
  describe('Background Colour', () => {
    test('confirm that fill colour is correct', () => {
      const circle = new Circle();
      expect(circle.render("red","white","SUN")).toContain('r="80" fill="red"');
    });
  });
});
