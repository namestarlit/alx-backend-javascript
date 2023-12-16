import ClassRoom from './0-classroom';

/* declare class room objects with sizes */
const maxClassSizes = [19, 20, 34];
const classObjects = [];

/**
 * Initializes class room objects.
 * @returns {Array.<object>} An array of class room objects
 * with sizes from maxClassSizes array
 */
export default function initializeRooms() {
  /* create instances of class rooms */
  for (const size of maxClassSizes) {
    classObjects.push(new ClassRoom(size));
  }

  return classObjects;
}
