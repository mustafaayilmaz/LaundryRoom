import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonIcon, IonLabel, IonRow, IonSegment, IonSegmentButton } from '@ionic/react'
import { personCircleOutline, timeOutline } from 'ionicons/icons'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import laundrymachine from '../../public/laundrymachine.png'
import Authorized from '../layouts/Authorized'
import firebaseClient from '../lib/firebase/firebase'
import Loading from './Loading'

const örnekMakine = {
	id: 'Çamaşır Makinesi 1',
	tahminiBitiş: 1708431147
}

export const Home = () => {
	const [aktifSepetler, setAktifSepetler] = useState([])
	const [user, loading, error] = useAuthState(firebaseClient.auth)
	const [selected, setSelected] = useState('çamaşır')

	if (loading) {
		return <Loading />
	}

	if (!user || error) {
		return console.log('Error')
	}

	useEffect(() => {
		const fetchData = async () => {
			const data = await firebaseClient.aktifSepetleriGetir(user.uid)
			console.log(data)
			setAktifSepetler(data)
		}

		fetchData()
	}, [])

	return (
		<Authorized>
			<IonSegment value="çamaşır" className="ion-padding-top" onIonChange={e => setSelected(e.detail.value)}>
				<IonSegmentButton value="çamaşır">
					<IonLabel>Çamaşır Makinesi</IonLabel>
				</IonSegmentButton>
				<IonSegmentButton value="kurutma">
					<IonLabel>Kurutma Makinesi</IonLabel>
				</IonSegmentButton>
			</IonSegment>
			{user.displayName === 'kullanıcı' ? (
				<>
					{selected === 'çamaşır' ? (
						<IonCard className="ion-align-items-center">
							<IonRow className="ion-align-items-center ion-justify-content-center">
								<IonAvatar className="machine-avatar">
									<img src={laundrymachine} />
								</IonAvatar>
							</IonRow>
							<IonCardContent>
								<IonRow className="ion-justify-content-center ion-align-items-center">
									<IonChip>
										<IonIcon icon={personCircleOutline}></IonIcon>
										<IonLabel>Program</IonLabel>
									</IonChip>

									<IonChip>
										<IonIcon icon={personCircleOutline}></IonIcon>
										<IonLabel>Derece</IonLabel>
									</IonChip>
								</IonRow>
							</IonCardContent>
						</IonCard>
					) : (
						<IonCard className="ion-align-items-center">
							<IonRow className="ion-align-items-center ion-justify-content-center">
								<IonAvatar className="machine-avatar">
									<img src={laundrymachine} />
								</IonAvatar>
							</IonRow>
							<IonCardContent>
								<IonRow className="ion-justify-content-center ion-align-items-center">
									<IonChip>
										<IonIcon icon={personCircleOutline}></IonIcon>
										<IonLabel>Program</IonLabel>
									</IonChip>

									<IonChip>
										<IonIcon icon={personCircleOutline}></IonIcon>
										<IonLabel>Derece</IonLabel>
									</IonChip>
								</IonRow>
							</IonCardContent>
						</IonCard>
					)}
				</>
			) : (
				<>
					{selected === 'çamaşır' ? (
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
										<IonIcon icon={personCircleOutline}></IonIcon>
										<IonLabel>Makine numarası</IonLabel>
									</IonChip>

									<IonChip>
										{/* TODO: Tahmini bitiş süresi */}
										<IonIcon icon={timeOutline}></IonIcon>
										<IonLabel>Tahmini Bitiş</IonLabel>
									</IonChip>

									<IonChip>
										<IonIcon icon={personCircleOutline}></IonIcon>
										<IonLabel>Program</IonLabel>
									</IonChip>
									<IonChip>
										<IonIcon icon={personCircleOutline}></IonIcon>
										<IonLabel>Derece</IonLabel>
									</IonChip>
								</IonRow>
							</IonCardContent>
						</IonCard>
					) : (
						<IonCard className="ion-align-items-center">
							<IonRow className="ion-align-items-center ion-justify-content-center">
								<IonAvatar className="machine-avatar">
									<img src={laundrymachine} />
								</IonAvatar>
								<IonCardHeader>
									<IonCardTitle>5 Numara</IonCardTitle>
									<IonCardSubtitle>Kurutma Makinesi</IonCardSubtitle>
								</IonCardHeader>
							</IonRow>
							<IonCardContent>
								<IonRow className="ion-justify-content-center ion-align-items-center">
									<IonChip>
										<IonIcon icon={personCircleOutline}></IonIcon>
										<IonLabel>Çamaşır Sahibi</IonLabel>
									</IonChip>

									<IonChip>
										<IonIcon icon={personCircleOutline}></IonIcon>
										<IonLabel>Makine numarası</IonLabel>
									</IonChip>

									<IonChip>
										{/* TODO: Tahmini bitiş süresi */}
										<IonIcon icon={timeOutline}></IonIcon>
										<IonLabel>Tahmini Bitiş</IonLabel>
									</IonChip>

									<IonChip>
										<IonIcon icon={personCircleOutline}></IonIcon>
										<IonLabel>Program</IonLabel>
									</IonChip>
									<IonChip>
										<IonIcon icon={personCircleOutline}></IonIcon>
										<IonLabel>Derece</IonLabel>
									</IonChip>
								</IonRow>
							</IonCardContent>
						</IonCard>
					)}
				</>
			)}
		</Authorized>
	)
}

