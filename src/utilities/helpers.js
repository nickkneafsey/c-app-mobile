import _ from 'lodash'

const formatServiceHighScoreKey = (serviceKey) => {
  return `${_.replace(serviceKey, new RegExp('_', 'g'), '-')}HighScore`
}

export default formatServiceHighScoreKey
