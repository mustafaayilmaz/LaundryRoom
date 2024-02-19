import { IonChip, IonIcon } from '@ionic/react'
import { checkmarkOutline, closeOutline } from 'ionicons/icons'

export default function VarYokChip({ varMı }) {
	return varMı ? (
		<IonChip color="success" style={{ paddingLeft: 0 }}>
			<IonIcon icon={checkmarkOutline}></IonIcon>
		</IonChip>
	) : (
		<IonChip color="danger" style={{ paddingLeft: 0 }}>
			<IonIcon icon={closeOutline}></IonIcon>
		</IonChip>
	)
}
