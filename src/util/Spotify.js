const clientID = "588801aqou6tSfZEKh4Qz2RSjpTGBLVoeweMn7";
const redirectURI = "http://localhost:3000/";
let accessToken;

const Spotify = {
  getAccessToken() {
    if(accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if(accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      // Set the access token to expire at the value for expiration time and clearing the parameters from the URL

      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;

      window.location = accessUrl;
    }
  }
}

export default Spotify;