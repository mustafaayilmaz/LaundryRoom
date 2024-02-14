class Sepet {
	/**
	 *
	 * @param {string} id
	 * @param {string} uid
	 * @param {string} program
	 * @param {boolean} kurutmaVar
	 * @param {boolean} deterjanVar
	 * @param {string} durum
	 * @param {string} ekBilgi
	 */
	constructor(id, uid, program, derece, kurutmaVar, deterjanVar, yumuşatıcıVar, durum, ekBilgi) {
		this.id = id
		this.uid = uid
		this.program = program
		this.derece = derece
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
	sırada: 'sırada',
	makinede: 'makinede',
	kurutmada: 'kurutmada',
	bitti: 'bitti'
}
