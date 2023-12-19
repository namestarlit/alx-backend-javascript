/* MajorCredits interface */
interface MajorCredits {
	credits: number;
	brand: "major";
}

/* MinoreCredits interface */
interface MinorCredits {
	credits: number;
	brand: "minor";
}

/* sumMajoreCredits function */
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
  return subject1.credits + subject2.credits;
}

/* sumMinoreCredits function */
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
  return subject1.credits + subject2.credits;
}
