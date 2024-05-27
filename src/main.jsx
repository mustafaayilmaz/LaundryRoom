import { defineCustomElements } from '@ionic/pwa-elements/loader'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import App from './App'

// Call the element loader before the render call
defineCustomElements(window)
const container = document.getElementById('root')

const root = createRoot(container)

root.render(
	<React.StrictMode>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</React.StrictMode>
)
