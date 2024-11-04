export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

export const truncateSentence = (sentence: string, maxChars: number): string => {
  if (maxChars <= 0) return '...';

  if (sentence.length <= maxChars) return sentence; 

  return sentence.slice(0, maxChars) + '...'; 
};