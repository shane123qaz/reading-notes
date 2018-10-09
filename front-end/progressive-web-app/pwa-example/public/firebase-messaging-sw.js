importScripts("https://www.gstatic.com/firebasejs/5.5.3/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.5.3/firebase-messaging.js");

const config = {
    apiKey: "AIzaSyBmAeRMlQeDNoY5g4k0WN3RMml84g-fT1E",
    authDomain: "pwa-example-id.firebaseapp.com",
    databaseURL: "https://pwa-example-id.firebaseio.com",
    projectId: "pwa-example-id",
    storageBucket: "pwa-example-id.appspot.com",
    messagingSenderId: "88502759654"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    const title = 'Hello World';
    const options = {
        body: payload.data.body
    };
    return self.registration.showNotification(title, options);
});