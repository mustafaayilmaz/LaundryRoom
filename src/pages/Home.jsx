import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonIcon, IonLabel, IonRow, IonSegment, IonSegmentButton } from '@ionic/react'
import { personCircleOutline, timeOutline } from 'ionicons/icons'
import { useState } from 'react'
import laundrymachine from '../../public/laundrymachine.png'
import Authorized from '../layouts/Authorized'
export const Home = () => {
	const [selected, setSelected] = useState('çamaşır')

	return (
		<Authorized>
			<IonSegment value="çamaşır" onIonChange={e => setSelected(e.detail.value)}>
				<IonSegmentButton value="çamaşır">
					<IonLabel>Çamaşır Makinesi</IonLabel>
				</IonSegmentButton>
				<IonSegmentButton value="kurutma">
					<IonLabel>Kurutma Makinesi</IonLabel>
				</IonSegmentButton>
			</IonSegment>

			{selected === 'çamaşır' ? <Makine isim={'Çamaşır'} /> : <Makine isim={'Kurutma'} />}
		</Authorized>
	)
}

export default Home

function Makine({ isim }) {
	return (
		<IonCard className="ion-align-items-center">
			<IonRow className="ion-align-items-center ion-justify-content-center">
				<IonAvatar className="machine-avatar">
					<img src={laundrymachine} />
				</IonAvatar>
				<IonCardHeader>
					<IonCardTitle>5 Numara</IonCardTitle>
					<IonCardSubtitle>{isim} Makinesi</IonCardSubtitle>
				</IonCardHeader>
			</IonRow>
			<IonCardContent>
				<IonRow className="ion-justify-content-center ion-align-items-center">
					<IonChip>
						<IonIcon icon={personCircleOutline}></IonIcon>
						<IonLabel>Çamaşır Sahibi</IonLabel>
					</IonChip>
					<IonChip>
						<IonIcon icon={timeOutline}></IonIcon>
						<IonLabel>19:00</IonLabel>
					</IonChip>
				</IonRow>
			</IonCardContent>
		</IonCard>
	)
}
