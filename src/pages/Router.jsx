import React from 'react'

import Tabs from '../layouts/Tabs'

import { IonRouterOutlet } from '@ionic/react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useIntl } from 'react-intl'
import { Redirect, Route } from 'react-router'
import Loading from './Loading'
import Login from './Login'

export const Router = () => {
	const [user, loading, error] = useAuthState(firebase.auth())

	const intl = useIntl()

	const formatMessage = (id, values) => intl.formatMessage({ id: id }, { ...values })

	if (loading) {
		return <Loading />
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
