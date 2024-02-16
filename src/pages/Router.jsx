import React from 'react'

import Tabs from '../layouts/Tabs'

import { IonContent, IonPage, IonRouterOutlet } from '@ionic/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useIntl } from 'react-intl'
import { Redirect, Route } from 'react-router'
import firebaseClient from '../lib/firebase/firebase'
import Login from './Login'

export const Router = () => {
	const [user, loading, error] = useAuthState(firebaseClient.auth)

	const intl = useIntl()

	const formatMessage = (id, values) => intl.formatMessage({ id: id }, { ...values })

	if (loading) {
		return (
			<IonPage>
				<IonContent>Loading</IonContent>
			</IonPage>
		)
	}

	return (
		<IonRouterOutlet>
			{user ? (
				<>
					<Route exact path={['/', '/login']}>
						<Redirect to="/home" />
					</Route>
					<Tabs formatMessage={formatMessage} />
				</>
			) : (
				<>
					<Route path="/">
						<Redirect to="/login" />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
				</>
			)}
		</IonRouterOutlet>
	)
}
export default Router
