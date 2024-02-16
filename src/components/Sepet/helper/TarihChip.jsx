import { IonChip, IonIcon, IonLabel } from '@ionic/react'
import { calendarClearOutline, timeOutline } from 'ionicons/icons'

export default function TarihChip({ tarih }) {
	return (
		<IonChip>
			<IonIcon icon={calendarClearOutline}></IonIcon>
			<IonLabel>{tarih.toLocaleDateString()}</IonLabel>
			<IonIcon icon={timeOutline} style={{ paddingLeft: '10px', paddingRight: '2px' }}></IonIcon>
			<IonLabel>{tarih.toLocaleTimeString()}</IonLabel>
		</IonChip>
	)
}
