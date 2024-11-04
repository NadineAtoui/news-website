import { formatDate, truncateSentence } from './index';

describe('formatDate', () => {
  it('should format an ISO date string to "Month Day, Year"', () => {
    const isoDate = '2023-11-04T00:00:00Z';
    const formattedDate = formatDate(isoDate);
    expect(formattedDate).toBe('November 4, 2023');
  });

  it('should handle invalid dates gracefully', () => {
    const isoDate = 'invalid-date';
    const formattedDate = formatDate(isoDate);
    expect(formattedDate).toBe('Invalid Date');
  });
});

describe('truncateSentence', () => {
  it('should return the full sentence if it is within maxChars limit', () => {
    const sentence = 'This is a short sentence.';
    const result = truncateSentence(sentence, 30);
    expect(result).toBe(sentence);
  });

  it('should truncate the sentence and add ellipsis if it exceeds maxChars', () => {
    const sentence = 'This is a longer sentence that needs to be truncated.';
    const result = truncateSentence(sentence, 20);
    expect(result).toBe('This is a longer sen...');
  });

  it('should return an empty string if an empty sentence is provided', () => {
    const result = truncateSentence('', 10);
    expect(result).toBe('');
  });

  it('should handle cases where maxChars is zero or negative', () => {
    const sentence = 'Any sentence here';
    const resultZero = truncateSentence(sentence, 0);
    const resultNegative = truncateSentence(sentence, -5);
    expect(resultZero).toBe('...');
    expect(resultNegative).toBe('...');
  });
});
