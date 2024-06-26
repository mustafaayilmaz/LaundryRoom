import { IonCard, IonCol, IonGrid, IonRow } from '@ionic/react'

import React from 'react'
import DurumChip from './helper/DurumChip' /**
 *
 * @param {{sepet: Sepet}} param0
 */
import TalebeChip from './helper/TalebeChip'
import TarihChip from './helper/TarihChip'
export default function ÇamaşırcıSepet({ sepet, setIsSepetOpen, setSelectedSepet, selected }) {
	return (
		<>
			{selected === 'Sırada' && (
				<>
					{sepet.durum === 'Sırada' && (
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
										<img src={sepet.image} width={'75%'} height={'75%'} />
									</IonCol>
									<IonCol size="7">
										<TarihChip tarih={new Date(sepet.tarih)} />

										<TalebeChip uid={sepet.no} />
										<DurumChip durum={sepet.durum} />
									</IonCol>
								</IonRow>
							</IonGrid>
						</IonCard>
					)}
				</>
			)}
			{selected === 'Çamaşır Makinesinde' && (
				<>
					{sepet.durum === 'Çamaşır Makinesinde' && (
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
										<img src={sepet.image} width={'75%'} height={'75%'} />
									</IonCol>
									<IonCol size="7">
										<TarihChip tarih={new Date(sepet.tarih)} />

										<TalebeChip uid={sepet.no} />
										<DurumChip durum={sepet.durum} />
									</IonCol>
								</IonRow>
							</IonGrid>
						</IonCard>
					)}
				</>
			)}
			{selected === 'Kurutma Makinesinde' && (
				<>
					{sepet.durum === 'Kurutma Makinesinde' && (
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
										<img src={sepet.image} width={'75%'} height={'75%'} />
									</IonCol>
									<IonCol size="7">
										<TarihChip tarih={new Date(sepet.tarih)} />

										<TalebeChip uid={sepet.no} />
										<DurumChip durum={sepet.durum} />
									</IonCol>
								</IonRow>
							</IonGrid>
						</IonCard>
					)}
				</>
			)}
			{selected === 'Bitti' && (
				<>
					{sepet.durum === 'Bitti' && (
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
										<img src={sepet.image} width={'75%'} height={'75%'} />
									</IonCol>
									<IonCol size="7">
										<TarihChip tarih={new Date(sepet.tarih)} />

										<TalebeChip uid={sepet.no} />
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
