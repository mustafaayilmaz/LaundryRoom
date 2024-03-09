import { IonAvatar, IonCard, IonCardContent, IonChip, IonIcon, IonLabel, IonRow } from '@ionic/react'
import { personCircleOutline } from 'ionicons/icons'
import React from 'react'
import laundrymachine from '../../../public/laundrymachine.png'

export default function TalebeMakine({ makineler }) {
	console.log(makineler)
	return (
		<IonCard className="ion-align-items-center">
			<IonRow className="ion-align-items-center ion-justify-content-center">
				<IonAvatar className="machine-avatar">
					<img src={laundrymachine} />
				</IonAvatar>
			</IonRow>
			<IonCardContent>
				<IonRow className="ion-justify-content-center ion-align-items-center">
					<IonChip>
						<IonIcon icon={personCircleOutline}></IonIcon>
						<IonLabel>Program</IonLabel>
					</IonChip>

					<IonChip>
						<IonIcon icon={personCircleOutline}></IonIcon>
						<IonLabel>Derece</IonLabel>
					</IonChip>
				</IonRow>
			</IonCardContent>
		</IonCard>
	)
}
