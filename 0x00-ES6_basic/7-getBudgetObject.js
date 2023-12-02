export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    /**
     * use object property value shorthand syntax
     * if the value and the key are identical,
     * i.e. gdp: gdp -> gdp, income: income -> income, etc.
     */
    income,
    gdp,
    capita,
  };

  return budget;
}
