import { IonChip, IonIcon, IonLabel } from '@ionic/react'
import { thermometerOutline, waterOutline } from 'ionicons/icons'

export default function YıkamaChip({ yıkamaProgramı, derece }) {
	return (
		<IonChip>
			<IonIcon icon={waterOutline}></IonIcon>
			<IonLabel>{yıkamaProgramı}</IonLabel>
			<IonIcon icon={thermometerOutline} className="ion-padding-start"></IonIcon>
			<IonLabel>{derece}°</IonLabel>
		</IonChip>
	)
}
