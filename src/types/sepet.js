import { kurutmaProgramları, yıkamaProgramları } from './programlar'

export class Sepet {
	/**
	 *
	 * @param {string} id
	 * @param {string} uid
	 * @param {any} program
	 * @param {Date} tarih
	 * @param {any} kurutmaProgramı
	 * @param {boolean} kurutmaVar
	 * @param {boolean} deterjanVar
	 * @param {boolean} yumuşatıcıVar
	 * @param {number} derece
	 * @param {string} durum
	 * @param {string} ekBilgi
	 */
	constructor(uid, yıkamaProgramı, tarih, derece, kurutmaProgramı, kurutmaVar, deterjanVar, yumuşatıcıVar, durum, ekBilgi) {
		this.uid = uid
		this.yıkamaProgramı = yıkamaProgramı
		this.tarih = tarih
		this.derece = derece
		this.kurutmaProgramı = kurutmaProgramı
		this.kurutmaVar = kurutmaVar
		this.deterjanVar = deterjanVar
		this.yumuşatıcıVar = yumuşatıcıVar
		this.durum = durum
		this.ekBilgi = ekBilgi
		this.id = ''
	}

	// TODO: Implement
	get ücret() {}
}

const durum = {
	sırada: 'Sırada',
	makinede: 'Makinede',
	kurutmada: 'Kurutmada',
	bitti: 'Bitti'
}

const örnekSepet = new Sepet('982', yıkamaProgramları.pamuklu, new Date(), '30', kurutmaProgramları.sentetikDolapKuruluğu, true, false, true, durum.kurutmada, 'dsflkldkslkşdsflkşsdfşldsşlsdfksdfşlkşlk')
const kurutmaYok = new Sepet('77', yıkamaProgramları.sentetik, new Date(), '40', null, false, false, true, durum.makinede, '')

export const örnekSepetler = [örnekSepet, kurutmaYok]
