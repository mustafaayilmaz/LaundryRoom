import { IonItem, IonItemDivider, IonItemGroup, IonLabel, IonToggle } from '@ionic/react'
import { useState } from 'react'
import { kurutmaProgramları } from '../../types/programlar'
import { ücret } from '../../types/ücret'
import SelectInput from '../SelectInput'

export default function Kurutma({ errors, clearErrors, setValue, register, toplamÜcret, setToplamÜcret }) {
	const [isKurutma, setIsKurutma] = useState(false)

	const toggleKurutma = () => {
		setIsKurutma(!isKurutma)
		if (!isKurutma) {
			setToplamÜcret(toplamÜcret + ücret.kurutma)
		} else {
			setToplamÜcret(toplamÜcret - ücret.kurutma)
		}
	}

	return (
		<IonItemGroup className="ion-margin-top">
			<IonItemDivider>
				<IonLabel>Kurutma</IonLabel>
			</IonItemDivider>
			<IonItem>
				<IonToggle
					onIonChange={e => {
						setValue('kurutmaVar', e.detail.checked)
						toggleKurutma()
					}}
				>
					Kurutma
				</IonToggle>
			</IonItem>
			<SelectInput errors={errors} clearErrors={clearErrors} register={register} fieldName={'kurutmaProgramı'} label={'Kurutma Programı'} options={Object.values(kurutmaProgramları)} required={isKurutma} disabled={!isKurutma} />
		</IonItemGroup>
	)
}
