import fb from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { getDurationFromProgram, getDurationFromProgramKurutma } from '../../types/programlar'
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

	async çamaşırMakinesineAta(sepetId, çamaşırMakinesiId) {
		try {
			const sepetRef = this.firestore.collection('sepetler').doc(sepetId)
			const sepet = (await sepetRef.get()).data()
			await sepetRef.update({ durum: 'Çamaşır Makinesinde' })

			await this.firestore
				.collection('çamaşırMakineleri')
				.doc(çamaşırMakinesiId)
				.update({ aktifSepetId: sepetId, durum: 'Çalışıyor', tahminiBitiş: Date.now() + getDurationFromProgram(sepet.yıkamaProgramı) })
		} catch (error) {
			throw error
		}
	}

	async kurutmaMakinesineAta(sepetId, kurutmaMakinesiId) {
		try {
			const sepetRef = this.firestore.collection('sepetler').doc(sepetId)
			const sepet = (await sepetRef.get()).data()
			await sepetRef.update({ durum: 'Kurutma Makinesinde' })
			//Buraya geldiği çamaşır makinesini boşaltacak fonksiyon eklenecek

			await this.firestore
				.collection('kurutmaMakineleri')
				.doc(kurutmaMakinesiId)
				.update({ aktifSepetId: sepetId, durum: 'Çalışıyor', tahminiBitiş: Date.now() + getDurationFromProgramKurutma(sepet.kurutmaProgramı) })
		} catch {}
	}
}

const firebaseClient = new Firebase()

export default firebaseClient
