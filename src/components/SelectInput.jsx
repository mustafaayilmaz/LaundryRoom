import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react'
import { hataMesajları } from '../config/error'

export default function SelectInput({ label, fieldName, options, required, register, clearErrors, errors, disabled = false }) {
	return (
		<>
			<IonItem>
				<IonSelect label={label} labelPlacement="floating" {...register(fieldName, { required: required })} onIonChange={() => clearErrors(fieldName)} disabled={disabled}>
					{options.map(option => (
						<IonSelectOption key={option.value} value={option.value}>
							{option.label}
						</IonSelectOption>
					))}
				</IonSelect>
			</IonItem>
			{errors[fieldName] && (
				<IonLabel className="ion-margin" color={'danger'}>
					{hataMesajları[fieldName]}
				</IonLabel>
			)}
		</>
	)
}
