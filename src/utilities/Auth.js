import axios from 'axios'
import Storage from './Storage'

const LAMBDA_URL = 'https://l9poitcws4.execute-api.us-east-1.amazonaws.com/prod'

export function createAuthToken() {
  console.log("Creating Auth token")
  return axios.post(`${LAMBDA_URL}/auth`, {})
    .then(async (response) => {
      const token  = response.data.token

      Storage.save({
      	key: 'token',   // Note: Do not use underscore("_") in key!
      	data: token,

      	// if not specified, the defaultExpires will be applied instead.
      	// if set to null, then it will never expire.
      	expires: 1000 * 3600 * 24
      })
    })
}

export function getOrCreateAuthToken() {
  Storage.load({
  	key: 'token',

  	// autoSync(default true) means if data not found or expired,
  	// then invoke the corresponding sync method
  	autoSync: true,

  	// syncInBackground(default true) means if data expired,
  	// return the outdated data first while invoke the sync method.
  	// It can be set to false to always return data provided by sync method when expired.(Of course it's slower)
  	syncInBackground: true,

  	// you can pass extra params to sync method
  	// see sync example below for example
  	syncParams: {
  	  extraFetchOptions: {
  	    // blahblah
  	  },
  	  someFlag: true,
  	},
  }).then(token => {
    console.log("TOKEN", token)
    return token
  }).catch(err => {
  	// any exception including data not found
  	// goes to catch()
  	console.warn(err.message)
  	switch (err.name) {
	    case 'NotFoundError':
        console.log("Token not found error")
        createAuthToken()
        break;
      case 'ExpiredError':
        console.log("Token expired")
        createAuthToken()
        break;
  	}
    return null
  })
}

export async function getTokenFromStorage() {
  return await Storage.load({
  	key: 'token',
  	autoSync: true,
  	syncInBackground: true,
  })
}
