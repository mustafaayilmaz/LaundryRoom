import { IonItemDivider, IonItemGroup, IonLabel } from '@ionic/react'
import { sıcaklıklar, yıkamaProgramları } from '../../types/programlar'
import SelectInput from '../SelectInput'

export const Yıkama = ({ errors, clearErrors, register }) => {
	return (
		<IonItemGroup>
			<IonItemDivider>
				<IonLabel>Yıkama</IonLabel>
			</IonItemDivider>

			<SelectInput errors={errors} clearErrors={clearErrors} register={register} fieldName={'yıkamaProgramı'} label={'Yıkama Programı'} options={Object.values(yıkamaProgramları)} required={true} />
			<SelectInput errors={errors} clearErrors={clearErrors} register={register} fieldName={'yıkamaSıcaklığı'} label={'Yıkama Sıcaklığı'} options={sıcaklıklar} required={true} />
		</IonItemGroup>
	)
}
export default Yıkama
