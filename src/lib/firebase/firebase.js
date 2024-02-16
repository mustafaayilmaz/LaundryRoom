import fb from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { firebaseConfig } from './config'

fb.initializeApp(firebaseConfig)

class Firebase {
	constructor() {
		this.firestore = fb.firestore()
		this.auth = fb.auth()
	}

	async addDocument(collection, data) {
		try {
			const docRef = await this.firestore.collection(collection).add(data)
			return { id: docRef.id, ref: docRef }
		} catch (error) {
			throw error
		}
	}

	async çamaşırlarıGetir(uid) {
		try {
			const snapshot = await this.firestore.collection(collection).where('uid', '==', uid).get()
			return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
		} catch (error) {
			console.log(error)
		}
	}
}

const firebaseClient = new Firebase()

export default firebaseClient
