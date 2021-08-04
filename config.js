import * as firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    
        apiKey: "AIzaSyAphi_Juyydx3XptGNprvlWd_Bpnq8rHCU",
        authDomain: "bedtimestories-1.firebaseapp.com",
        projectId: "bedtimestories-1",
        storageBucket: "bedtimestories-1.appspot.com",
        messagingSenderId: "185972541125",
        appId: "1:185972541125:web:5d9a3711d801bfc7efd2ac"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();