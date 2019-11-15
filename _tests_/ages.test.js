import { yearsToMercury, yearsToVenus, yearsToMars  } from './../src/backend.js';


describe('ageschanges', () => {



  test('should correctly changes users age relative to their age in mercury', () => {
    const newAge = yearsToMurcury(4);



    expect(usersAgeInMercuryYears).toEqual(16.64);

  });

  test('should correctly changes users age relative to their age in Venus years', () => {
    let newAge = yearsToVenus(17);



    expect(usersAgeInVenusYears).toEqual(27.41);

  });
  test('should correctly changes users age relative to their age in Mars years', () => {
    let newAge = yearsToMars(62);



    expect(usersAgeInMarsYears).toEqual(32.97);

  });
});
