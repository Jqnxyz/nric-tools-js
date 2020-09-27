# nric-tools
Verify Singapore-issued National Registration Identity Card numbers

## Usage
```js
const nric = require('../index.js');
const input = 'S0000005A';

if (nric.verifyChecksum(input)) {
    console.log("Pass");
    return 1;
} else {
    console.log("Failed");
    return 0;
}
```
