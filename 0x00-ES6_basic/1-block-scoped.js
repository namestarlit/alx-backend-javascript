export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    /**
     * Disable eslint for the next two lines
     * to suppress no-unused-vars error
     * NOTE: single line disable: // eslint-disable-next-line
     */

    /* eslint-disable */
    const task = true;
    const task2 = false;
    /* eslint-enable */
  }

  return [task, task2];
}
