function isEmpty (data) {
	if(data === undefined || !Object.keys(data).length ){
		return true
	}
	return false
}

module.exports = { isEmpty }