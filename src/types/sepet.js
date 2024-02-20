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

const örnekSepet = {
	kurutmaProgramı: 'Spor (2 Saat)',
	yıkamaSıcaklığı: '30°',
	yumuşatıcıVar: true,
	yıkamaProgramı: 'Pamuklu (3 Saat)',
	uid: 'HWXFZAQVICflZ4GCX5YaDZ2lkg13',
	ekBilgi: '',
	durum: 'Sırada',
	deterjanVar: true,
	tarih: 1708426603986
}
const kurutmaYok = {
	kurutmaProgramı: 'Spor (2 Saat)',
	yıkamaSıcaklığı: '30°',
	yumuşatıcıVar: true,
	yıkamaProgramı: 'Pamuklu (3 Saat)',
	uid: 'HWXFZAQVICflZ4GCX5YaDZ2lkg13',
	ekBilgi: '',
	durum: 'Sırada',
	deterjanVar: true,
	tarih: 1708426603986
}

export const örnekSepetler = [örnekSepet, kurutmaYok]
