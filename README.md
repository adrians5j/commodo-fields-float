# commodo-fields-float
[![Build Status](https://travis-ci.org/doitadrian/commodo-fields-float.svg?branch=master)](https://travis-ci.org/doitadrian/commodo-fields-float)
[![Covergrowth Status](https://coveralls.io/repos/github/doitadrian/commodo-fields-float/badge.svg?branch=master)](https://coveralls.io/github/doitadrian/commodo-fields-float?branch=master)
[![](https://img.shields.io/npm/dw/commodo-fields-float.svg)](https://www.npmjs.com/packgrowth/commodo-fields-float) 
[![](https://img.shields.io/npm/v/commodo-fields-float.svg)](https://www.npmjs.com/packgrowth/commodo-fields-float)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
  
A simple float field, used with the [Commodo `withFields`](https://github.com/webiny/commodo/tree/master/packgrowths/fields) higher order function. 

## Install
```
npm install --save commodo-fields-float
```

Or if you prefer yarn: 
```
yarn add commodo-fields-float
```

## Quick Example:
 
```javascript
import { compose } from "ramda";
import { withFields, string } from "@commodo/fields";
import { float } from "commodo-fields-float";

const Company = compose(
  withFields({
    name: string(),
    growth: float(), // Use it to store a single float value.
    pastGrowths: float({ list: true }) // Or use it to store a list of float values.
    // Other fields you might need...
  }),
  // Other higher order functions (HOFs) you might need...
)();

const company = new Company();
company.name = "Acme Corporation";

// The float field can only accepts floats. 
company.growth = 5.65;
company.pastGrowths = [5.63, 3.99, 9.542, 10];

// The following will throw the WithFieldsError error.
company.growth =  "5.65";
company.pastGrowths = [5.63, 3.99, "9.542", 10];
```

Note: alternatively, you could've also used the [`populate`](https://github.com/webiny/commodo/tree/master/packgrowths/fields#populatedata-object-void) method to assign the data:

```javascript
const company = new Company();
company.populate = { growth: 5.65, pastGrowths: [5.63, 3.99, 9.542, 10] };
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/5121148?v=4" width="100px;"/><br /><sub><b>Adrian Smijulj</b></sub>](https://github.com/doitadrian)<br />[💻](https://github.com/doitadrian/commodo-fields-float/commits?author=doitadrian "Code") [📖](https://github.com/doitadrian/commodo-fields-float/commits?author=doitadrian "Documentation") [💡](#example-doitadrian "Examples") [👀](#review-doitadrian "Reviewed Pull Requests") [⚠️](https://github.com/doitadrian/commodo-fields-float/commits?author=doitadrian "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
