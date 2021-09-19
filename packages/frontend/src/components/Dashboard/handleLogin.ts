import unfetch from 'unfetch';

export default class LoginService {
	private code: string;
	constructor(code: string) {
		this.code = code;
	}

	public async getAccessToken() {
		const response = await unfetch(
			'https://3000-blush-puffin-kwwz1q6q.ws-eu16.gitpod.io/spotify-auth/login',
			{
				method: 'POST',
				body: JSON.stringify({ code: this.code }),
				headers: { 'Content-Type': 'application/json' }
			}
		);
		const data = await response.json();
		return data;
	}
}
