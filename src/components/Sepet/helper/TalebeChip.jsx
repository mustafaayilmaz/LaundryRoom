import { IonChip, IonIcon, IonLabel } from '@ionic/react'
import { personOutline } from 'ionicons/icons'

import React from 'react'
export default function TalebeChip({ uid }) {
	return (
		<IonChip>
			<IonIcon icon={personOutline}></IonIcon>
			<IonLabel>Talebe No: {uid}</IonLabel>
		</IonChip>
	)
}
