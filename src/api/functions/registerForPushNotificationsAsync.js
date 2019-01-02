import { Permissions, Notifications } from 'expo';
// const PUSH_ENDPOINT = 'https://your-server.com/users/push-token';

export default async function() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // ios won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // stop here if the user did not grant permissions
  if (finalStatus === 'granted') {
    // get the token that uniquely identifies this device
    const token = await Notifications.getExpoPushTokenAsync();

    return token;

    // POST the token to your backend server from where you can retrieve it to send push notifications.
    // return fetch(PUSH_ENDPOINT, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     token: {
    //       value: token
    //     },
    //     user: {
    //       username: 'caleb'
    //     }
    //   })
    // });
  }

  return null;
}
