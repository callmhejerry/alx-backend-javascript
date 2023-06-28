/* eslint-disable no-console */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((values) => {
    const [first, second] = values;
    const { body } = first;
    const { firstName } = second;
    const { lastName } = second;

    console.log(`${body} ${firstName} ${lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
