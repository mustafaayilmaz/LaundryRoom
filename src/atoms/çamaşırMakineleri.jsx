import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const çamaşırMakineleri = atom({
	key: 'çamaşırMakineleri',
	default: [],
	effects_UNSTABLE: [persistAtom]
})

export default çamaşırMakineleri
