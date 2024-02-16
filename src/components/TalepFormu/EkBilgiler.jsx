import { IonInput, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonToggle } from '@ionic/react'
import { useState } from 'react'
import { ücret } from '../../types/ücret'

export default function EkBilgiler({ register, setValue, toplamÜcret, setToplamÜcret }) {
	const [isYumuşatıcı, setIsYumuşatıcı] = useState(false)
	const [isDeterjan, setIsDeterjan] = useState(false)

	const toggleYumuşatıcı = () => {
		setIsYumuşatıcı(!isYumuşatıcı)
		if (!isYumuşatıcı) {
			setToplamÜcret(toplamÜcret + ücret.yumuşatıcı)
		} else {
			setToplamÜcret(toplamÜcret - ücret.yumuşatıcı)
		}
	}
	const toggleDeterjan = () => {
		setIsDeterjan(!isDeterjan)
		if (!isDeterjan) {
			setToplamÜcret(toplamÜcret + ücret.deterjan)
		} else {
			setToplamÜcret(toplamÜcret - ücret.deterjan)
		}
	}

	return (
		<IonItemGroup className="ion-margin-top">
			<IonItemDivider>
				<IonLabel>Ek Bilgiler</IonLabel>
			</IonItemDivider>
			<IonItem>
				<IonToggle
					onIonChange={e => {
						setValue('deterjanVar', e.detail.checked)
						toggleDeterjan()
					}}
				>
					Deterjanım var
				</IonToggle>
			</IonItem>
			<IonItem>
				<IonToggle
					onIonChange={e => {
						setValue('yumuşatıcıVar', e.detail.checked)
						toggleYumuşatıcı()
					}}
				>
					Yumuşatıcım var
				</IonToggle>
			</IonItem>
			<IonItem>
				<IonInput label="Ek Talep" labelPlacement="floating" placeholder="Ek Taleplerinizi Yazabilirsiniz" {...register('ekBilgi')}></IonInput>
			</IonItem>
		</IonItemGroup>
	)
}
