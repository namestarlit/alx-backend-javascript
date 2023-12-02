export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    /**
     * Disable no-unused-vars eslint error
     * for the next two lines as their are intentinally unused
     * NOTE: use // eslint-disable-next-line [rule]
     * to disble the next line below it
     */

    /* eslint-disable no-unused-vars */
    const task = true;
    const task2 = false;
    /* eslint-enable no-unused-vars */
  }

  return [task, task2];
}
