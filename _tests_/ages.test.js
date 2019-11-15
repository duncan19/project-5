import { yearsToMurcury } from './../src/backend.js';

describe('ageschanges', () => {

  test('should correctly changes users age relative to their age in murcury', () => {
    let newAge = yearsToMurcury(4);
    expect(usersAgeInMurcuryYears).toEqual(16.64);

  });
});
