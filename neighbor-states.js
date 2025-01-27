let neighborStates = [
  {
    "Code": "USAL",
    "Neighborcodes": [ "USFL", "USGA", "USMS", "USTN" ],
    "Name": "Alabama"
  },
  {
    "Code": "USAR",
    "Neighborcodes": [ "USLA", "USMO", "USMS", "USOK", "USTN", "USTX" ],
    "Name": "Arkansas"
  },
  {
    "Code": "USAZ",
    "Neighborcodes": [ "USCA", "USCO", "USNM", "USNV", "USUT" ],
    "Name": "Arizona"
  },
  {
    "Code": "USCA",
    "Neighborcodes": [ "USAZ", "USNV", "USOR" ],
    "Name": "California"
  },
  {
    "Code": "USCO",
    "Neighborcodes": [ "USAZ", "USKS", "USNE", "USNM", "USOK", "USUT", "USWY" ],
    "Name": "Colorado"
  },
  {
    "Code": "USCT",
    "Neighborcodes": [ "USMA", "USNY", "USRI" ],
    "Name": "Connecticut"
  },
  {
    "Code": "USDE",
    "Neighborcodes": [ "USMD", "USNJ", "USPA" ],
    "Name": "Delaware"
  },
  {
    "Code": "USFL",
    "Neighborcodes": [ "USAL", "USGA" ],
    "Name": "Florida"
  },
  {
    "Code": "USGA",
    "Neighborcodes": [ "USAL", "USFL", "USNC", "USSC", "USTN" ],
    "Name": "Georgia"
  },
  {
    "Code": "USIA",
    "Neighborcodes": [ "USIL", "USMN", "USMO", "USNE", "USSD", "USWI" ],
    "Name": "Iowa"
  },
  {
    "Code": "USID",
    "Neighborcodes": [ "USMT", "USNV", "USOR", "USUT", "USWA", "USWY" ],
    "Name": "Idaho"
  },
  {
    "Code": "USIL",
    "Neighborcodes": [ "USIA", "USIN", "USKY", "USMO", "USWI" ],
    "Name": "Illinois"
  },
  {
    "Code": "USIN",
    "Neighborcodes": [ "USIL", "USKY", "USMO", "USWI" ],
    "Name": "Indiana"
  },
  {
    "Code": "USKS",
    "Neighborcodes": [ "USCO", "USMO", "USNE", "USOK" ],
    "Name": "Kansas"
  },
  {
    "Code": "USKY",
    "Neighborcodes": [ "USIL", "USIN", "USMO", "USOH", "USTN", "USVA", "USWV" ],
    "Name": "Kentucky"
  },
  {
    "Code": "USLA",
    "Neighborcodes": [ "USAR", "USMS", "USTX" ],
    "Name": "Louisiana"
  },
  {
    "Code": "USMA",
    "Neighborcodes": [ "USCT", "USNH", "USNY", "USRI", "USVT" ],
    "Name": "Massachusetts"
  },
  {
    "Code": "USMD",
    "Neighborcodes": [ "USDE", "USPA", "USVA", "USWV" ],
    "Name": "Maryland"
  },
  {
    "Code": "USME",
    "Neighborcodes": [ "USNH" ],
    "Name": "Maine"
  },
  {
    "Code": "USMI",
    "Neighborcodes": [ "USIN", "USOH", "USWI" ],
    "Name": "Michigan"
  },
  {
    "Code": "USMN",
    "Neighborcodes": [ "USIA", "USND", "USSD", "USWI" ],
    "Name": "Minnesota"
  },
  {
    "Code": "USMO",
    "Neighborcodes": [ "USAR", "USIA", "USIL", "USKS", "USKY", "USNE", "USOK", "USTN" ],
    "Name": "Missouri"
  },
  {
    "Code": "USMS",
    "Neighborcodes": [ "USAL", "USAR", "USLA", "USTN" ],
    "Name": "Mississippi"
  },
  {
    "Code": "USMT",
    "Neighborcodes": [ "USID", "USND", "USSD", "USWY" ],
    "Name": "Montana"
  },
  {
    "Code": "USNC",
    "Neighborcodes": [ "USGA", "USSC", "USTN", "USVA" ],
    "Name": "North Carolina"
  },
  {
    "Code": "USND",
    "Neighborcodes": [ "USMN", "USMT", "USSD" ],
    "Name": "North Dakota"
  },
  {
    "Code": "USNE",
    "Neighborcodes": [ "USCO", "USIA", "USKS", "USMO", "USSD", "USWY" ],
    "Name": "Nebraska"
  },
  {
    "Code": "USNH",
    "Neighborcodes": [ "USMA", "USME", "USVT" ],
    "Name": "New Hampshire"
  },
  {
    "Code": "USNJ",
    "Neighborcodes": [ "USDE", "USNY", "USPA" ],
    "Name": "New Jersey"
  },
  {
    "Code": "USNM",
    "Neighborcodes": [ "USAZ", "USCO", "USOK", "USTX", "USUT" ],
    "Name": "New Mexico"
  },
  {
    "Code": "USNV",
    "Neighborcodes": [ "USAZ", "USCA", "USID", "USOR", "USUT" ],
    "Name": "Nevada"
  },
  {
    "Code": "USNY",
    "Neighborcodes": [ "USCT", "USMA", "USNJ", "USPA", "USVT" ],
    "Name": "New York"
  },
  {
    "Code": "USOH",
    "Neighborcodes": [ "USIN", "USKY", "USMI", "USPA", "USWV" ],
    "Name": "Ohio"
  },
  {
    "Code": "USOK",
    "Neighborcodes": [ "USAR", "USCO", "USKS", "USMO", "USNM", "USTX" ],
    "Name": "Oklahoma"
  },
  {
    "Code": "USOR",
    "Neighborcodes": [ "USCA", "USID", "USNV", "USWA" ],
    "Name": "Oregon"
  },
  {
    "Code": "USPA",
    "Neighborcodes": [ "USDE", "USMD", "USNJ", "USNY", "USOH", "USWV" ],
    "Name": "Pennsylvania"
  },
  {
    "Code": "USRI",
    "Neighborcodes": [ "USCT", "USMA" ],
    "Name": "Rhode Island"
  },
  {
    "Code": "USSC",
    "Neighborcodes": [ "USGA", "USNC" ],
    "Name": "South Carolina"
  },
  {
    "Code": "USSD",
    "Neighborcodes": [ "USIA", "USMN", "USMT", "USND", "USNE", "USWY" ],
    "Name": "South Dakota"
  },
  {
    "Code": "USTN",
    "Neighborcodes": [ "USAL", "USAR", "USGA", "USKY", "USMO", "USMS", "USNC", "USVA" ],
    "Name": "Tennessee"
  },
  {
    "Code": "USTX",
    "Neighborcodes": [ "USAR", "USLA", "USNM", "USOK" ],
    "Name": "Texas"
  },
  {
    "Code": "USUT",
    "Neighborcodes": [ "USAZ", "USCO", "USID", "USNM", "USNV", "USWY" ],
    "Name": "Utah"
  },
  {
    "Code": "USVA",
    "Neighborcodes": [ "USKY", "USMD", "USNC", "USTN", "USWV" ],
    "Name": "Virginia"
  },
  {
    "Code": "USVT",
    "Neighborcodes": [ "USMA", "USNH", "USNY" ],
    "Name": "Vermont"
  },
  {
    "Code": "USWA",
    "Neighborcodes": [ "USID", "USOR" ],
    "Name": "Washington"
  },
  {
    "Code": "USWI",
    "Neighborcodes": [ "USIA", "USIL", "USMI", "USMN" ],
    "Name": "Wisconsin"
  },
  {
    "Code": "USWV",
    "Neighborcodes": [ "USKY", "USMD", "USOH", "USPA", "USVA" ],
    "Name": "West Virginia"
  },
  {
    "Code": "USWY",
    "Neighborcodes": [ "USCO", "USID", "USMT", "USNE", "USSD", "USUT" ],
    "Name": "Wyoming"
  }
]
