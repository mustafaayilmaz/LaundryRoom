import { IonCard, IonChip, IonCol, IonGrid, IonRow } from '@ionic/react'

import camasir_sepeti from '/camasir_sepeti.png'

import React from 'react'
import { Sepet } from '../../types/sepet'
import KurutmaChip from './helper/KurutmaChip'
import TarihChip from './helper/TarihChip'
import YıkamaChip from './helper/YıkamaChip'

/**
 *
 * @param {{sepet: Sepet}} param0
 * @returns
 */
export default function TalebeSepet({ sepet }) {
	console.log(sepet)

	return (
		<IonCard className="ion-align-items-center">
			<IonGrid>
				<IonRow className="ion-justify-content-center ion-align-items-center">
					<IonCol size="5" push=".5">
						<img src={camasir_sepeti} width={'75%'} height={'75%'} />
					</IonCol>

					<IonCol size="7">
						<TarihChip tarih={new Date(sepet.tarih)} />

						<YıkamaChip yıkamaProgramı={sepet.yıkamaProgramı} derece={sepet.yıkamaSıcaklığı} />

						<KurutmaChip kurutmaProgramı={sepet.kurutmaProgramı} />

						<IonChip>{sepet.durum}</IonChip>
					</IonCol>
				</IonRow>
			</IonGrid>
		</IonCard>
	)
}
