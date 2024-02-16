import { IonApp, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

import '@ionic/react/css/core.css'

import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

import '@ionic/react/css/display.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'

import './theme/style.scss'
import './theme/variables.css'

import Locales from './lang'
import Router from './pages/Router'

import { IntlProvider } from 'react-intl'
import { useRecoilValue } from 'recoil'
import userState from './atoms/user'

setupIonicReact()

const App = () => {
	const user = useRecoilValue(userState)

	const locale = Locales['tr']

	return (
		<IonApp>
			<IntlProvider locale={locale.code} messages={locale.messages} onError={error => error.code === 'MISSING_TRANSLATION'} defaultLocale="tr">
				<IonReactRouter>
					<Router />
				</IonReactRouter>
			</IntlProvider>
		</IonApp>
	)
}

export default App
