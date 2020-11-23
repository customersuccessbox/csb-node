import Transport from './Transport'
const isRealEmpty = function (value) {
    return value === undefined
        || value === null
        || (typeof value === 'object'
            && Object.keys(value).length === 0)
        || (typeof value === 'string'
            && value.trim().length === 0)
}

let CSB = function (endpoint, apiKey) {
    this.transport = new Transport(endpoint, apiKey)
}

CSB.prototype.login = function (accountId, userId) {
    let data = {
        account_id: accountId,
        user_id: userId,
        type: 'track',
        event: 'User Login',
        timestamp: new Date().toISOString()
    }
    
    return this.transport.post('/api/v1_1/login', data)
}

CSB.prototype.logout = function (accountId, userId) {
    let data = {
        account_id: accountId,
        user_id: userId,
        type: 'track',
        event: 'User Logout',
        timestamp: new Date().toISOString()
    }
    
    return this.transport.post('/api/v1_1/logout', data)
}

CSB.prototype.account = function (accountId, properties) {
    properties = properties || {}
    
    if (isRealEmpty(accountId)) {
        throw 'Invalid Account ID'
    }
    
    properties['account_id'] = accountId;
    
    return this.transport.post('/api/v1_1/account', properties)
}

CSB.prototype.user = function (accountId, userId, properties) {
    properties = properties || {}
    
    if (isRealEmpty(accountId)) {
        throw 'Invalid Account ID'
    }
    
    if (isRealEmpty(userId)) {
        throw 'Invalid User ID'
    }
    
    properties['account_id'] = accountId;
    properties['user_id'] = userId;
    
    return this.transport.post('/api/v1_1/user', properties)
}

CSB.prototype.subscription = function (accountId, subscriptionId, properties) {
    properties = properties || {}
    
    if (isRealEmpty(accountId)) {
        throw 'Invalid Account ID'
    }
    
    if (isRealEmpty(subscriptionId)) {
        throw 'Invalid Subscription ID'
    }
    
    properties['account_id'] = accountId;
    properties['subscription_id'] = subscriptionId;
    
    return this.transport.post('/api/v1_1/subscription', properties)
}

CSB.prototype.invoice = function (accountId, subscriptionId, invoiceId, properties) {
    properties = properties || {}
    
    if (isRealEmpty(accountId)) {
        if (isRealEmpty(subscriptionId)) {
            throw 'Please Provide Subscription ID or Account ID'
        }
    }
    
    if (isRealEmpty(invoiceId)) {
        throw 'Invalid Invoice ID'
    }
    
    if (!isRealEmpty(accountId)) {
        properties['account_id'] = accountId;
    }
    
    if (!isRealEmpty(subscriptionId)) {
        properties['subscription_id'] = subscriptionId;
    }
    
    properties['invoice_id'] = invoiceId;
    
    return this.transport.post('/api/v1_1/invoice', properties)
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
    
    if (isRealEmpty(accountId)) {
        throw 'Invalid Account ID'
    }
    
    if (isRealEmpty(userId)) {
        throw 'Invalid User ID'
    }
    
    if (isRealEmpty(productId)) {
        throw 'Invalid Product ID'
    }
    
    if (isRealEmpty(moduleId)) {
        throw 'Invalid Module ID'
    }
    
    if (isRealEmpty(featureId)) {
        throw 'Invalid Feature ID'
    }
    
    let data = {
        account_id: accountId,
        user_id: userId,
        product_id: productId,
        module_id: moduleId,
        feature_id: featureId,
        total: total,
        type: 'feature',
        timestamp: new Date().toISOString()
    }
    
    return this.transport.post('/api/v1_1/feature', data)
}

export default CSB
