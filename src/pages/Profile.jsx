import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonModal, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react'

import React, { useEffect, useState } from 'react'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useHistory } from 'react-router'
import Authorized from '../layouts/Authorized'
import firebaseClient from '../lib/firebase/firebase'
import Loading from './Loading'

export const Profile = () => {
	const [signOut, loading, error] = useSignOut(firebaseClient.auth)
	const history = useHistory()

	const [isOpen, setIsOpen] = useState(false)
	const [choosed, setChoosed] = useState('')
	const [choosedUser, setChoosedUser] = useState([])
	const [balance, setBalance] = useState('')
	const [user, userLoading, userError] = useAuthState(firebaseClient.auth)
	const [users, usersLoading, usersError] = useCollectionData(firebaseClient.firestore.collection('kullanıcılar'))
	const [currentUser, setCurrentUser] = useState([])
	useEffect(() => {
		const fetchUser = async () => {
			const snapshot = await firebaseClient.firestore.collection('kullanıcılar').where('no', '==', choosed).get()
			const getUser = await firebaseClient.firestore.collection('kullanıcılar').where('userUid', '==', user.uid).get()
			getUser.docs.map(doc => setCurrentUser(doc.data(0)))

			snapshot.docs.map(doc => setChoosedUser(doc.data(0)))
		}
		fetchUser()
	}, [choosed])
	const updatedBalance = parseFloat(balance) + parseFloat(choosedUser.bakiye)
	const goLogin = () => history.push('/login')
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
						<IonButton expand="block" onClick={() => setIsOpen(true)}>
							Bakiye Tanımla
						</IonButton>
					)}
				</>
			)}

			<IonModal isOpen={isOpen}>
				<IonHeader>
					<IonToolbar>
						<IonTitle>Bakiye Tanımlama</IonTitle>
						<IonButtons slot="end">
							<IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
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
							await firebaseClient.bakiyeTanimlama(updatedBalance, choosedUser.userUid)
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
