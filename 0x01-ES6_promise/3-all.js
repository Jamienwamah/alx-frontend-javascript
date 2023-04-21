import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let firstName;
  let lastName;
  let body;

  const a = uploadPhoto();
  const b = createUser();

  return Promise.all([a, b]).then((list) => {
    body = list[0].body;
    firstName = list[1].firstName;
    lastName = list[1].lastName;
    console.log(`${body} ${firstName} ${lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
