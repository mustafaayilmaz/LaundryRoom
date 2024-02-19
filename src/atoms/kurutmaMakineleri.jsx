import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const kurutmaMakineleri = atom({
	key: 'kurutmaMakineleri',
	default: [],
	effects_UNSTABLE: [persistAtom]
})

export default kurutmaMakineleri
