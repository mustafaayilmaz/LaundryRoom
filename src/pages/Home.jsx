import { IonButton } from '@ionic/react'
import { useEffect, useState } from 'react'

export const Home = ({ title }) => {
	const [data, setData] = useState(0)
	useEffect(() => {
		setData(100)
	}, [])
	return (
		<>
			<div>
				SAYAÇ : {data} <IonButton onClick={() => setData(data + 1)}>BİR ARTTIR</IonButton>
			</div>
		</>
	)
}

export default Home
