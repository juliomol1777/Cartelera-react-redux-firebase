const functions = require('firebase-functions');
const admin= require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
});

const createNotification = (notification => {
    return admin.firestore().Collection('notifications')
        .add(notification)
        .then(doc => console.log('notificacion agregada', doc));
})

exports.projectCreated = functions.firestore
    .document('projects/{projectId}')
    .onCreate(doc => {
        const project = doc.data();
        const notification = {
            content: 'Proyecto nuevo agregado',
            user: '${project.autorNombre} ${project.autorApellido}',
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification)
    })

exports.userJoined = functions.auth.user()
    .onCreate(user => {
        return admin.firestore().Collection('users')
            .doc(user.uid).get().then(doc => {

                const newUser = doc.data();
                const notification = {
                    content: 'Joined the party',
                    user: '${newUser.autorNombre} ${newUser.autorApellido}',
                    time: admin.firestore.FieldValue.serverTimestamp()
                }
                return createNotification(notification) 
            })
    })