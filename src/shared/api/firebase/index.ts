import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const {
    VITE_API_KEY,
    VITE_AUTH_DOMAIN,
    VITE_PROJECT_ID,
    VITE_STORAGE_BUCKET,
    VITE_MESSAGING_SENDER_ID,
    VITE_APP_ID,
} = import.meta.env;

const firebaseConfig = {
    apiKey: VITE_API_KEY,
    authDomain: VITE_AUTH_DOMAIN,
    projectId: VITE_PROJECT_ID,
    storageBucket: VITE_STORAGE_BUCKET,
    messagingSenderId: VITE_MESSAGING_SENDER_ID,
    appId: VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getCollection = async <T>(name: string) => {
    const statuses: T[] = [];
    const querySnapshot = await getDocs(collection(db, name));
    querySnapshot.forEach((doc) =>
        statuses.push({ id: doc.id, ...doc.data() } as T)
    );

    return statuses;
};

export const getItem = async <T>(collectionName: string, itemId: string) => {
    const docRef = doc(db, collectionName, itemId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) return docSnap.data() as T;

    throw new Error("No such document!");
};
