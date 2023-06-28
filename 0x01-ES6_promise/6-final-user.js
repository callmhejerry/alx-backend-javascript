import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const allPromises = [signUpUser(firstName, lastName), uploadPhoto(filename)];
  return Promise.allSettled(allPromises).then((values) => {
    const results = values.map((promise) => {
      if (promise.status === 'fulfilled') {
        return {
          status: promise.status,
          value: promise.value,
        };
      }
      return {
        status: promise.status,
        value: `${promise.reason}`,
      };
    });
    return results;
  });
}