export default Home

function MakineTalebe() {
	return selected === 'çamaşır' ? (
		<IonCard className="ion-align-items-center">
			<IonRow className="ion-align-items-center ion-justify-content-center">
				<IonAvatar className="machine-avatar">
					<img src={laundrymachine} />
				</IonAvatar>
			</IonRow>
			<IonCardContent>
				<IonRow className="ion-justify-content-center ion-align-items-center">
					<IonChip>
						<IonIcon icon={personCircleOutline}></IonIcon>
						<IonLabel>Program</IonLabel>
					</IonChip>

					<IonChip>
						<IonIcon icon={personCircleOutline}></IonIcon>
						<IonLabel>Derece</IonLabel>
					</IonChip>
				</IonRow>
			</IonCardContent>
		</IonCard>
	) : (
		<IonCard className="ion-align-items-center">
			<IonRow className="ion-align-items-center ion-justify-content-center">
				<IonAvatar className="machine-avatar">
					<img src={laundrymachine} />
				</IonAvatar>
			</IonRow>
			<IonCardContent>
				<IonRow className="ion-justify-content-center ion-align-items-center">
					<IonChip>
						<IonIcon icon={personCircleOutline}></IonIcon>
						<IonLabel>Program</IonLabel>
					</IonChip>

					<IonChip>
						<IonIcon icon={personCircleOutline}></IonIcon>
						<IonLabel>Derece</IonLabel>
					</IonChip>
				</IonRow>
			</IonCardContent>
		</IonCard>
	)
}

function MakineÇamaşırcı() {
	return selected === 'çamaşır' ? (
		<IonCard className="ion-align-items-center">
			<IonRow className="ion-align-items-center ion-justify-content-center">
				<IonAvatar className="machine-avatar">
					<img src={laundrymachine} />
				</IonAvatar>
				<IonCardHeader>
					<IonCardTitle>5 Numara</IonCardTitle>
					<IonCardSubtitle>Kurutma Makinesi</IonCardSubtitle>
				</IonCardHeader>
			</IonRow>
			<IonCardContent>
				<IonRow className="ion-justify-content-center ion-align-items-center">
					<IonChip>
						<IonIcon icon={personCircleOutline}></IonIcon>
						<IonLabel>Çamaşır Sahibi</IonLabel>
					</IonChip>

					<IonChip>
						<IonIcon icon={personCircleOutline}></IonIcon>
						<IonLabel>Makine numarası</IonLabel>
					</IonChip>

					<IonChip>
						{/* TODO: Tahmini bitiş süresi */}
						<IonIcon icon={timeOutline}></IonIcon>
						<IonLabel>Tahmini Bitiş</IonLabel>
					</IonChip>

					<IonChip>
						<IonIcon icon={personCircleOutline}></IonIcon>
						<IonLabel>Program</IonLabel>
					</IonChip>
					<IonChip>
						<IonIcon icon={personCircleOutline}></IonIcon>
						<IonLabel>Derece</IonLabel>
					</IonChip>
				</IonRow>
			</IonCardContent>
		</IonCard>
	) : (
		<IonCard className="ion-align-items-center">
			<IonRow className="ion-align-items-center ion-justify-content-center">
				<IonAvatar className="machine-avatar">
					<img src={laundrymachine} />
				</IonAvatar>
				<IonCardHeader>
					<IonCardTitle>5 Numara</IonCardTitle>
					<IonCardSubtitle>Kurutma Makinesi</IonCardSubtitle>
				</IonCardHeader>
			</IonRow>
			<IonCardContent>
				<IonRow className="ion-justify-content-center ion-align-items-center">
					<IonChip>
						<IonIcon icon={personCircleOutline}></IonIcon>
						<IonLabel>Çamaşır Sahibi</IonLabel>
					</IonChip>

					<IonChip>
						<IonIcon icon={personCircleOutline}></IonIcon>
						<IonLabel>Makine numarası</IonLabel>
					</IonChip>

					<IonChip>
						{/* TODO: Tahmini bitiş süresi */}
						<IonIcon icon={timeOutline}></IonIcon>
						<IonLabel>Tahmini Bitiş</IonLabel>
					</IonChip>

					<IonChip>
						<IonIcon icon={personCircleOutline}></IonIcon>
						<IonLabel>Program</IonLabel>
					</IonChip>
					<IonChip>
						<IonIcon icon={personCircleOutline}></IonIcon>
						<IonLabel>Derece</IonLabel>
					</IonChip>
				</IonRow>
			</IonCardContent>
		</IonCard>
	)
}
