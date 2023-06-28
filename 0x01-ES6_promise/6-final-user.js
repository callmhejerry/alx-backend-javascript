import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, filename) {
    const allPromises = [signUpUser(firstName, lastName), uploadPhoto(filename)];
    const results = [];
    for (const promise of allPromises) {
        promise.then((value) => {
            results.push({
                value,
            });
        });
        promise.catch((value) => {
            results.push({
                value,
            });
        });
    }

    return results;
}
