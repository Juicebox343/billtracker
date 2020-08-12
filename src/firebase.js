import firebase from "firebase";
// import 'firebase/auth';
// import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDz_YSAmazGf7Hai7aincTkGamVTa4xMZ4",
    authDomain: "billtracker-5f471.firebaseapp.com",
    databaseURL: "https://billtracker-5f471.firebaseio.com",
    projectId: "billtracker-5f471",
    storageBucket: "billtracker-5f471.appspot.com",
    messagingSenderId: "511037953921",
    appId: "1:511037953921:web:111534a1e265ceb071ba80",
    measurementId: "G-GH6W1Q2Y46"
  };

// firebase.initializeApp(config);

export default firebase;

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const googleProvider = new firebase.auth.GoogleAuthProvider();

// export const signInWithGoogle = () => {
//     auth.signInWithPopup(googleProvider);
// }

// export const generateUserDocument = async(user, additionalData) =>{
//     if(!user) return;
//     const userRef = firestore.doc(`users/${user.uid}`);
//     const snapshot = await userRef.get();

//     if(!snapshot.exists){
//         const {email, displayName} = user;
//         try{
//             await userRef.set({
//                 displayName,
//                 email,
//                 ...additionalData
//             });
//         } catch (error) {
//             console.error('Error creating document', error);
//         }
//     }
//     return getUserDocument(user.uid);
// }

// const getUserDocument = async uid =>{
//     if (!uid) return null;
//     try{
//         const userDocument = await firestore.doc(`users/${uid}`).get();
//         return {
//             uid, 
//             ...userDocument.data()
//         };
//     } catch (error) {
//         console.error("Error fetching user", error);
//     }
// }