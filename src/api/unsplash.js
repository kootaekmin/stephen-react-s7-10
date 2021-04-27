import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: `Client-ID 0zonC5vUf25XWCDcUaFeGPWYWVn1HBMx_4aq2qImTIM`,
	},
});
