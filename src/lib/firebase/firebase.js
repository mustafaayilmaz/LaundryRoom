import fb from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { firebaseConfig } from './config'

fb.initializeApp(firebaseConfig)

class Firebase {
	constructor() {
		this.firestore = fb.firestore()
	}
}
