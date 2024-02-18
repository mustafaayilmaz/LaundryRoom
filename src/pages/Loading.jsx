import { IonCol, IonGrid, IonLabel, IonRow, IonSpinner } from '@ionic/react'
import Authorized from '../layouts/Authorized'

export default function Loading() {
	return (
		<Authorized>
			<IonGrid className="ion-height ion-align-items-center ion-justify-content-center ">
				<IonRow className="ion-height ion-align-items-center ion-justify-content-center">
					<IonCol size="12" className="ion-text-center">
						<div className="auth-card ">
							<IonSpinner name="crescent"></IonSpinner>
							<IonLabel>Lütfen Bekleyiniz ...</IonLabel>
						</div>
					</IonCol>
				</IonRow>
			</IonGrid>
		</Authorized>
	)
}
