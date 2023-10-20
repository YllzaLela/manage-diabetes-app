import initializeapp from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

//Importing the services I might want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";


//initialize firebase
const firebaseConfig = {
    apiKey: "AIzaSyDXL2sKtoj4e2TA5sxNLcmASxIMiLzmWZg",
    authDomain: "manage-diabetes-app.firebaseapp.com",
    projectId: "manage-diabetes-app",
    storageBucket: "manage-diabetes-app.appspot.com",
    messagingSenderId: "227080682169",
    appId: "1:227080682169:web:84ca196746cb8ec3243968",
    measurementId: "G-Z90135DKJW"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);