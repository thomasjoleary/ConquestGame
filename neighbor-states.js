let neighborStates = [
  {
    "Code": "USAL",
    "Neighborcodes": [ "USFL", "USGA", "USMS", "USTN" ],
    "Name": "Alabama",
    "Owner": null
  },
  {
    "Code": "USAR",
    "Neighborcodes": [ "USLA", "USMO", "USMS", "USOK", "USTN", "USTX" ],
    "Name": "Arkansas",
    "Owner": null
  },
  {
    "Code": "USAZ",
    "Neighborcodes": [ "USCA", "USCO", "USNM", "USNV", "USUT" ],
    "Name": "Arizona",
    "Owner": null
  },
  {
    "Code": "USCA",
    "Neighborcodes": [ "USAZ", "USNV", "USOR" ],
    "Name": "California",
    "Owner": null
  },
  {
    "Code": "USCO",
    "Neighborcodes": [ "USAZ", "USKS", "USNE", "USNM", "USOK", "USUT", "USWY" ],
    "Name": "Colorado",
    "Owner": null
  },
  {
    "Code": "USCT",
    "Neighborcodes": [ "USMA", "USNY", "USRI" ],
    "Name": "Connecticut",
    "Owner": null
  },
  {
    "Code": "USDE",
    "Neighborcodes": [ "USMD", "USNJ", "USPA" ],
    "Name": "Delaware",
    "Owner": null
  },
  {
    "Code": "USFL",
    "Neighborcodes": [ "USAL", "USGA" ],
    "Name": "Florida",
    "Owner": null
  },
  {
    "Code": "USGA",
    "Neighborcodes": [ "USAL", "USFL", "USNC", "USSC", "USTN" ],
    "Name": "Georgia",
    "Owner": null
  },
  {
    "Code": "USIA",
    "Neighborcodes": [ "USIL", "USMN", "USMO", "USNE", "USSD", "USWI" ],
    "Name": "Iowa",
    "Owner": null
  },
  {
    "Code": "USID",
    "Neighborcodes": [ "USMT", "USNV", "USOR", "USUT", "USWA", "USWY" ],
    "Name": "Idaho",
    "Owner": null
  },
  {
    "Code": "USIL",
    "Neighborcodes": [ "USIA", "USIN", "USKY", "USMO", "USWI" ],
    "Name": "Illinois",
    "Owner": null
  },
  {
    "Code": "USIN",
    "Neighborcodes": [ "USIL", "USKY", "USMO", "USWI" ],
    "Name": "Indiana",
    "Owner": null
  },
  {
    "Code": "USKS",
    "Neighborcodes": [ "USCO", "USMO", "USNE", "USOK" ],
    "Name": "Kansas",
    "Owner": null
  },
  {
    "Code": "USKY",
    "Neighborcodes": [ "USIL", "USIN", "USMO", "USOH", "USTN", "USVA", "USWV" ],
    "Name": "Kentucky",
    "Owner": null
  },
  {
    "Code": "USLA",
    "Neighborcodes": [ "USAR", "USMS", "USTX" ],
    "Name": "Louisiana",
    "Owner": null
  },
  {
    "Code": "USMA",
    "Neighborcodes": [ "USCT", "USNH", "USNY", "USRI", "USVT" ],
    "Name": "Massachusetts",
    "Owner": null
  },
  {
    "Code": "USMD",
    "Neighborcodes": [ "USDE", "USPA", "USVA", "USWV" ],
    "Name": "Maryland",
    "Owner": null
  },
  {
    "Code": "USME",
    "Neighborcodes": [ "USNH" ],
    "Name": "Maine",
    "Owner": null
  },
  {
    "Code": "USMI",
    "Neighborcodes": [ "USIN", "USOH", "USWI" ],
    "Name": "Michigan",
    "Owner": null
  },
  {
    "Code": "USMN",
    "Neighborcodes": [ "USIA", "USND", "USSD", "USWI" ],
    "Name": "Minnesota",
    "Owner": null
  },
  {
    "Code": "USMO",
    "Neighborcodes": [ "USAR", "USIA", "USIL", "USKS", "USKY", "USNE", "USOK", "USTN" ],
    "Name": "Missouri",
    "Owner": null
  },
  {
    "Code": "USMS",
    "Neighborcodes": [ "USAL", "USAR", "USLA", "USTN" ],
    "Name": "Mississippi",
    "Owner": null
  },
  {
    "Code": "USMT",
    "Neighborcodes": [ "USID", "USND", "USSD", "USWY" ],
    "Name": "Montana",
    "Owner": null
  },
  {
    "Code": "USNC",
    "Neighborcodes": [ "USGA", "USSC", "USTN", "USVA" ],
    "Name": "North Carolina",
    "Owner": null
  },
  {
    "Code": "USND",
    "Neighborcodes": [ "USMN", "USMT", "USSD" ],
    "Name": "North Dakota",
    "Owner": null
  },
  {
    "Code": "USNE",
    "Neighborcodes": [ "USCO", "USIA", "USKS", "USMO", "USSD", "USWY" ],
    "Name": "Nebraska",
    "Owner": null
  },
  {
    "Code": "USNH",
    "Neighborcodes": [ "USMA", "USME", "USVT" ],
    "Name": "New Hampshire",
    "Owner": null
  },
  {
    "Code": "USNJ",
    "Neighborcodes": [ "USDE", "USNY", "USPA" ],
    "Name": "New Jersey",
    "Owner": null
  },
  {
    "Code": "USNM",
    "Neighborcodes": [ "USAZ", "USCO", "USOK", "USTX", "USUT" ],
    "Name": "New Mexico",
    "Owner": null
  },
  {
    "Code": "USNV",
    "Neighborcodes": [ "USAZ", "USCA", "USID", "USOR", "USUT" ],
    "Name": "Nevada",
    "Owner": null
  },
  {
    "Code": "USNY",
    "Neighborcodes": [ "USCT", "USMA", "USNJ", "USPA", "USVT" ],
    "Name": "New York",
    "Owner": null
  },
  {
    "Code": "USOH",
    "Neighborcodes": [ "USIN", "USKY", "USMI", "USPA", "USWV" ],
    "Name": "Ohio",
    "Owner": null
  },
  {
    "Code": "USOK",
    "Neighborcodes": [ "USAR", "USCO", "USKS", "USMO", "USNM", "USTX" ],
    "Name": "Oklahoma",
    "Owner": null
  },
  {
    "Code": "USOR",
    "Neighborcodes": [ "USCA", "USID", "USNV", "USWA" ],
    "Name": "Oregon",
    "Owner": null
  },
  {
    "Code": "USPA",
    "Neighborcodes": [ "USDE", "USMD", "USNJ", "USNY", "USOH", "USWV" ],
    "Name": "Pennsylvania",
    "Owner": null
  },
  {
    "Code": "USRI",
    "Neighborcodes": [ "USCT", "USMA" ],
    "Name": "Rhode Island",
    "Owner": null
  },
  {
    "Code": "USSC",
    "Neighborcodes": [ "USGA", "USNC" ],
    "Name": "South Carolina",
    "Owner": null
  },
  {
    "Code": "USSD",
    "Neighborcodes": [ "USIA", "USMN", "USMT", "USND", "USNE", "USWY" ],
    "Name": "South Dakota",
    "Owner": null
  },
  {
    "Code": "USTN",
    "Neighborcodes": [ "USAL", "USAR", "USGA", "USKY", "USMO", "USMS", "USNC", "USVA" ],
    "Name": "Tennessee",
    "Owner": null
  },
  {
    "Code": "USTX",
    "Neighborcodes": [ "USAR", "USLA", "USNM", "USOK" ],
    "Name": "Texas",
    "Owner": null
  },
  {
    "Code": "USUT",
    "Neighborcodes": [ "USAZ", "USCO", "USID", "USNM", "USNV", "USWY" ],
    "Name": "Utah",
    "Owner": null
  },
  {
    "Code": "USVA",
    "Neighborcodes": [ "USKY", "USMD", "USNC", "USTN", "USWV" ],
    "Name": "Virginia",
    "Owner": null
  },
  {
    "Code": "USVT",
    "Neighborcodes": [ "USMA", "USNH", "USNY" ],
    "Name": "Vermont",
    "Owner": null
  },
  {
    "Code": "USWA",
    "Neighborcodes": [ "USID", "USOR" ],
    "Name": "Washington",
    "Owner": null
  },
  {
    "Code": "USWI",
    "Neighborcodes": [ "USIA", "USIL", "USMI", "USMN" ],
    "Name": "Wisconsin",
    "Owner": null
  },
  {
    "Code": "USWV",
    "Neighborcodes": [ "USKY", "USMD", "USOH", "USPA", "USVA" ],
    "Name": "West Virginia",
    "Owner": null
  },
  {
    "Code": "USWY",
    "Neighborcodes": [ "USCO", "USID", "USMT", "USNE", "USSD", "USUT" ],
    "Name": "Wyoming",
    "Owner": null
  }
]
