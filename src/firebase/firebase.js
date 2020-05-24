import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBYnd-Z_FvGtSBM3s-4GglJhQ0U6PTWlds",
  authDomain: "win-expensify-app.firebaseapp.com",
  databaseURL: "https://win-expensify-app.firebaseio.com",
  projectId: "win-expensify-app",
  storageBucket: "win-expensify-app.appspot.com",
  messagingSenderId: "591365617922",
  appId: "1:591365617922:web:8dec68513289e29942aa1b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Setup "expenses" with three items (description, note, amount, createdAt)

database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 976123498763
});

database.ref('expenses').push({
  description: 'Phone bill',
  note: '',
  amount: 5900,
  createdAt: 976123498763
});

database.ref('expenses').push({
  description: 'Food',
  note: '',
  amount: 1200,
  createdAt: 976123498763
});


// database.ref('notes/-Krll52aVDQ3X6dOtmS7').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// Setup data sub -> Andrew is a Software Developer at Amazon.

// Change the data and make sure it reprints

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Andrew Mead',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });