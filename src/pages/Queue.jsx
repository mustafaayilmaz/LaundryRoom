import { IonFab, IonFabButton, IonIcon, IonLabel, IonSegment, IonSegmentButton } from '@ionic/react'
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
	const [sepetler, loading, error, snapshot, reload] = useCollectionData(firebaseClient.firestore.collection('sepetler'))

	const [isOpen, setIsOpen] = useState(false)
	const [selectedSepet, setSelectedSepet] = useState({})
	const [isSepetOpen, setIsSepetOpen] = useState(false)
	const [selected, setSelected] = useState('sırada')

	if (userLoading) {
		return <Loading />
	}
	//Çamaşırcının queue sayfasında segment çoklu olacak
	//Talebede 2 seçenekli olacak
	return (
		<Authorized>
			<IonSegment value="sırada" className="ion-padding-top" onIonChange={e => setSelected(e.detail.value)}>
				<IonSegmentButton value="sırada">
					<IonLabel>Sırada Bekleyen</IonLabel>
				</IonSegmentButton>
				<IonSegmentButton value="bitti">
					<IonLabel>Biten</IonLabel>
				</IonSegmentButton>
			</IonSegment>
			{user.displayName === 'kullanıcı'
				? snapshot &&
					snapshot.docs.map((d, i) => {
						if (d.data().uid === user.uid) {
							return <TalebeSepet key={i} sepet={{ id: d.id, ...d.data(), selected: d.selected }} />
						}
					})
				: snapshot && snapshot.docs.map((d, i) => <ÇamaşırcıSepet key={i} sepet={{ id: d.id, ...d.data() }} setIsSepetOpen={setIsSepetOpen} setSelectedSepet={setSelectedSepet} />)}

			<ÇamaşırcıSepetModal sepet={selectedSepet} isSepetOpen={isSepetOpen} setIsSepetOpen={setIsSepetOpen} />

			<IonFab slot="fixed" vertical="bottom" horizontal="end">
				<IonFabButton onClick={() => setIsOpen(true)}>
					<IonIcon icon={addOutline}></IonIcon>
				</IonFabButton>
			</IonFab>
			<ÇamaşırTalepFormu isOpen={isOpen} setIsOpen={setIsOpen} />
		</Authorized>
	)
}

export default Queue
