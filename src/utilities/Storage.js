import Storage from 'react-native-storage'
import { AsyncStorage } from 'react-native'

import { createAuthToken } from './Auth'

const storage = new Storage({
  // maximum capacity, default 1000
  size: 1000,

  storageBackend: AsyncStorage,

  // can be null, which means never expire.
  defaultExpires: null,

  // cache data in the memory. default is true.
  enableCache: true,

  sync: {
    // Maybe add the token here later once you come up with an elegant solution for not triggering too many calls to lambda
    token (params) {
      createAuthToken()
    }
  }
})

export default storage
