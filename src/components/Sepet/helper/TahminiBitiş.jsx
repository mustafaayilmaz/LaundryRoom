import { IonChip, IonIcon, IonLabel } from '@ionic/react'
import { timeOutline } from 'ionicons/icons'

export default function TahminiBitişChip({ tarih }) {
	return (
		<IonChip>
			<IonIcon icon={timeOutline}></IonIcon>
			<IonLabel>Tahmini Bitiş {tarih.toLocaleTimeString()}</IonLabel>
		</IonChip>
	)
}
