import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import React from 'react'

import { Route } from 'react-router'

import { home, listOutline, personOutline } from 'ionicons/icons'

import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Queue from '../pages/Queue'

import { useLocation } from 'react-router-dom'

export const Tabs = ({ formatMessage }) => {
	const link = useLocation()

	return (
		<IonTabs>
			<IonRouterOutlet>
				<Route path="/home" render={() => <Home formatMessage={formatMessage} />} exact={true} />
				<Route path="/queue" render={() => <Queue formatMessage={formatMessage} />} exact={true} />
				<Route path="/profile" render={() => <Profile formatMessage={formatMessage} />} exact={true} />
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

				<IonTabButton tab="profile" href="/profile" selected={link.pathname == '/profile'}>
					<IonLabel>{formatMessage('Profile')}</IonLabel>
					<IonIcon icon={personOutline} />
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	)
}
export default Tabs
