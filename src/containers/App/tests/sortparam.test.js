import sortparam from '../sortparam';

const repos = [
  { name: 1, letter: 'D' },
  { name: 4, letter: 'A' },
  { name: 2, letter: 'C' },
  { name: 3, letter: 'B' }
];

describe('sortparam', () => {
  it('sorts the array as expected', () => {
    expect(sortparam(repos, 'name')).toEqual([
      { name: 1, letter: 'D' },
      { name: 2, letter: 'C' },
      { name: 3, letter: 'B' },
      { name: 4, letter: 'A' }
    ]);
    
    expect(sortparam(repos, 'letter')).toEqual([
      { name: 4, letter: 'A' },
      { name: 3, letter: 'B' },
      { name: 2, letter: 'C' },
      { name: 1, letter: 'D' }
    ]);
  });
});