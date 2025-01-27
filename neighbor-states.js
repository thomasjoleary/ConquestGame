let neighborStates = [
  {
    "Code": "USAL",
    "Neighborcodes": [ "USFL", "USGA", "USMS", "USTN" ],
    "Name": "Alabama",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USAR",
    "Neighborcodes": [ "USLA", "USMO", "USMS", "USOK", "USTN", "USTX" ],
    "Name": "Arkansas",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USAZ",
    "Neighborcodes": [ "USCA", "USCO", "USNM", "USNV", "USUT" ],
    "Name": "Arizona",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USCA",
    "Neighborcodes": [ "USAZ", "USNV", "USOR" ],
    "Name": "California",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USCO",
    "Neighborcodes": [ "USAZ", "USKS", "USNE", "USNM", "USOK", "USUT", "USWY" ],
    "Name": "Colorado",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USCT",
    "Neighborcodes": [ "USMA", "USNY", "USRI" ],
    "Name": "Connecticut",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USDE",
    "Neighborcodes": [ "USMD", "USNJ", "USPA" ],
    "Name": "Delaware",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USFL",
    "Neighborcodes": [ "USAL", "USGA" ],
    "Name": "Florida",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USGA",
    "Neighborcodes": [ "USAL", "USFL", "USNC", "USSC", "USTN" ],
    "Name": "Georgia",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USIA",
    "Neighborcodes": [ "USIL", "USMN", "USMO", "USNE", "USSD", "USWI" ],
    "Name": "Iowa",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USID",
    "Neighborcodes": [ "USMT", "USNV", "USOR", "USUT", "USWA", "USWY" ],
    "Name": "Idaho",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USIL",
    "Neighborcodes": [ "USIA", "USIN", "USKY", "USMO", "USWI" ],
    "Name": "Illinois",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USIN",
    "Neighborcodes": [ "USIL", "USKY", "USMO", "USWI" ],
    "Name": "Indiana",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USKS",
    "Neighborcodes": [ "USCO", "USMO", "USNE", "USOK" ],
    "Name": "Kansas",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USKY",
    "Neighborcodes": [ "USIL", "USIN", "USMO", "USOH", "USTN", "USVA", "USWV" ],
    "Name": "Kentucky",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USLA",
    "Neighborcodes": [ "USAR", "USMS", "USTX" ],
    "Name": "Louisiana",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USMA",
    "Neighborcodes": [ "USCT", "USNH", "USNY", "USRI", "USVT" ],
    "Name": "Massachusetts",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USMD",
    "Neighborcodes": [ "USDE", "USPA", "USVA", "USWV" ],
    "Name": "Maryland",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USME",
    "Neighborcodes": [ "USNH" ],
    "Name": "Maine",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USMI",
    "Neighborcodes": [ "USIN", "USOH", "USWI" ],
    "Name": "Michigan",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USMN",
    "Neighborcodes": [ "USIA", "USND", "USSD", "USWI" ],
    "Name": "Minnesota",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USMO",
    "Neighborcodes": [ "USAR", "USIA", "USIL", "USKS", "USKY", "USNE", "USOK", "USTN" ],
    "Name": "Missouri",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USMS",
    "Neighborcodes": [ "USAL", "USAR", "USLA", "USTN" ],
    "Name": "Mississippi",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USMT",
    "Neighborcodes": [ "USID", "USND", "USSD", "USWY" ],
    "Name": "Montana",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USNC",
    "Neighborcodes": [ "USGA", "USSC", "USTN", "USVA" ],
    "Name": "North Carolina",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USND",
    "Neighborcodes": [ "USMN", "USMT", "USSD" ],
    "Name": "North Dakota",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USNE",
    "Neighborcodes": [ "USCO", "USIA", "USKS", "USMO", "USSD", "USWY" ],
    "Name": "Nebraska",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USNH",
    "Neighborcodes": [ "USMA", "USME", "USVT" ],
    "Name": "New Hampshire",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USNJ",
    "Neighborcodes": [ "USDE", "USNY", "USPA" ],
    "Name": "New Jersey",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USNM",
    "Neighborcodes": [ "USAZ", "USCO", "USOK", "USTX", "USUT" ],
    "Name": "New Mexico",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USNV",
    "Neighborcodes": [ "USAZ", "USCA", "USID", "USOR", "USUT" ],
    "Name": "Nevada",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USNY",
    "Neighborcodes": [ "USCT", "USMA", "USNJ", "USPA", "USVT" ],
    "Name": "New York",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USOH",
    "Neighborcodes": [ "USIN", "USKY", "USMI", "USPA", "USWV" ],
    "Name": "Ohio",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USOK",
    "Neighborcodes": [ "USAR", "USCO", "USKS", "USMO", "USNM", "USTX" ],
    "Name": "Oklahoma",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USOR",
    "Neighborcodes": [ "USCA", "USID", "USNV", "USWA" ],
    "Name": "Oregon",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USPA",
    "Neighborcodes": [ "USDE", "USMD", "USNJ", "USNY", "USOH", "USWV" ],
    "Name": "Pennsylvania",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USRI",
    "Neighborcodes": [ "USCT", "USMA" ],
    "Name": "Rhode Island",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USSC",
    "Neighborcodes": [ "USGA", "USNC" ],
    "Name": "South Carolina",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USSD",
    "Neighborcodes": [ "USIA", "USMN", "USMT", "USND", "USNE", "USWY" ],
    "Name": "South Dakota",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USTN",
    "Neighborcodes": [ "USAL", "USAR", "USGA", "USKY", "USMO", "USMS", "USNC", "USVA" ],
    "Name": "Tennessee",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USTX",
    "Neighborcodes": [ "USAR", "USLA", "USNM", "USOK" ],
    "Name": "Texas",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USUT",
    "Neighborcodes": [ "USAZ", "USCO", "USID", "USNM", "USNV", "USWY" ],
    "Name": "Utah",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USVA",
    "Neighborcodes": [ "USKY", "USMD", "USNC", "USTN", "USWV" ],
    "Name": "Virginia",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USVT",
    "Neighborcodes": [ "USMA", "USNH", "USNY" ],
    "Name": "Vermont",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USWA",
    "Neighborcodes": [ "USID", "USOR" ],
    "Name": "Washington",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USWI",
    "Neighborcodes": [ "USIA", "USIL", "USMI", "USMN" ],
    "Name": "Wisconsin",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USWV",
    "Neighborcodes": [ "USKY", "USMD", "USOH", "USPA", "USVA" ],
    "Name": "West Virginia",
    "Owner": null,
    "Armies": 0
  },
  {
    "Code": "USWY",
    "Neighborcodes": [ "USCO", "USID", "USMT", "USNE", "USSD", "USUT" ],
    "Name": "Wyoming",
    "Owner": null,
    "Armies": 0
  }
]
