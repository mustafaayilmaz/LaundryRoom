import { IonContent, IonPage } from '@ionic/react'

export const Authorized = ({ children }) => {
	return (
		<IonPage>
			<IonContent color="secondary" scrollY={true}>
				{children}
			</IonContent>
		</IonPage>
	)
}

export default Authorized
