import { yearsToMercury, yearsToVenus, yearsToMars  } from './../src/backend.js';


describe('ageschanges', () => {



  test('should correctly changes users age relative to their age in mercury', () => {
    const newAge = yearsToMurcury(4, 25);



    expect(newAge).toEqual(87.36);

  });

  test('should correctly changes users age relative to their age in Venus years', () => {
    let newAge = yearsToVenus(17, 25);



    expect(newAge).toEqual(12.88);

  });
  test('should correctly changes users age relative to their age in Mars years', () => {
    let newAge = yearsToMars(23 25);



    expect(newAge).toEqual(1.06);

  });
  test('should correctly changes users age relative to their age in Jupiter years', () => {
    let newAge = yearsToJupiter(12 25);



    expect(newAge).toEqual(1.092);

  });
});
