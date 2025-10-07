
// ✅ Import Firebase modules directly from the CDN (browser-friendly)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ✅ Use your exact Firebase configuration (from your console)
const firebaseConfig = {
//    apiKey: "AIzaSyC_eUNac7NmbhZjjGBni-vhb1IiPeU-tFM",
 // authDomain: "learned-trilogy-470903-r4.firebaseapp.com",
 // projectId: "learned-trilogy-470903-r4",
 // storageBucket: "learned-trilogy-470903-r4.firebasestorage.app",
 // messagingSenderId: "764207091261",
 // appId: "1:764207091261:web:9290672f78910e1afce454",
 // measurementId: "G-RLFXHE8XEJ"
};

// ✅ Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Example: Add data
async function addUserData() {
  await addDoc(collection(db, "users"), {
    name: "Pavan",
    role: "Admin",
    createdAt: new Date()
  });
  console.log("✅ Data added to Firestore!");
}

// Example: Read data
async function readUserData() {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
  });
}

addUserData();
readUserData();



