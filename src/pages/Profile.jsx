import { IonAlert, IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonTitle, IonToolbar, useIonAlert } from '@ionic/react'

import { buildOutline, moonOutline, playOutline } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useHistory } from 'react-router'
import laundrymachine from '../../dist/laundrymachine.png'
import Authorized from '../layouts/Authorized'
import firebaseClient from '../lib/firebase/firebase'
import Loading from './Loading'

export const Profile = () => {
	const [signOut, loading, error] = useSignOut(firebaseClient.auth)
	const history = useHistory()

	const [isOpen, setIsOpen] = useState(false)
	const [settingsOpen, setSettingsOpen] = useState(false)
	const [choosed, setChoosed] = useState('')
	const [choosedUser, setChoosedUser] = useState([])
	const [balance, setBalance] = useState('')
	const [user, userLoading, userError] = useAuthState(firebaseClient.auth)
	const [users, usersLoading, usersError] = useCollectionData(firebaseClient.firestore.collection('kullanıcılar'))
	const [currentUser, setCurrentUser] = useState([])
	const [selected, setSelected] = useState('çamaşırMakineleri')
	const [updateMakine, setUpdateMakine] = useState('')
	const [alertTrigger, setAlertTrigger] = useState(false)
	const [mevcutDurum, setMevcutDurum] = useState('')
	const [makineler, makienelerLoading, makinelerError, snapshot, reload] = useCollectionData(firebaseClient.firestore.collection(selected))

	useEffect(() => {
		const fetchUser = async () => {
			const snapshot = await firebaseClient.firestore.collection('kullanıcılar').where('no', '==', choosed).get()
			const getUser = await firebaseClient.firestore.collection('kullanıcılar').where('userUid', '==', user.uid).get()
			getUser.docs.map(doc => setCurrentUser(doc.data()))

			snapshot.docs.map(doc => setChoosedUser(doc.data()))
		}
		fetchUser()
	}, [choosed, user.uid])

	const updatedBalance = parseFloat(balance) + parseFloat(choosedUser.bakiye)
	const goLogin = () => history.push('/login')

	const [presentAlert] = useIonAlert()

	const alert = (title, message) => {
		presentAlert({
			header: title,
			message: message,
			buttons: ['Tamam']
		})
	}

	if (loading) {
		return <Loading />
	}
	if (userLoading) {
		return <Loading />
	}
	if (usersLoading) {
		return <Loading />
	}

	return (
		<Authorized>
			<IonCard className="ion-card">
				{user && (
					<>
						{user.displayName === 'çamaşırcı' ? (
							<IonCardHeader className="ion-justify-content-center ion-align-items-center">
								<IonCardTitle>Çamaşırcı</IonCardTitle>
							</IonCardHeader>
						) : (
							<IonCardHeader className="ion-justify-content-center ion-align-items-center">
								<IonCardContent>{currentUser.bakiye}₺</IonCardContent>
								<IonCardTitle>{currentUser.no} nolu Kullanıcı</IonCardTitle>
							</IonCardHeader>
						)}
					</>
				)}
			</IonCard>
			{user && (
				<>
					{user.displayName === 'çamaşırcı' && (
						<>
							<IonButton expand="block" onClick={() => setIsOpen(true)}>
								Bakiye Tanımla
							</IonButton>
							<IonButton expand="block" onClick={() => setSettingsOpen(true)}>
								Makineler
							</IonButton>
						</>
					)}
				</>
			)}
			<IonModal isOpen={settingsOpen}>
				<IonHeader>
					<IonToolbar color="secondary">
						<IonTitle>Makinelerin Durumları</IonTitle>
						<IonButtons slot="end">
							<IonButton onClick={() => setSettingsOpen(false)}>Kapat</IonButton>
						</IonButtons>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<>
						<IonSegment value={selected}>
							<IonSegmentButton value={'çamaşırMakineleri'} onClick={() => setSelected('çamaşırMakineleri')}>
								<IonLabel>Çamaşır Makineleri</IonLabel>
							</IonSegmentButton>
							<IonSegmentButton value={'kurutmaMakineleri'} onClick={() => setSelected('kurutmaMakineleri')}>
								<IonLabel>Kurutma Makineleri</IonLabel>
							</IonSegmentButton>
						</IonSegment>

						{makineler &&
							selected === 'çamaşırMakineleri' &&
							makineler.map((makine, index) => (
								<IonCard
									key={index}
									className="ion-align-items-center"
									onClick={() => {
										setUpdateMakine(makine.no), setAlertTrigger(true), setMevcutDurum(makine.durum)
									}}
								>
									<IonRow className="ion-align-items-center ion-justify-content-center">
										<IonAvatar className="machine-avatar">
											<img src={laundrymachine} />
										</IonAvatar>
										<IonCardHeader>
											<IonCardTitle>{makine.no} Numara</IonCardTitle>
											<IonCardSubtitle>Çamaşır Makinesi</IonCardSubtitle>
										</IonCardHeader>
									</IonRow>
									<IonCardContent>
										{makine.durum === 'Arızalı' && (
											<IonRow className="ion-justify-content-center">
												<IonChip>
													<IonIcon style={{ color: 'red' }} icon={buildOutline}></IonIcon>
													<IonLabel>Arızalı</IonLabel>
												</IonChip>
											</IonRow>
										)}
										{makine.durum === 'Bekliyor' && (
											<IonRow className="ion-justify-content-center">
												<IonChip>
													<IonIcon style={{ color: 'blue' }} icon={moonOutline}></IonIcon>
													<IonLabel>Bekliyor</IonLabel>
												</IonChip>
											</IonRow>
										)}
										{makine.durum === 'Çalışıyor' && (
											<IonRow className="ion-justify-content-center ion-align-items-center">
												<IonChip>
													<IonIcon style={{ color: 'green' }} icon={playOutline}></IonIcon>
													<IonLabel>Çalışıyor</IonLabel>
												</IonChip>
											</IonRow>
										)}
									</IonCardContent>
								</IonCard>
							))}
						{makineler &&
							selected === 'kurutmaMakineleri' &&
							makineler.map((makine, index) => (
								<IonCard
									key={index}
									className="ion-align-items-center"
									onClick={() => {
										setUpdateMakine(makine.no), setAlertTrigger(true), setMevcutDurum(makine.durum)
									}}
								>
									<IonRow className="ion-align-items-center ion-justify-content-center">
										<IonAvatar className="machine-avatar">
											<img src={laundrymachine} />
										</IonAvatar>
										<IonCardHeader>
											<IonCardTitle>{makine.no} Numara</IonCardTitle>
											<IonCardSubtitle>Kurutma Makinesi</IonCardSubtitle>
										</IonCardHeader>
									</IonRow>
									<IonCardContent>
										{makine.durum === 'Arızalı' && (
											<IonRow className="ion-justify-content-center">
												<IonChip>
													<IonIcon style={{ color: 'red' }} icon={buildOutline}></IonIcon>
													<IonLabel>Arızalı</IonLabel>
												</IonChip>
											</IonRow>
										)}
										{makine.durum === 'Bekliyor' && (
											<IonRow className="ion-justify-content-center">
												<IonChip>
													<IonIcon style={{ color: 'blue' }} icon={moonOutline}></IonIcon>
													<IonLabel>Bekliyor</IonLabel>
												</IonChip>
											</IonRow>
										)}
										{makine.durum === 'Çalışıyor' && (
											<IonRow className="ion-justify-content-center ion-align-items-center">
												<IonChip>
													<IonIcon style={{ color: 'blue' }} icon={moonOutline}></IonIcon>
													<IonLabel>Çalışıyor</IonLabel>
												</IonChip>
											</IonRow>
										)}
									</IonCardContent>
								</IonCard>
							))}
					</>
				</IonContent>
			</IonModal>
			<IonAlert
				isOpen={alertTrigger}
				onDidDismiss={() => setAlertTrigger(false)}
				header="Makinenin Durumunu Seçiminiz"
				buttons={[
					{
						text: 'Tamam',
						handler: async durum => {
							try {
								if (selected !== '') {
									if (mevcutDurum !== 'Çalışıyor') {
										await firebaseClient.makineDurumGüncelle(selected, updateMakine, durum)
									} else {
										alert('Hata', 'Durumunu değiştirmek istediğiniz makinedeki çamaşırın bitmesini bekleyiniz!')
									}
								}
							} catch (error) {
								throw error
							}
						}
					}
				]}
				inputs={[
					{
						label: 'Arızalı',
						type: 'radio',
						value: 'Arızalı'
					},
					{
						label: 'Bekliyor',
						type: 'radio',
						value: 'Bekliyor'
					}
				]}
			/>

			<IonModal isOpen={isOpen}>
				<IonHeader>
					<IonToolbar color="secondary">
						<IonTitle>Bakiye Tanımlama</IonTitle>
						<IonButtons slot="end">
							<IonButton
								onClick={() => {
									setIsOpen(false), setChoosed('')
								}}
							>
								Kapat
							</IonButton>
						</IonButtons>
					</IonToolbar>
				</IonHeader>
				<IonContent className="ion-padding">
					<IonItem>
						<IonSelect label="Kullanıcı no seçiniz" placeholder="Kullanıcı No" value={choosed} onIonChange={e => setChoosed(e.detail.value)}>
							{users &&
								users
									.filter(user => user.rol === 'kullanıcı')
									.sort((a, b) => a.no - b.no) // k.no değerine göre sıralama
									.map((k, index) => (
										<IonSelectOption key={index} value={k.no}>
											{k.no}
										</IonSelectOption>
									))}
						</IonSelect>
					</IonItem>

					<IonItem>
						<IonGrid>
							<IonRow>
								<IonCol style={{ display: 'flex', justifyContent: 'flex-start', width: '190px' }}>Kullanıcı mevcut bakiye</IonCol>
								<IonCol style={{ display: 'flex', justifyContent: 'end', width: '80px' }}>{choosedUser.bakiye}</IonCol>
							</IonRow>
						</IonGrid>
					</IonItem>
					<IonItem>
						<IonGrid>
							<IonRow>
								<IonCol class="bakiye-col">
									<IonButton class="bakiye-buton" expand="block" onClick={() => setBalance('10')}>
										10₺
									</IonButton>
								</IonCol>
								<IonCol class="bakiye-col">
									<IonButton class="bakiye-buton" expand="block" onClick={() => setBalance('20')}>
										20₺
									</IonButton>
								</IonCol>
								<IonCol class="bakiye-col">
									<IonButton class="bakiye-buton" expand="block" onClick={() => setBalance('25')}>
										25₺
									</IonButton>
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol class="bakiye-col">
									<IonButton class="bakiye-buton" expand="block" onClick={() => setBalance('50')}>
										50₺
									</IonButton>
								</IonCol>
								<IonCol class="bakiye-col">
									<IonButton class="bakiye-buton" expand="block" onClick={() => setBalance('100')}>
										100₺
									</IonButton>
								</IonCol>
								<IonCol class="bakiye-col">
									<IonButton class="bakiye-buton" expand="block">
										<IonInput type="number" value={balance} onIonChange={e => setBalance(e.detail.value)}></IonInput>₺
									</IonButton>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonItem>

					<IonButton
						expand="block"
						onClick={async () => {
							try {
								await firebaseClient.bakiyeTanimlama(updatedBalance, choosedUser.userUid), setChoosed('')
								alert('Uyarı', `${choosed} nolu kullanıcıya ${balance}₺ bakiye yüklendi.`)
							} catch (error) {
								alert('Hata', error)
							}
						}}
					>
						Değişiklikleri Onayla
					</IonButton>
				</IonContent>
			</IonModal>
			<IonButton
				expand="block"
				onClick={async () => {
					const success = await signOut()
					goLogin()
					if (success) {
						console.log('Successfully signed out ')
					}
				}}
			>
				Çıkış Yap
			</IonButton>
		</Authorized>
	)
}

export default Profile
