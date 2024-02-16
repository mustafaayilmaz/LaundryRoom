import { IonChip, IonIcon, IonLabel } from '@ionic/react'
import { apertureOutline, closeOutline } from 'ionicons/icons'

export default function KurutmaChip({ kurutmaVar, kurutmaProgramı }) {
	return (
		<IonChip>
			<IonIcon icon={apertureOutline}></IonIcon>
			{kurutmaVar ? (
				<IonLabel>{kurutmaProgramı.label.split('(')[0]}</IonLabel>
			) : (
				<>
					<IonLabel>Kurutma Yok</IonLabel>
					<IonIcon icon={closeOutline} className="ion-padding-start"></IonIcon>
				</>
			)}
		</IonChip>
	)
}
