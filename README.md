## ISO 3166 for Angular JS

This project is an ISO 3166 (Country codes) module for AngularJS. It provides:

* A service (factory) that gives access to all country codes
* A filter to print country codes as their standard name (FR -> FRANCE)
* A validation directive to validate country codes

## Get it

This library is available with the bower package manager, you can either:

* Execute the following command: `bower install iso-3166-country-codes-angular --save`
* Add this line in your dependencies: `"iso-3166-country-codes-angular": "1.0.3"`

## Features

### Factory

You can have access to country codes information and two utilitary methods.

```javascript
// Declare the factory as dependency
angular.module('myApp')
  .controller('MyCtrl', function (ISO3166) {
    // Test if a value is a country code
    console.log(ISO3166.isCountryCode('FR')); // true
    console.log(ISO3166.isCountryCode('FRA')); // false

    // Get country name
    console.log(ISO3166.getCountryName('FR'));
    // FRANCE

    // Get several country names at once (ignores invalid codes)
    console.log(ISO3166.getCountryNames(['DE', 'FR', 'invalid']);
    // {
    //   'DE': 'GERMANY',
    //   'FR': 'FRANCE'
    // }

    // Direct access to the data
    console.log(ISO3166.codeToCountry);
    // {
    //   'FR': 'FRANCE',
    //   ...
    // }

  });
```

### Filter

If you get country codes from your REST server, you can print its standard name with the provided filter:

```html
<!-- if countryCode is 'FR', will print 'FRANCE' -->
<p>{{countryCode | isoCountry }}</p>
```

### Validation directive

If you want users to enter country codes, you can validate it like so (it fits in Angular validation process):

```html
<form name="form" novalidate>
  <input type="text" name="countryField" country-code />
  <span ng-show="form.countryField.$error.countrycode">This must be a country code!</span>
</form>
```

## Issues, Feature request

You can use [Github's issues](https://github.com/BluePyth/iso-3166-country-codes-angular/issues) to submit feature requests and bug reports.

## Contributions

This project gladly accepts contributions. However, you must agree to give your work explicitely to public domain. To do so, just put this statement in the pull request definition:

```
I dedicate any and all copyright interest in this software to the
public domain. I make this dedication for the benefit of the public at
large and to the detriment of my heirs and successors. I intend this
dedication to be an overt act of relinquishment in perpetuity of all
present and future rights to this software under copyright law.
```

## License

This software is given to the public domain. For more information, see the `UNLICENSE` file.
