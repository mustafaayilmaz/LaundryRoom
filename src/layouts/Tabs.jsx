import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import React from 'react'
import { userState } from '../atoms/user'

import { useRecoilState } from 'recoil'

import { Route } from 'react-router'

import { bagOutline, home, listOutline, personOutline } from 'ionicons/icons'

import Clothes from '../pages/Clothes'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Queue from '../pages/Queue'

import { useLocation } from 'react-router-dom'
import Login from '../pages/Login'

export const Tabs = ({ formatMessage }) => {
	const [user, setUser] = useRecoilState(userState)
	const link = useLocation()

	return (
		<IonTabs>
			<IonRouterOutlet>
				<Route path="/home" render={() => <Home formatMessage={formatMessage} />} exact={true} />
				<Route path="/queue" render={() => <Queue formatMessage={formatMessage} />} exact={true} />
				<Route path="/clothes" render={() => <Clothes formatMessage={formatMessage} />} exact={true} />
				<Route path="/profile" render={() => <Profile formatMessage={formatMessage} />} exact={true} />
				<Route path="/login" render={() => <Login formatMessage={formatMessage} />} exact={true} />
			</IonRouterOutlet>

			<IonTabBar slot="bottom">
				<IonTabButton tab="home" href="/home" selected={link.pathname == '/home'}>
					<IonLabel>{formatMessage('Home')}</IonLabel>
					<IonIcon icon={home} />
				</IonTabButton>
				<IonTabButton tab="queue" href="/queue" selected={link.pathname == '/queue'}>
					<IonLabel>{formatMessage('Queue')}</IonLabel>
					<IonIcon icon={listOutline} />
				</IonTabButton>
				<IonTabButton tab="clothes" href="/clothes" selected={link.pathname == '/clothes'}>
					<IonLabel>{formatMessage('Clothes')}</IonLabel>
					<IonIcon icon={bagOutline} />
				</IonTabButton>

				<IonTabButton tab="profile" href="/profile" selected={link.pathname == '/profile'}>
					<IonLabel>{formatMessage('Profile')}</IonLabel>
					<IonIcon icon={personOutline} />
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	)
}
export default Tabs
