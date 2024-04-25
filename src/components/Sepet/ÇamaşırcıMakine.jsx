import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonIcon, IonLabel, IonRow } from '@ionic/react'
import { personCircleOutline, timeOutline } from 'ionicons/icons'
import React from 'react'
import laundrymachine from '../../../public/laundrymachine.png'

export default function ÇamaşırcıMakine({ makineler }) {
	console.log(makineler)
	return (
		<IonCard className="ion-align-items-center">
			<IonRow className="ion-align-items-center ion-justify-content-center">
				<IonAvatar className="machine-avatar">
					<img src={laundrymachine} />
				</IonAvatar>
				<IonCardHeader>
					<IonCardTitle>{makineler.no} Numara</IonCardTitle>
					<IonCardSubtitle>Çamaşır Makinesi</IonCardSubtitle>
				</IonCardHeader>
			</IonRow>
			<IonCardContent>
				<IonRow className="ion-justify-content-center ion-align-items-center">
					<IonChip>
						<IonIcon icon={personCircleOutline}></IonIcon>
						<IonLabel>Çamaşır Sahibi</IonLabel>
					</IonChip>

					{/* <IonChip>
						<IonIcon icon={personCircleOutline}></IonIcon>
						<IonLabel>{makineler.no}</IonLabel>
					</IonChip> */}

					<IonChip>
						{/* TODO: Tahmini bitiş süresi */}
						<IonIcon icon={timeOutline}></IonIcon>
						<IonLabel>Tahmini Bitiş</IonLabel>
					</IonChip>

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
