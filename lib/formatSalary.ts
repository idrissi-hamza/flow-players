export const formatSalary = (salary: number): string => {
  if (salary >= 1000000) {
    return (salary / 1000000).toFixed(1) + 'M$';
  } else if (salary >= 1000) {
    return (salary / 1000).toFixed(1) + 'k$';
  } else {
    return salary + '$';
  }
};
