importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');

var config = {
  apiKey: "AIzaSyAJ7hzCjBcw2bgUC4j0Ky6llDXoJIorGuw",
  authDomain: "pwa-start.firebaseapp.com",
  databaseURL: "https://pwa-start.firebaseio.com",
  projectId: "pwa-start",
  storageBucket: "",
  messagingSenderId: "728017362830"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
	const title = 'PWA Starter';
	const options = {
		body: payload.data.body
	};
	return self.registration.showNotification(title, options);
});