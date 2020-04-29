### CSB Node | Browser Package to Send Events

#### Using npm:
```shell script
$ npm i --save csb-node
```

##### Create CSB Instance
```javascript
CSBInstance = new CSB(
    'https://{{domain}}.customersuccessbox.com',
    '{{secret}}'
);
```

#### Functions
##### Login
```javascript
CSBInstance.login('Account1', 'User1');
```
##### Logout
```javascript
CSBInstance.logout('Account1', 'User1');
```
##### Account [account(accountId, traits = [])]
```javascript
CSBInstance.account('Account1', {'trait1' : 'value1', 'trait2' : 'value2', 'custom_Field' : 'custom_value'});
```
##### User [user(accountId, userId, traits = [])]
```javascript
CSBInstance.user('Account1', 'User1', {'trait1' : 'value1', 'trait2' : 'value2', 'custom_Field' : 'custom_value'});
```
##### Feature [feature(accountId, userId, productId, moduleId, featureId, total = 1)]
```javascript
CSBInstance.feature('Account1', 'User1', 'ProductName', 'ModuleName', 'FeatureName', 10);
```
