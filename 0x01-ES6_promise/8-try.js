export default function divideFunction(numerator, denominitor) {
  if (denominitor === 0) {
    throw Error('cannot divide by 0');
  } else {
    return numerator / denominitor;
  }
}
