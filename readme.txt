curl -X POST -H "Authorization: key=AAAAqYE3X44:APA91bFbb86pN2UHhErWVwLeZThxOjUd7qZNUZGJ05IWmvv1Qe7sQqCfmQKUy1FprI9BWUfAXyGOyT76bI6mj3JlfDCopeH3Jw1pekRKkUNGzf-Xhhvkk1-YgInkc-9oRuKnH9sBaSkz" -H "Content-Type: application/json" -d '{
  "notification": {
    "title": "PWA Starter",
    "body": "Welcome",
  },
  "to": "fZ3QduISmz8:APA91bHrx7EHtMukPeSbgwQNI3iIHtpErMK9LDX0GS-mYfMxOGk5wqzry5y-K6-FLBkjE2Y28qTfUxumbQnDo2FoyhtPTeJ0FxA4oZtmvOPw9jyIXvtX4eRdo4QOuxNMPCa6WwujvmvU"
}' "https://fcm.googleapis.com/fcm/send"