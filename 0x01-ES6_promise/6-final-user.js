import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signup = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  // return all settled promises regardless of their states
  return Promise.allSettled([signup, upload]).then((responses) => {
    const results = [];

    for (const res of responses) {
      if (res.status === 'fulfilled') {
        results.push({
          status: res.status,
          value: res.value,
        });
      } else {
        results.push({
          status: res.status,
          value: `Error: ${res.reason.message}`,
        });
      }
    }
  });
}
