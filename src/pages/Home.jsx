import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonIcon, IonLabel, IonRow } from '@ionic/react'
import { personCircleOutline, timeOutline } from 'ionicons/icons'
import laundrymachine from '../../public/laundrymachine.png'
import Authorized from '../layouts/Authorized'
export const Home = () => {
	return (
		<Authorized>
			<IonCard className="ion-align-items-center">
				<IonRow className="ion-justify-content-center ion-align-items-center">
					<IonAvatar className="machine-avatar machine-card">
						<img src={laundrymachine} />
					</IonAvatar>
					<IonCardHeader>
						<IonCardTitle>1 Numara</IonCardTitle>
						<IonCardSubtitle>Çamaşır Makinesi</IonCardSubtitle>
					</IonCardHeader>
				</IonRow>
				<IonCardContent>
					<IonRow className="ion-justify-content-center ion-align-items-center">
						<IonChip>
							<IonIcon icon={personCircleOutline}></IonIcon>
							<IonLabel>Çamaşır Sahibi</IonLabel>
						</IonChip>
						<IonChip>
							<IonIcon icon={timeOutline}></IonIcon>
							<IonLabel>19:00</IonLabel>
						</IonChip>
					</IonRow>
				</IonCardContent>
			</IonCard>
			<IonCard className="ion-align-items-center">
				<IonRow className="ion-align-items-center ion-justify-content-center">
					<IonAvatar className="machine-avatar">
						<img src={laundrymachine} />
					</IonAvatar>
					<IonCardHeader>
						<IonCardTitle>2 Numara</IonCardTitle>
						<IonCardSubtitle>Çamaşır Makinesi</IonCardSubtitle>
					</IonCardHeader>
				</IonRow>
				<IonCardContent>
					<IonRow className="ion-justify-content-center ion-align-items-center">
						<IonChip>
							<IonIcon icon={personCircleOutline}></IonIcon>
							<IonLabel>Çamaşır Sahibi</IonLabel>
						</IonChip>
						<IonChip>
							<IonIcon icon={timeOutline}></IonIcon>
							<IonLabel>19:00</IonLabel>
						</IonChip>
					</IonRow>
				</IonCardContent>
			</IonCard>
			<IonCard className="ion-align-items-center">
				<IonRow className="ion-align-items-center ion-justify-content-center">
					<IonAvatar className="machine-avatar">
						<img src={laundrymachine} />
					</IonAvatar>
					<IonCardHeader>
						<IonCardTitle>3 Numara</IonCardTitle>
						<IonCardSubtitle>Çamaşır Makinesi</IonCardSubtitle>
					</IonCardHeader>
				</IonRow>
				<IonCardContent>
					<IonRow className="ion-justify-content-center ion-align-items-center">
						<IonChip>
							<IonIcon icon={personCircleOutline}></IonIcon>
							<IonLabel>Çamaşır Sahibi</IonLabel>
						</IonChip>
						<IonChip>
							<IonIcon icon={timeOutline}></IonIcon>
							<IonLabel>19:00</IonLabel>
						</IonChip>
					</IonRow>
				</IonCardContent>
			</IonCard>
			<IonCard className="ion-align-items-center">
				<IonRow className="ion-align-items-center ion-justify-content-center">
					<IonAvatar className="machine-avatar">
						<img src={laundrymachine} />
					</IonAvatar>
					<IonCardHeader>
						<IonCardTitle>4 Numara</IonCardTitle>
						<IonCardSubtitle>Çamaşır Makinesi</IonCardSubtitle>
					</IonCardHeader>
				</IonRow>
				<IonCardContent>
					<IonRow className="ion-justify-content-center ion-align-items-center">
						<IonChip>
							<IonIcon icon={personCircleOutline}></IonIcon>
							<IonLabel>Çamaşır Sahibi</IonLabel>
						</IonChip>
						<IonChip>
							<IonIcon icon={timeOutline}></IonIcon>
							<IonLabel>19:00</IonLabel>
						</IonChip>
					</IonRow>
				</IonCardContent>
			</IonCard>
			<IonCard className="ion-align-items-center">
				<IonRow className="ion-align-items-center ion-justify-content-center">
					<IonAvatar className="machine-avatar">
						<img src={laundrymachine} />
					</IonAvatar>
					<IonCardHeader>
						<IonCardTitle>5 Numara</IonCardTitle>
						<IonCardSubtitle>Çamaşır Makinesi</IonCardSubtitle>
					</IonCardHeader>
				</IonRow>
				<IonCardContent>
					<IonRow className="ion-justify-content-center ion-align-items-center">
						<IonChip>
							<IonIcon icon={personCircleOutline}></IonIcon>
							<IonLabel>Çamaşır Sahibi</IonLabel>
						</IonChip>
						<IonChip>
							<IonIcon icon={timeOutline}></IonIcon>
							<IonLabel>19:00</IonLabel>
						</IonChip>
					</IonRow>
				</IonCardContent>
			</IonCard>
		</Authorized>
	)
}

export default Home
