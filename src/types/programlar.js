/**
 *
 * @param {number} minutes
 */
const convertMinutesToMilliSeconds = minutes => {
	return minutes * 60_000
}

const sentetik = {
	value: 'sentetik',
	label: 'Sentetik (2.5 Saat)',
	duration: convertMinutesToMilliSeconds(150)
}

const mix = {
	value: 'mix',
	label: 'Mix (2 Saat)',
	duration: convertMinutesToMilliSeconds(120)
}

const pamuklu = {
	value: 'pamuklu',
	label: 'Pamuklu (3 Saat)',
	duration: convertMinutesToMilliSeconds(180)
}

export const yıkamaProgramları = {
	sentetik,
	mix,
	pamuklu
}

export const sıcaklıklar = [
	{ value: 30, label: '30°' },
	{ value: 40, label: '40°' },
	{ value: 60, label: '60°' }
]

// Todo: Kurutma programlarının sürelerini düzenle

const pamukluDolapKuruluğu = {
	value: 'pamukluDolapKuruluğu',
	label: 'Pamuklu D. Kuruluğu (3 Saat)',
	duration: convertMinutesToMilliSeconds(180)
}

const sentetikDolapKuruluğu = {
	value: 'sentetikDolapKuruluğu',
	label: 'Sentetik D. Kuruluğu (2 Saat)',
	duration: convertMinutesToMilliSeconds(180)
}

const spor = {
	value: 'spor',
	label: 'Spor (2 Saat)',
	duration: convertMinutesToMilliSeconds(180)
}

const karışık = {
	value: 'Karışık',
	label: 'Karışık (2.5 Saat)',
	duration: convertMinutesToMilliSeconds(180)
}

export const kurutmaProgramları = {
	pamukluDolapKuruluğu,
	sentetikDolapKuruluğu,
	spor,
	karışık
}
