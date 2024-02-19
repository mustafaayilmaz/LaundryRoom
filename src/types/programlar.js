/**
 *
 * @param {number} minutes
 */
const convertMinutesToMilliSeconds = minutes => {
	return minutes * 60_000
}

const sentetik = {
	value: 'Sentetik (2.5 Saat)',
	duration: convertMinutesToMilliSeconds(150)
}

const mix = {
	value: 'Mix (2 Saat)',
	duration: convertMinutesToMilliSeconds(120)
}

const pamuklu = {
	value: 'Pamuklu (3 Saat)',
	duration: convertMinutesToMilliSeconds(180)
}

export const yıkamaProgramları = {
	sentetik,
	mix,
	pamuklu
}

export const sıcaklıklar = [{ value: '30°' }, { value: '40°' }, { value: '60°' }]

// Todo: Kurutma programlarının sürelerini düzenle

const pamukluDolapKuruluğu = {
	value: 'Pamuklu Dolap Kuruluğu (3 Saat)',
	duration: convertMinutesToMilliSeconds(180)
}

const sentetikDolapKuruluğu = {
	value: 'Sentetik Dolap Kuruluğu (2 Saat)',
	duration: convertMinutesToMilliSeconds(180)
}

const spor = {
	value: 'Spor (2 Saat)',
	duration: convertMinutesToMilliSeconds(180)
}

const karışık = {
	value: 'Karışık (2.5 Saat)',
	duration: convertMinutesToMilliSeconds(180)
}

export const kurutmaProgramları = {
	pamukluDolapKuruluğu,
	sentetikDolapKuruluğu,
	spor,
	karışık
}
