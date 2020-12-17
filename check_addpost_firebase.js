import firebase from 'firebase';
import "@firebase/auth";
import {Text, StyleSheet} from 'react-native';

const firebaseConfig = {
    apiKey: "AIzaSyC4QMPglj6Kj_zU9yMJdrs0qScEylISs0E",
    authDomain: "bmsce-placements-83244.firebaseapp.com",
    projectId: "bmsce-placements-83244",
    storageBucket: "bmsce-placements-83244.appspot.com",
    messagingSenderId: "91578633765",
    appId: "1:91578633765:web:8b5da4b9348247207bf9cc",
    measurementId: "G-G5LCKGMLMR"
  };

 class AddingPost_firebase{
     
    constructor()
     {
        try {
            firebase.initializeApp(firebaseConfig);
          } catch (e) {
              console.log("unable to initialize firebase inside AddingPost_firebase");
          }
     }

     addpost = async({text, localUri}) => {
         const remoteUri = await this.uploadPhotoAsync(localUri)

        return new Promise((res,rej) =>
        {
            this.firestore.collection("Experiences").add({
                //uid: this.uid,
                //timestamp: this.timestamp,
                //branch:this.branch,
                //name:this.name,
                company_name:this.company_name,
                text:this.text,
                title:this.title,
                image: remoteUri
            })
            .then(ref => {
                res(ref)
            })
            .catch(error => {
                rej(error);
            });
        });
     };

     uploadPhotoAsync = async uri => {
         const path = 'Upload pictures/${this.uid}/${Date.now()}.jpg';

         return new Promise(async(res,rej) =>
         {
             const response = await fetch(uri);
             const file = await response.blob();

             let upload = firebase.storage().ref(path).put(file);

             upload.on(
                 "state_changed",
                 snapshot => {},
                 err => {
                     rej(err);
                 },
                 async() => {
                     const url = await upload.snapshot.ref.getDownloadURL();
                     res(url);
                    
                     
                 }
             )
         })
     }

     get firestore()
     {
         return firebase.firestore();
     }

     get uid()
     {
         return (firebase.auth().currentUser || {}).uid;
     }

     get timestamp()
     {
         return Date.now();
     }
 }

 AddingPost_firebase.shared = new AddingPost_firebase();

 export default AddingPost_firebase;
