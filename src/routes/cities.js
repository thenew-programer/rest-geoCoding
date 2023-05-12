const express = require('express');
const https = require('https');
const router = express.Router();
let url = `https://geocoding-api.open-meteo.com/v1/search?name=`;
let city = null;


router.use(express.json());
router.get("/:name", (req, res) => {
	let name = req.params.name + '&count=1';

	// Using GeoCoding API to get the info
	https.get(url + name, (response) => {

		console.log(response.statusCode);
		response.on('data', (data) => {
			let re = JSON.parse(data);
			city = {
				id: re.results[0].id,
				city: re.results[0].name,
				latitude: re.results[0].latitude,
				longitude: re.results[0].longitude,
				timezone: re.results[0].timezone,
				population: re.results[0].population,
				country_code: re.results[0].country_code,
				country: re.results[0].country,
				country_id: re.results[0].country_id
			}
			console.log(city);
			res.status(200).json(city);
		})
	})

	// res.status(200).json({
	// 	message: 'You got to the cities route'
	// });
})

module.exports = router;
