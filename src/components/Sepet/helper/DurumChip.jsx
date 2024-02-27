import { IonChip, IonIcon, IonLabel } from '@ionic/react'
import { trendingUpOutline } from 'ionicons/icons'
import React from 'react'

export default function DurumChip({ durum }) {
	return (
		<IonChip>
			<IonIcon icon={trendingUpOutline}></IonIcon>
			<IonLabel>{durum}</IonLabel>
		</IonChip>
	)
}
