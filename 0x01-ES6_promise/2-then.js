export default function handleResponseFromAPI(promise) {
  promise.resolve({
    status: 200,
    body: 'success',
  }).then(() => { console.log('Got a response from the API'); }).catch(() => Error());
}