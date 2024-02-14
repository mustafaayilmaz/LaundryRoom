import { IonItem, IonLabel, IonList } from '@ionic/react'
import React from 'react'
import Authorized from '../layouts/Authorized'

export const Queue = () => {
	return (
		<Authorized>
			<IonList inset={true}>
				<IonItem>
					<IonLabel>Pokémon Yellow</IonLabel>
				</IonItem>
				<IonItem>
					<IonLabel>Mega Man X</IonLabel>
				</IonItem>
				<IonItem>
					<IonLabel>The Legend of Zelda</IonLabel>
				</IonItem>
				<IonItem>
					<IonLabel>Pac-Man</IonLabel>
				</IonItem>
				<IonItem>
					<IonLabel>Super Mario World</IonLabel>
				</IonItem>
			</IonList>
		</Authorized>
	)
}

export default Queue
