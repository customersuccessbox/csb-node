### CSB Node | Browser Package to Send Events

#### Using npm:
```shell script
$ npm i csb-node --save
```

#### Using in Browser:
```html
<script src="https://unpkg.com/csb-node@1.0.1/dist/web/csb.min.js"></script>
<script type="text/javascript">
    let CSB = window['CSB']['default'];
    let CSBInstance = new CSB(
      'https://{{domain}}.customersuccessbox.com',
      '{{secret}}'
    );
</script>
```

##### Create CSB Instance: Node|React|Vue
```javascript
import CSB from 'csb-node';
// let CSB = require('csb-node').default;

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
##### Account [account(account_id, traits = [])]
```javascript
CSBInstance.account('Account1', {'trait1' : 'value1', 'trait2' : 'value2', 'custom_Field' : 'custom_value'});
```
##### User [user(account_id, user_id, traits = [])]
```javascript
CSBInstance.user('Account1', 'User1', {'trait1' : 'value1', 'trait2' : 'value2', 'custom_Field' : 'custom_value'});
```
##### Subscription [subscription(account_id, subscription_id, params = [])]
```javascript
CSBInstance.subscription('Account1', 'Subscription1', {'param1' : 'value1', 'param2' : 'value2'});
```

##### Subscription [invoice(account_id = null, subscription_id = null, invoice_id, params = [])]
```javascript
CSBInstance.invoice('Account1', null, 'Invoice1', {'param1' : 'value1', 'param2' : 'value2'});
CSBInstance.invoice(null, 'Subscription1', 'Invoice1', {'param1' : 'value1', 'param2' : 'value2'});
```

##### Feature [feature(account_id, user_id, product_id, module_id, feature_id, total = 1)]
```javascript
CSBInstance.feature('Account1', 'User1', 'ProductName', 'ModuleName', 'FeatureName', 10);
```

