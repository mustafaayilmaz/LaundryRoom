class User {
	/**
	 *
	 * @param {string} uid
	 * @param {number} vestiyerNo
	 * @param {number} bakiye
	 * @param {string} rol
	 * @param {string[]} sepetler
	 */
	constructor(uid, vestiyerNo, bakiye, rol, sepetler) {
		this.uid = uid
		this.vestiyerNo = vestiyerNo
		this.bakiye = bakiye
		this.rol = rol
		this.sepetler = sepetler
	}
}

export default User
