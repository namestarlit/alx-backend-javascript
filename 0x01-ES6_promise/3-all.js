import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];

  return Promise.all(promises).then((data) => {
    const [photoData, userData] = data;
    console.log(`${photoData.body} ${userData.firstName} ${userData.lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
