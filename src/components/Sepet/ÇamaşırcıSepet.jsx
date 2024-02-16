import { IonCard, IonCol, IonGrid, IonRow } from '@ionic/react'
import { Sepet } from '../../types/sepet'
import camasir_sepeti from '/camasir_sepeti.png'

import React from 'react'
import TalebeChip from './helper/TalebeChip'
import TarihChip from './helper/TarihChip'
/**
 *
 * @param {{sepet: Sepet}} param0
 */
export default function ÇamaşırcıSepet({ sepet }) {
	return (
		<IonCard className="ion-align-items-center">
			<IonGrid>
				<IonRow className="ion-justify-content-center ion-align-items-center">
					<IonCol size="5" push=".5">
						<img src={camasir_sepeti} width={'75%'} height={'75%'} />
					</IonCol>
					<IonCol size="7">
						<TarihChip tarih={sepet.tarih} />

						<TalebeChip uid={sepet.uid} />
					</IonCol>
				</IonRow>
			</IonGrid>
		</IonCard>
	)
}
