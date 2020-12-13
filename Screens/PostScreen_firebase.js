import firebase from 'firebase';

const firebaseConfig = 
{ 
    apiKey: "AIzaSyByhSbCr0uCKEMf7SUe5EjiV170O2LGFIs",
  authDomain: "bmsce-placements-af860.firebaseapp.com",
  databaseURL: "https://bmsce-placements-af860.firebaseio.com",
  projectId: "bmsce-placements-af860",
  storageBucket: "bmsce-placements-af860.appspot.com",
  messagingSenderId: "128144094885",
  appId: "1:128144094885:web:55987fac34050c02213f4c",
  measurementId: "G-C7R3HV9G5R"
 }

 class PostScreen_firebase{
     
    constructor()
     {
         firebase.intializeApp(firebaseConfig);
     }

     addpost = async({text, localUri}) => {
         const remoteUri = await this.uploadPhotoAsync(localUri)

        return new Promise((res,rej) =>
        {
            this.firestore.collection("senior_experience").add({
                text,
                uid: this.uid,
                timestamp: this.timestamp,
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

 PostScreen_firebase.shared = new PostScreen_firebase();

 export default PostScreen_firebase;
