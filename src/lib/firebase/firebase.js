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

			await this.çamaşırMakinesiniBoşalt(sepetId)

			await this.firestore
				.collection('kurutmaMakineleri')
				.doc(kurutmaMakinesiId)
				.update({ aktifSepetId: sepetId, durum: 'Çalışıyor', tahminiBitiş: Date.now() + getDurationFromProgramKurutma(sepet.kurutmaProgramı) })
		} catch (error) {
			throw error
		}
	}

	async çamaşırMakinesiniBoşalt(sepetId) {
		const ref = this.firestore.collection('çamaşırMakineleri')
		const snapshot = await ref.where('aktifSepetId', '==', sepetId).get()

		const makine = snapshot.docs.map(m => {
			return {
				id: m.id,
				...m.data()
			}
		})

		if (makine.length === 0) return

		await ref.doc(makine[0].id).update({
			aktifSepetId: '',
			durum: 'Bekliyor',
			tahminiBitiş: ''
		})
	}

	async kurutmaMakinesiniBoşalt(sepetId) {
		try {
			const ref = this.firestore.collection('kurutmaMakineleri')
			const snapshot = await ref.where('aktifSepetId', '==', sepetId).get()

			const makine = snapshot.docs.map(m => {
				return {
					id: m.id,
					...m.data()
				}
			})

			if (makine.length === 0) return

			await ref.doc(makine[0].id).update({
				aktifSepetId: '',
				durum: 'Bekliyor',
				tahminiBitiş: ''
			})
		} catch (error) {
			throw error
		}
	}

	async çamaşırıBitir(sepetId) {
		try {
			const sepetRef = this.firestore.collection('sepetler').doc(sepetId)
			const sepet = (await sepetRef.get()).data()

			if (sepet.kurutmaProgramı !== '') {
				await this.kurutmaMakinesiniBoşalt(sepetId)
			} else {
				await this.çamaşırMakinesiniBoşalt(sepetId)
			}

			await sepetRef.update({ durum: 'Bitti' })
		} catch (error) {
			throw error
		}
	}
	async aktifSepetleriGetir(userId){
		try{ 
			const ref = this.firestore.collection("sepetler")
			const snapshot = ref.where("user.uid","==","userId").get()

			const sepetler = (await snapshot).docs.map(m => {
				return {
					id: m.id,
					...m.data()
				}
			})

		}catch (error){
			throw(error)
		}

	}
}

const firebaseClient = new Firebase()

export default firebaseClient
