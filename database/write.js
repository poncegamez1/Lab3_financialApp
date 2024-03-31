import { collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from './config'

export async function save(data) {
    try {
        const dbCollection = collection(db, 'transactions')
        const docRef = await addDoc(dbCollection, data);
        return docRef.id
      } catch (e) {
        return null
      }
}