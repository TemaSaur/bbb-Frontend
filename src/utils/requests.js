const BASE_URL = 'http://158.160.142.249'

export const get = async (url, headers={}) => {
	const res = await fetch(BASE_URL + url, {
		headers: headers
	})
	const data = await res.json()
	return data
}

export const post = async (url, json, headers={}) => {
	const res = await fetch(BASE_URL + url, {
		body: JSON.stringify(json),
		headers: headers
	})
	const data = await res.json()
	return data
}

export const getDateTimeTime = (datetime) => {
	const addZero = (num) => ('0' + num).slice(-2)

	const date = new Date(datetime)
	return `${addZero(date.getHours() - 5)}:${addZero(date.getMinutes())}`
}
