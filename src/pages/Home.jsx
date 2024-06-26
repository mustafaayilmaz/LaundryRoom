import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import TalebeMakine from '../components/Sepet/TalebeMakine'
import ÇamaşırcıMakine from '../components/Sepet/ÇamaşırcıMakine'
import Authorized from '../layouts/Authorized'
import firebaseClient from '../lib/firebase/firebase'
import Loading from './Loading'

export const Home = () => {
	const [user, userLoading, userError] = useAuthState(firebaseClient.auth)
	const [selected, setSelected] = useState('çamaşırMakineleri')
	const [makineler, loading, error, snapshot, reload] = useCollectionData(firebaseClient.firestore.collection(selected))

	if (userLoading) {
		return <Loading />
	}
	if (loading) {
		return <Loading />
	}
	if (!makineler || error) {
		return console.log('Errorrr')
	}
	if (!user || userError) {
		return console.log('Error')
	}

	return (
		<Authorized>
			<IonSegment value={selected}>
				<IonSegmentButton value="çamaşırMakineleri" onClick={() => setSelected('çamaşırMakineleri')}>
					<IonLabel>Çamaşır Makinesi</IonLabel>
				</IonSegmentButton>
				<IonSegmentButton value="kurutmaMakineleri" onClick={() => setSelected('kurutmaMakineleri')}>
					<IonLabel>Kurutma Makinesi</IonLabel>
				</IonSegmentButton>
			</IonSegment>

			{user.displayName === 'kullanıcı' &&
				snapshot &&
				snapshot.docs.map((d, i) => {
					if (d.data().uid !== user.uid) {
						return <>{selected === 'çamaşırMakineleri' ? <TalebeMakine key={i} makineler={{ ...d.data(), selected: selected }} /> : <TalebeMakine key={i} makineler={{ ...d.data(), selected: selected }} />}</>
					}
				})}
			{user.displayName !== 'kullanıcı' &&
				snapshot &&
				snapshot.docs.map((d, i) => {
					if (d.data().uid !== user.uid) {
						return <>{selected === 'çamaşırMakineleri' ? <ÇamaşırcıMakine key={i} makineler={{ ...d.data(), selected: selected }} /> : <ÇamaşırcıMakine key={i} makineler={{ ...d.data(), selected: selected }} />}</>
					}
				})}
		</Authorized>
	)
}

export default Home
