import { yearsToMercury } from './../src/backend.js';

describe('ageschanges', () => {

  test('should correctly changes users age relative to their age in mercury', () => {
    let newAge = yearsToMurcury(4);
    expect(usersAgeInMercuryYears).toEqual(16.64);

  });
});
