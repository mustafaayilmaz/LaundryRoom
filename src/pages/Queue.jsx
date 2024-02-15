import { IonButton } from '@ionic/react'

import React, { useState } from 'react'
import ÇamaşırTalepFormu from '../components/TalepFormu/ÇamaşırTalepFormu'
import Authorized from '../layouts/Authorized'

export const Queue = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Authorized>
			<IonButton expand="block" onClick={() => setIsOpen(true)}>
				Çamaşır Talebi Oluştur
			</IonButton>
			<ÇamaşırTalepFormu isOpen={isOpen} setIsOpen={setIsOpen} />
		</Authorized>
	)
}

export default Queue
