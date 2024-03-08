class User {
	/**
	 *
	 * @param {string} uid
	 * @param {number} no
	 * @param {number} bakiye
	 * @param {string} rol
	 * @param {string[]} sepetler
	 */
	constructor(uid, no, bakiye, rol, sepetler) {
		this.uid = uid
		this.no = no
		this.bakiye = bakiye
		this.rol = rol
		this.sepetler = sepetler
	}
}

export default User
