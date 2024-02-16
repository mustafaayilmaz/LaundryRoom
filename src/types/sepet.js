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
	constructor(id, uid, program, tarih, derece, kurutmaProgramı, kurutmaVar, deterjanVar, yumuşatıcıVar, durum, ekBilgi) {
		this.id = id
		this.uid = uid
		this.program = program
		this.tarih = tarih
		this.derece = derece
		this.kurutmaProgramı = kurutmaProgramı
		this.kurutmaVar = kurutmaVar
		this.deterjanVar = deterjanVar
		this.yumuşatıcıVar = yumuşatıcıVar
		this.durum = durum
		this.ekBilgi = ekBilgi
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

const örnekSepet = new Sepet('595', '982', yıkamaProgramları.pamuklu, new Date(), '30', kurutmaProgramları.sentetikDolapKuruluğu, true, false, true, durum.kurutmada, 'dsflkldkslkşdsflkşsdfşldsşlsdfksdfşlkşlk')
const kurutmaYok = new Sepet('1165', '77', yıkamaProgramları.sentetik, new Date(), '40', null, false, false, true, durum.makinede, '')

export const örnekSepetler = [örnekSepet, kurutmaYok]
