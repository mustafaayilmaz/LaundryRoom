import { IonCard, IonCol, IonGrid, IonRow } from '@ionic/react'

import React from 'react'
import { Sepet } from '../../types/sepet'
import DurumChip from './helper/DurumChip'
import KurutmaChip from './helper/KurutmaChip'
import TarihChip from './helper/TarihChip'
import YıkamaChip from './helper/YıkamaChip'

/**
 *
 * @param {{sepet: Sepet}} param0
 * @returns
 */
export default function TalebeSepet({ sepet, selected }) {
	return (
		<>
			{selected === 'Bitti' && (
				<>
					{sepet.durum === 'Bitti' && (
						<IonCard className="ion-align-items-center">
							<IonGrid>
								<IonRow className="ion-justify-content-center ion-align-items-center">
									<IonCol size="5" push=".5">
										<img src={sepet.image} width={'75%'} height={'75%'} />
									</IonCol>

									<IonCol size="7">
										<TarihChip tarih={new Date(sepet.tarih)} />

										<YıkamaChip yıkamaProgramı={sepet.yıkamaProgramı} derece={sepet.yıkamaSıcaklığı} />

										<KurutmaChip kurutmaProgramı={sepet.kurutmaProgramı} />

										<DurumChip durum={sepet.durum} />
									</IonCol>
								</IonRow>
							</IonGrid>
						</IonCard>
					)}
				</>
			)}
			{selected === 'Sırada' && (
				<>
					{sepet.durum === 'Sırada' && (
						<IonCard className="ion-align-items-center">
							<IonGrid>
								<IonRow className="ion-justify-content-center ion-align-items-center">
									<IonCol size="5" push=".5">
										<img src={sepet.image} width={'75%'} height={'75%'} />
									</IonCol>

									<IonCol size="7">
										<TarihChip tarih={new Date(sepet.tarih)} />

										<YıkamaChip yıkamaProgramı={sepet.yıkamaProgramı} derece={sepet.yıkamaSıcaklığı} />

										<KurutmaChip kurutmaProgramı={sepet.kurutmaProgramı} />

										<DurumChip durum={sepet.durum} />
									</IonCol>
								</IonRow>
							</IonGrid>
						</IonCard>
					)}
				</>
			)}
		</>
	)
}
