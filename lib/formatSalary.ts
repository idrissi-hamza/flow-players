export const formatSalary = (salary: number, devise: string): string => {
  if (salary >= 1000000) {
    return (salary / 1000000).toFixed(0) + 'M' + devise;
  } else if (salary >= 1000) {
    return (salary / 1000).toFixed(0) + 'k' + devise;
  } else {
    return salary.toString() + devise;
  }
};
