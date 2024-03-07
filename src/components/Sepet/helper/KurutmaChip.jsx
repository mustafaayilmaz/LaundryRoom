import { IonChip, IonIcon, IonLabel } from '@ionic/react'
import { apertureOutline, closeOutline } from 'ionicons/icons'

export default function KurutmaChip({ kurutmaProgramı }) {
	return (
		<IonChip>
			<IonIcon icon={apertureOutline}></IonIcon>
			{kurutmaProgramı ? (
				<IonLabel>{kurutmaProgramı.split('(')[0]}</IonLabel>
			) : (
				<>
					<IonLabel>Kurutma Yok</IonLabel>
					<IonIcon icon={closeOutline}></IonIcon>
				</>
			)}
		</IonChip>
	)
}
