import { IonChip, IonItem, IonLabel, IonList } from '@ionic/react'
import React from 'react'

import Authorized from '../layouts/Authorized'

export const Clothes = () => {
	return (
		<Authorized>
			<IonList inset={true}>
				<IonItem>
					<IonLabel>Tarih n. Sepet</IonLabel>
					<IonChip color="warning">Sırada bekliyor</IonChip>
				</IonItem>
				<IonItem>
					<IonLabel>Tarih n. Sepet</IonLabel>
					<IonChip color="medium">1. Makinede</IonChip>
				</IonItem>
				<IonItem>
					<IonLabel>Tarih n. Sepet</IonLabel>
					<IonChip color="success">1. Kurutmada</IonChip>
				</IonItem>
				<IonItem>
					<IonLabel>Tarih n. Sepet</IonLabel>
					<IonChip color="danger">Bitti rafa konuldu</IonChip>
				</IonItem>
				<IonItem>
					<IonLabel>Tarih n. Sepet</IonLabel>
					<IonChip>Durum</IonChip>
				</IonItem>
			</IonList>
		</Authorized>
	)
}

export default Clothes
