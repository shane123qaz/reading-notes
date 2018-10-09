# PWA
## How to use firebase
### Init firebase project
- firebase init hosting
    - create new project / using default project
- firebase use --add
- firebase deploy

### Update firebase project
- firebase serve
- firebase deploy

## Test push notification
1. Get firebase project's server key (Settings -> Cloud Messaging -> Server Key).
2. Copy the `token` we get from `firebase.messaging().requestPermission`.
3. Test push notification from the command line
    ```
    curl -X POST -H "Authorization: key=YOUR_SERVER_KEY" -H "Content-Type: application/json" -d '{
    "notification": {
        "title": "Hello World PWA",
        "body": "Hi",
    },
    "to": "DEVICE_REGISTRATION_TOKEN"
    }' "https://fcm.googleapis.com/fcm/send"
    ```
