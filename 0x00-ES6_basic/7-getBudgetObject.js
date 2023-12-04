/**
 * use object property value shorthand syntax
 * if the value and the key are identical (have the same name)
 * i.e. gdp: gdp -> gdp, income: income -> income, etc.
 */
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
