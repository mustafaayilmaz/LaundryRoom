import React from 'react'
import { userState } from '../atoms/user'

import { useRecoilState } from 'recoil'

import Tabs from '../layouts/Tabs'

import { IonRouterOutlet } from '@ionic/react'
import { useIntl } from 'react-intl'
import { Redirect, Route } from 'react-router'
import Login from './Login'

export const Router = () => {
	const [user, setUser] = useRecoilState(userState)

	const intl = useIntl()

	const formatMessage = (id, values) => intl.formatMessage({ id: id }, { ...values })
	return (
		<IonRouterOutlet>
			{user ? (
				<>
					<Route exact path={['/', '/login', '/profile', '/clothes']}>
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
