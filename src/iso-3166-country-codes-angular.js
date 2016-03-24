'use strict';

angular.module('iso-3166-country-codes', [])
  .factory('ISO3166', function() {
    var holder = {};

    holder.codeToCountry = {
      'AF': 'Afghanistan',
      'AX': 'Åland Islands',
      'AL': 'Albania',
      'DZ': 'Algeria',
      'AS': 'American Samoa',
      'AD': 'Andorra',
      'AO': 'Angola',
      'AI': 'Anguilla',
      'AQ': 'Antarctica',
      'AG': 'Antigua and Barbuda',
      'AR': 'Argentina',
      'AM': 'Armenia',
      'AW': 'Aruba',
      'AU': 'Australia',
      'AT': 'Austria',
      'AZ': 'Azerbaijan',
      'BS': 'Bahamas',
      'BH': 'Bahrain',
      'BD': 'Bangladesh',
      'BB': 'Barbados',
      'BY': 'Belarus',
      'BE': 'Belgium',
      'BZ': 'Belize',
      'BJ': 'Benin',
      'BM': 'Bermuda',
      'BT': 'Bhutan',
      'BO': 'Bolivia, Plurinational State of',
      'BQ': 'Bonaire, Sint Eustatius and Saba',
      'BA': 'Bosnia and Herzegovina',
      'BW': 'Botswana',
      'BV': 'Bouvet Island',
      'BR': 'Brazil',
      'IO': 'British Indian Ocean Territory',
      'BN': 'Brunei Darussalam',
      'BG': 'Bulgaria',
      'BF': 'Burkina Faso',
      'BI': 'Burundi',
      'KH': 'Cambodia',
      'CM': 'Cameroon',
      'CA': 'Canada',
      'CV': 'Cape Verde',
      'KY': 'Cayman Islands',
      'CF': 'Central African Republic',
      'TD': 'Chad',
      'CL': 'Chile',
      'CN': 'China',
      'CX': 'Christmas Island',
      'CC': 'Cocos (keeling) Islands',
      'CO': 'Colombia',
      'KM': 'Comoros',
      'CG': 'Congo',
      'CD': 'Congo, The Democratic Republic of The',
      'CK': 'Cook Islands',
      'CR': 'Costa Rica',
      'CI': 'Côte D\'Ivoire',
      'HR': 'Croatia',
      'CU': 'Cuba',
      'CW': 'Curaçao',
      'CY': 'Cyprus',
      'CZ': 'Czech Republic',
      'DK': 'Denmark',
      'DJ': 'Djibouti',
      'DM': 'Dominica',
      'DO': 'Dominican Republic',
      'EC': 'Ecuador',
      'EG': 'Egypt',
      'SV': 'El Salvador',
      'GQ': 'Equatorial Guinea',
      'ER': 'Eritrea',
      'EE': 'Estonia',
      'ET': 'Ethiopia',
      'FK': 'Falkland Islands (malvinas)',
      'FO': 'Faroe Islands',
      'FJ': 'Fiji',
      'FI': 'Finland',
      'FR': 'France',
      'GF': 'French Guiana',
      'PF': 'French Polynesia',
      'TF': 'French Southern Territories',
      'GA': 'Gabon',
      'GM': 'Gambia',
      'GE': 'Georgia',
      'DE': 'Germany',
      'GH': 'Ghana',
      'GI': 'Gibraltar',
      'GR': 'Greece',
      'GL': 'Greenland',
      'GD': 'Grenada',
      'GP': 'Guadeloupe',
      'GU': 'Guam',
      'GT': 'Guatemala',
      'GG': 'Guernsey',
      'GN': 'Guinea',
      'GW': 'Guinea-bissau',
      'GY': 'Guyana',
      'HT': 'Haiti',
      'HM': 'Heard Island and Mcdonald Islands',
      'VA': 'Holy See (vatican City State)',
      'HN': 'Honduras',
      'HK': 'Hong Kong',
      'HU': 'Hungary',
      'IS': 'Iceland',
      'IN': 'India',
      'ID': 'Indonesia',
      'IR': 'Iran, Islamic Republic of',
      'IQ': 'Iraq',
      'IE': 'Ireland',
      'IM': 'Isle of Man',
      'IL': 'Israel',
      'IT': 'Italy',
      'JM': 'Jamaica',
      'JP': 'Japan',
      'JE': 'Jersey',
      'JO': 'Jordan',
      'KZ': 'Kazakhstan',
      'KE': 'Kenya',
      'KI': 'Kiribati',
      'KP': 'Korea, Democratic People\'s Republic of',
      'KR': 'Korea, Republic of',
      'KW': 'Kuwait',
      'KG': 'Kyrgyzstan',
      'LA': 'Lao People\'s Democratic Republic',
      'LV': 'Latvia',
      'LB': 'Lebanon',
      'LS': 'Lesotho',
      'LR': 'Liberia',
      'LY': 'Libya',
      'LI': 'Liechtenstein',
      'LT': 'Lithuania',
      'LU': 'Luxembourg',
      'MO': 'Macao',
      'MK': 'Macedonia, The Former Yugoslav Republic of',
      'MG': 'Madagascar',
      'MW': 'Malawi',
      'MY': 'Malaysia',
      'MV': 'Maldives',
      'ML': 'Mali',
      'MT': 'Malta',
      'MH': 'Marshall Islands',
      'MQ': 'Martinique',
      'MR': 'Mauritania',
      'MU': 'Mauritius',
      'YT': 'Mayotte',
      'MX': 'Mexico',
      'FM': 'Micronesia, Federated States of',
      'MD': 'Moldova, Republic of',
      'MC': 'Monaco',
      'MN': 'Mongolia',
      'ME': 'Montenegro',
      'MS': 'Montserrat',
      'MA': 'Morocco',
      'MZ': 'Mozambique',
      'MM': 'Myanmar',
      'NA': 'Namibia',
      'NR': 'Nauru',
      'NP': 'Nepal',
      'NL': 'Netherlands',
      'NC': 'New Caledonia',
      'NZ': 'New Zealand',
      'NI': 'Nicaragua',
      'NE': 'Niger',
      'NG': 'Nigeria',
      'NU': 'Niue',
      'NF': 'Norfolk Island',
      'MP': 'Northern Mariana Islands',
      'NO': 'Norway',
      'OM': 'Oman',
      'PK': 'Pakistan',
      'PW': 'Palau',
      'PS': 'Palestine, State of',
      'PA': 'Panama',
      'PG': 'Papua New Guinea',
      'PY': 'Paraguay',
      'PE': 'Peru',
      'PH': 'Philippines',
      'PN': 'Pitcairn',
      'PL': 'Poland',
      'PT': 'Portugal',
      'PR': 'Puerto Rico',
      'QA': 'Qatar',
      'RE': 'Réunion',
      'RO': 'Romania',
      'RU': 'Russian Federation',
      'RW': 'Rwanda',
      'BL': 'Saint Barthélemy',
      'SH': 'Saint Helena, Ascension and Tristan Da Cunha',
      'KN': 'Saint Kitts and Nevis',
      'LC': 'Saint Lucia',
      'MF': 'Saint Martin (French Part)',
      'PM': 'Saint Pierre and Miquelon',
      'VC': 'Saint Vincent and The Grenadines',
      'WS': 'Samoa',
      'SM': 'San Marino',
      'ST': 'Sao Tome and Principe',
      'SA': 'Saudi Arabia',
      'SN': 'Senegal',
      'RS': 'Serbia',
      'SC': 'Seychelles',
      'SL': 'Sierra Leone',
      'SG': 'Singapore',
      'SX': 'Sint Maarten (Dutch Part)',
      'SK': 'Slovakia',
      'SI': 'Slovenia',
      'SB': 'Solomon Islands',
      'SO': 'Somalia',
      'ZA': 'South Africa',
      'GS': 'South Georgia and The South Sandwich Islands',
      'SS': 'South Sudan',
      'ES': 'Spain',
      'LK': 'Sri Lanka',
      'SD': 'Sudan',
      'SR': 'Suriname',
      'SJ': 'Svalbard and Jan Mayen',
      'SZ': 'Swaziland',
      'SE': 'Sweden',
      'CH': 'Switzerland',
      'SY': 'Syrian Arab Republic',
      'TW': 'Taiwan, Province of China',
      'TJ': 'Tajikistan',
      'TZ': 'Tanzania, United Republic of',
      'TH': 'Thailand',
      'TL': 'Timor-leste',
      'TG': 'Togo',
      'TK': 'Tokelau',
      'TO': 'Tonga',
      'TT': 'Trinidad and Tobago',
      'TN': 'Tunisia',
      'TR': 'Turkey',
      'TM': 'Turkmenistan',
      'TC': 'Turks and Caicos Islands',
      'TV': 'Tuvalu',
      'UG': 'Uganda',
      'UA': 'Ukraine',
      'AE': 'United Arab Emirates',
      'GB': 'United Kingdom',
      'US': 'United States',
      'UM': 'United States Minor Outlying Islands',
      'UY': 'Uruguay',
      'UZ': 'Uzbekistan',
      'VU': 'Vanuatu',
      'VE': 'Venezuela, Bolivarian Republic of',
      'VN': 'Viet Nam',
      'VG': 'Virgin Islands, British',
      'VI': 'Virgin Islands, U.s.',
      'WF': 'Wallis and Futuna',
      'EH': 'Western Sahara',
      'YE': 'Yemen',
      'ZM': 'Zambia',
      'ZW': 'Zimbabwe'
    };

    holder.countryToCode = {};
    holder.countryCodes = [];

    for(var key in holder.codeToCountry) {
      holder.countryToCode[holder.codeToCountry[key]] = key;
      holder.countryCodes.push(key);
    }

    holder.isCountryCode = function(input) {
      if (angular.isString(input)) {
        input = input.toUpperCase();
      }
      return angular.isDefined(this.codeToCountry[input]);
    };

    holder.getCountryCode = function(countryName, manipulator) {
      var countryCode = this.countryToCode[countryName.toUpperCase()];
      manipulator = manipulator ? manipulator : 'toUpperCase';

      return countryCode && countryCode[manipulator]();
    };

    holder.getCountryName = function(countryCode, manipulator) {
      manipulator = manipulator ? manipulator : 'toString';

      return this.codeToCountry[countryCode] && this.codeToCountry[countryCode][manipulator]();
    };

    holder.getCountryNames = function(countryCodes, manipulator) {
      manipulator = manipulator ? manipulator : 'toString';

      var countries = {};
      angular.forEach(countryCodes, function(key) {
        if (holder.isCountryCode(key)) {
          countries[key] = holder.getCountryName(key, manipulator);
        }
      });
      return countries;
    };

    return holder;
  })
  .filter('isoCountry', ['ISO3166', function(ISO3166){
    return function (input) {
      var result = ISO3166.getCountryName(input);
      return angular.isUndefined(result) ? input : result;
    };
  }])
  .filter('isoCountryCode', ['ISO3166', function(ISO3166){
    return function (input) {
      var result = ISO3166.getCountryCode(input);
      return angular.isUndefined(result) ? input : result;
    };
  }])
  .directive('countryCode', ['ISO3166', function(ISO3166) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if(ISO3166.isCountryCode(viewValue)) {
            ctrl.$setValidity('countrycode', true);
            return viewValue;
          } else {
            ctrl.$setValidity('countrycode', false);
            return undefined;
          }
        });
      }
    };
  }]);
