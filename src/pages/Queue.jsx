import { IonFab, IonFabButton, IonIcon } from '@ionic/react'
import { addOutline } from 'ionicons/icons'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import TalebeSepet from '../components/Sepet/TalebeSepet'
import ÇamaşırcıSepet from '../components/Sepet/ÇamaşırcıSepet'
import ÇamaşırcıSepetModal from '../components/Sepet/ÇamaşırcıSepetModal'
import ÇamaşırTalepFormu from '../components/TalepFormu/ÇamaşırTalepFormu'
import Authorized from '../layouts/Authorized'
import firebaseClient from '../lib/firebase/firebase'
import Loading from './Loading'

export const Queue = () => {
	const [user, userLoading, userError] = useAuthState(firebaseClient.auth)
	const [sepetler, loading, error, snapshot, reload] = useCollectionData(firebaseClient.firestore.collection('sepetler').where('uid', '==', user.uid))

	const [isOpen, setIsOpen] = useState(false)
	const [selectedSepet, setSelectedSepet] = useState({})
	const [isSepetOpen, setIsSepetOpen] = useState(false)

	if (userLoading) {
		return <Loading />
	}

	return (
		<Authorized>
			{sepetler && sepetler.map((sepet, i) => <TalebeSepet key={i} sepet={sepet} />)}

			<p>Çamaşırcı</p>

			{sepetler && sepetler.map((sepet, i) => <ÇamaşırcıSepet key={i} sepet={sepet} setIsSepetOpen={setIsSepetOpen} setSelectedSepet={setSelectedSepet} />)}

			<ÇamaşırcıSepetModal sepet={selectedSepet} isSepetOpen={isSepetOpen} setIsSepetOpen={setIsSepetOpen} />

			<IonFab vertical="bottom" horizontal="end">
				<IonFabButton onClick={() => setIsOpen(true)}>
					<IonIcon icon={addOutline}></IonIcon>
				</IonFabButton>
			</IonFab>
			<ÇamaşırTalepFormu isOpen={isOpen} setIsOpen={setIsOpen} />
		</Authorized>
	)
}

export default Queue
