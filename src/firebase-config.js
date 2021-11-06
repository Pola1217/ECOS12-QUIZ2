const firebaseConfig = {
    apiKey: "AIzaSyCSwCRBrkUYyIqdcIManQqvavBhf292r20",
    authDomain: "ecos-12.firebaseapp.com",
    projectId: "ecos-12",
    storageBucket: "ecos-12.appspot.com",
    messagingSenderId: "1034037040624",
    appId: "1:1034037040624:web:0c53434607e43335483935",
    measurementId: "G-W7E10FXRW1"
  };

  export function getFirebaseConfig() {

    if(!firebaseConfig || !firebaseConfig.apiKey) {
        
        throw new Error("Firebase config error");
    }

    else {
        return firebaseConfig;
    }
}
