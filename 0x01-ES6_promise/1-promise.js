export default function getFullResponseFromAPI(success) {
  const err = Error('the fake API is not working currently');
  if (success === true) {
    return Promise.resolve({
      status: 200,
      body: 'Success',
    });
  }
  return Promise.reject(err);
}
