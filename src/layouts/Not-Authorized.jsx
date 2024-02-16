import { IonCard, IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'
import logo from '/laundryRoomLogo.png'

export const NotAuthorized = ({ onSubmit, children }) => {
	return (
		<IonPage>
			<IonContent color={'secondary'} className="ion-no-padding ion-height" scrollY={false}>
				<form onSubmit={onSubmit}>
					<IonGrid className="ion-align-items-center ion-justify-content-center ion-height">
						<IonRow className="ion-align-items-center ion-justify-content-center ion-height">
							<IonCol size="12" sizeMd="6" sizeLg="4">
								<IonCard className="ion-transparent ion-padding-top">
									<img
										src={logo}
										style={{
											width: '75%',
											marginLeft: '10%',
											marginBottom: '0'
										}}
									></img>
									{children}
								</IonCard>
							</IonCol>
						</IonRow>
					</IonGrid>
				</form>
			</IonContent>
		</IonPage>
	)
}

export default NotAuthorized
