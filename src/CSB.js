import Transport from './Transport'
import lodash from 'lodash'

let CSB = function (endpoint, apiKey) {
  this.transport = new Transport(endpoint, apiKey)
}

CSB.prototype.track = function (event, properties) {
  let data = {
    accountId: properties['account_id'],
    userId: properties['user_id'],
    type: 'track',
    event: event,
    timestamp: new Date().toISOString()
  }

  return this.transport.post('/api_js/v1_1/track', data)
}

CSB.prototype.login = function (accountId, userId) {
  return this.track('User Login', {
    account_id: accountId,
    user_id: userId
  })
}

CSB.prototype.logout = function (accountId, userId) {
  return this.track('User Logout', {
    account_id: accountId,
    user_id: userId
  })
}

CSB.prototype.account = function (accountId, traits) {
  traits = traits || {}

  if (lodash.isEmpty(accountId)) {
    throw 'Invalid Account ID'
  }

  let data = {
    accountId: accountId,
    type: 'account',
    traits: traits,
    timestamp: new Date().toISOString()
  }

  return this.transport.post('/api_js/v1_1/account', data)
}

CSB.prototype.user = function (accountId, userId, traits) {
  traits = traits || {}

  if (lodash.isEmpty(accountId)) {
    throw 'Invalid Account ID'
  }

  if (lodash.isEmpty(userId)) {
    throw 'Invalid User ID'
  }

  let data = {
    accountId: accountId,
    userId: userId,
    type: 'user',
    traits: traits,
    timestamp: new Date().toISOString()
  }

  return this.transport.post('/api_js/v1_1/identify', data)
}

CSB.prototype.feature = function (
  accountId,
  userId,
  productId,
  moduleId,
  featureId,
  total
) {
  total = total || 1

  if (lodash.isEmpty(accountId)) {
    throw 'Invalid Account ID'
  }

  if (lodash.isEmpty(userId)) {
    throw 'Invalid User ID'
  }

  if (lodash.isEmpty(productId)) {
    throw 'Invalid Product ID'
  }

  if (lodash.isEmpty(moduleId)) {
    throw 'Invalid Module ID'
  }

  if (lodash.isEmpty(featureId)) {
    throw 'Invalid Feature ID'
  }

  let data = {
    accountId: accountId,
    userId: userId,
    productId: productId,
    moduleId: moduleId,
    featureId: featureId,
    total: total,
    type: 'feature',
    timestamp: new Date().toISOString()
  }

  return this.transport.post('/api_js/v1_1/feature', data)
}

export default CSB
