import axios from 'axios'
import { AsyncStorage } from 'react-native'

const LAMBDA_URL = 'https://l9poitcws4.execute-api.us-east-1.amazonaws.com/prod'

export function createAuthToken() {
  console.log("Creating Auth token")
  return axios.post(`${LAMBDA_URL}/auth`, {})
    .then(async (response) => {
      console.log("rereresponse", response.data.token)
      const token  = response.data.token
      return await AsyncStorage.setItem('@TokenStore:authToken', token)
    })
}

export function checkOrCreateAuthToken() {
  checkStorageForToken().then(token => {
    if (!token) {
      console.log("no token...creating one")
      createAuthToken()
    } else {
      console.log(`The token ${token} is stored on this device`)
    }
  })
}

// move this to a helper method
export async function checkStorageForToken() {
  try {
    const token = await AsyncStorage.getItem('@TokenStore:authToken');
    if (token !== null){
      // We have data!!
      console.log("TOKEN", token)
      return token
    }
    return null
  } catch (error) {
    return null
  }
}
