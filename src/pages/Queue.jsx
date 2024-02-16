import { IonFab, IonFabButton, IonIcon } from '@ionic/react'
import { addOutline } from 'ionicons/icons'

import React, { useState } from 'react'
import TalebeSepet from '../components/Sepet/TalebeSepet'
import ÇamaşırcıSepet from '../components/Sepet/ÇamaşırcıSepet'
import ÇamaşırcıSepetModal from '../components/Sepet/ÇamaşırcıSepetModal'
import ÇamaşırTalepFormu from '../components/TalepFormu/ÇamaşırTalepFormu'
import Authorized from '../layouts/Authorized'
import { örnekSepetler } from '../types/sepet'

export const Queue = () => {
	const [isOpen, setIsOpen] = useState(false)

	const [selectedSepet, setSelectedSepet] = useState({})

	const [isSepetOpen, setIsSepetOpen] = useState(false)

	return (
		<Authorized>
			{örnekSepetler.map((sepet, i) => (
				<TalebeSepet key={i} sepet={sepet} />
			))}

			<p>Çamaşırcı</p>

			{örnekSepetler.map((sepet, i) => (
				<ÇamaşırcıSepet key={i} sepet={sepet} setIsSepetOpen={setIsSepetOpen} setSelectedSepet={setSelectedSepet} />
			))}

			<ÇamaşırcıSepetModal sepet={selectedSepet} isSepetOpen={isSepetOpen} setIsSepetOpen={setIsSepetOpen} />

			<IonFab vertical="bottom" horizontal="end">
				<IonFabButton onClick={() => setIsOpen(true)}>
					<IonIcon icon={addOutline}></IonIcon>
				</IonFabButton>
			</IonFab>
			<ÇamaşırTalepFormu isOpen={isOpen} setIsOpen={setIsOpen} />
		</Authorized>
	)
}

export default Queue
