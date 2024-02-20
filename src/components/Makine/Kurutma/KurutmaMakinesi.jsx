import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonRow } from '@ionic/react'
import TahminiBitişChip from '../../Sepet/helper/TahminiBitiş'
import TalebeChip from '../../Sepet/helper/TalebeChip'
import YıkamaChip from '../../Sepet/helper/YıkamaChip'
import laundrymachine from '/laundrymachine.png'

export default function KurutmaMakinesi({ rol, sepet, makine }) {
	if (rol === 'talebe') {
		return <Talebe sepet={sepet} />
	} else {
		return <Çamaşırcı makine={makine} sepet={sepet} />
	}
}

function Talebe({ sepet }) {}

function Çamaşırcı({ makine, sepet }) {
	console.log(sepet)
	return (
		<IonCard className="ion-align-items-center">
			<IonRow className="ion-align-items-center ion-justify-content-center">
				<IonAvatar className="machine-avatar">
					<img src={laundrymachine} />
				</IonAvatar>
				<IonCardHeader>
					<IonCardTitle>{makine.id}</IonCardTitle>
				</IonCardHeader>
			</IonRow>
			<IonCardContent>
				<IonRow className="ion-justify-content-center ion-align-items-center">
					<TalebeChip uid={sepet.uid} />

					<TahminiBitişChip tarih={new Date(makine.tahminiBitiş)} />

					<YıkamaChip yıkamaProgramı={sepet.yıkamaProgramı} derece={sepet.yıkamaSıcaklığı} />
				</IonRow>
			</IonCardContent>
		</IonCard>
	)
}
