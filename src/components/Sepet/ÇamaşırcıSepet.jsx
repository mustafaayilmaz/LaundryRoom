import { IonCard, IonCol, IonGrid, IonRow } from '@ionic/react'
import camasir_sepeti from '/camasir_sepeti.png'

import React from 'react'
import DurumChip from './helper/DurumChip' /**
 *
 * @param {{sepet: Sepet}} param0
 */
import TalebeChip from './helper/TalebeChip'
import TarihChip from './helper/TarihChip'
export default function ÇamaşırcıSepet({ sepet, setIsSepetOpen, setSelectedSepet }) {
	return (
		<IonCard
			className="ion-align-items-center"
			onClick={() => {
				setIsSepetOpen(true)
				setSelectedSepet(sepet)
			}}
		>
			<IonGrid>
				<IonRow className="ion-justify-content-center ion-align-items-center">
					<IonCol size="5" push=".5">
						<img src={camasir_sepeti} width={'75%'} height={'75%'} />
					</IonCol>
					<IonCol size="7">
						<TarihChip tarih={new Date(sepet.tarih)} />

						<TalebeChip uid={sepet.uid} />
						<DurumChip durum={sepet.durum} />
					</IonCol>
				</IonRow>
			</IonGrid>
		</IonCard>
	)
}
