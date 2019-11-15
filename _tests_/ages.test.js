import { yearsToMercury, yearsToVenus, yearsToMars  } from './../src/backend.js';


describe('ageschanges', () => {



  test('should correctly changes users age relative to their age in mercury', () => {
    const newAge = yearsToMurcury(4, 25);



    expect(usersAgeInMercuryYears).toEqual(87.36);

  });

  test('should correctly changes users age relative to their age in Venus years', () => {
    let newAge = yearsToVenus(17, 25);



    expect(usersLifeOnVenus).toEqual(12.88);

  });
  test('should correctly changes users age relative to their age in Mars years', () => {
    let newAge = yearsToMars(62 25);



    expect(usersAgeInMarsYears).toEqual(32.97);

  });
});
