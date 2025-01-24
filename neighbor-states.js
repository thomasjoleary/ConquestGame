const neighborStates = [
  {
    "Code": "USAL",
    "Neighborcodes": [ "USFL", "USGA", "USMS", "USTN" ]
  },
  {
    "Code": "USAR",
    "Neighborcodes": [ "USLA", "USMO", "USMS", "USOK", "USTN", "USTX" ]
  },
  {
    "Code": "USAZ",
    "Neighborcodes": [ "USCA", "USCO", "USNM", "USNV", "USUT" ]
  },
  {
    "Code": "USCA",
    "Neighborcodes": [ "USAZ", "USNV", "USOR" ]
  },
  {
    "Code": "USCO",
    "Neighborcodes": [ "USAZ", "USKS", "USNE", "USNM", "USOK", "USUT", "USWY" ]
  },
  {
    "Code": "USCT",
    "Neighborcodes": [ "USMA", "USNY", "USRI" ]
  },
  {
    "Code": "USDE",
    "Neighborcodes": [ "USMD", "USNJ", "USPA" ]
  },
  {
    "Code": "USFL",
    "Neighborcodes": [ "USAL", "USGA" ]
  },
  {
    "Code": "USGA",
    "Neighborcodes": [ "USAL", "USFL", "USNC", "USSC", "USTN" ]
  },
  {
    "Code": "USIA",
    "Neighborcodes": [ "USIL", "USMN", "USMO", "USNE", "USSD", "USWI" ]
  },
  {
    "Code": "USID",
    "Neighborcodes": [ "USMT", "USNV", "USOR", "USUT", "USWA", "USWY" ]
  },
  {
    "Code": "USIL",
    "Neighborcodes": [ "USIA", "USIN", "USKY", "USMO", "USWI" ]
  },
  {
    "Code": "USIN",
    "Neighborcodes": [ "USIL", "USKY", "USMO", "USWI" ]
  },
  {
    "Code": "USKS",
    "Neighborcodes": [ "USCO", "USMO", "USNE", "USOK" ]
  },
  {
    "Code": "USKY",
    "Neighborcodes": [ "USIL", "USIN", "USMO", "USOH", "USTN", "USVA", "USWV" ]
  },
  {
    "Code": "USLA",
    "Neighborcodes": [ "USAR", "USMS", "USTX" ]
  },
  {
    "Code": "USMA",
    "Neighborcodes": [ "USCT", "USNH", "USNY", "USRI", "USVT" ]
  },
  {
    "Code": "USMD",
    "Neighborcodes": [ "USDE", "USPA", "USVA", "USWV" ]
  },
  {
    "Code": "USME",
    "Neighborcodes": [ "USNH" ]
  },
  {
    "Code": "USMI",
    "Neighborcodes": [ "USIN", "USOH", "USWI" ]
  },
  {
    "Code": "USMN",
    "Neighborcodes": [ "USIA", "USND", "USSD", "USWI" ]
  },
  {
    "Code": "USMO",
    "Neighborcodes": [ "USAR", "USIA", "USIL", "USKS", "USKY", "USNE", "USOK", "USTN" ]
  },
  {
    "Code": "USMS",
    "Neighborcodes": [ "USAL", "USAR", "USLA", "USTN" ]
  },
  {
    "Code": "USMT",
    "Neighborcodes": [ "USID", "USND", "USSD", "USWY" ]
  },
  {
    "Code": "USNC",
    "Neighborcodes": [ "USGA", "USSC", "USTN", "USVA" ]
  },
  {
    "Code": "USND",
    "Neighborcodes": [ "USMN", "USMT", "USSD" ]
  },
  {
    "Code": "USNE",
    "Neighborcodes": [ "USCO", "USIA", "USKS", "USMO", "USSD", "USWY" ]
  },
  {
    "Code": "USNH",
    "Neighborcodes": [ "USMA", "USME", "USVT" ]
  },
  {
    "Code": "USNJ",
    "Neighborcodes": [ "USDE", "USNY", "USPA" ]
  },
  {
    "Code": "USNM",
    "Neighborcodes": [ "USAZ", "USCO", "USOK", "USTX", "USUT" ]
  },
  {
    "Code": "USNV",
    "Neighborcodes": [ "USAZ", "USCA", "USID", "USOR", "USUT" ]
  },
  {
    "Code": "USNY",
    "Neighborcodes": [ "USCT", "USMA", "USNJ", "USPA", "USVT" ]
  },
  {
    "Code": "USOH",
    "Neighborcodes": [ "USIN", "USKY", "USMI", "USPA", "USWV" ]
  },
  {
    "Code": "USOK",
    "Neighborcodes": [ "USAR", "USCO", "USKS", "USMO", "USNM", "USTX" ]
  },
  {
    "Code": "USOR",
    "Neighborcodes": [ "USCA", "USID", "USNV", "USWA" ]
  },
  {
    "Code": "USPA",
    "Neighborcodes": [ "USDE", "USMD", "USNJ", "USNY", "USOH", "USWV" ]
  },
  {
    "Code": "USRI",
    "Neighborcodes": [ "USCT", "USMA" ]
  },
  {
    "Code": "USSC",
    "Neighborcodes": [ "USGA", "USNC" ]
  },
  {
    "Code": "USSD",
    "Neighborcodes": [ "USIA", "USMN", "USMT", "USND", "USNE", "USWY" ]
  },
  {
    "Code": "USTN",
    "Neighborcodes": [ "USAL", "USAR", "USGA", "USKY", "USMO", "USMS", "USNC", "USVA" ]
  },
  {
    "Code": "USTX",
    "Neighborcodes": [ "USAR", "USLA", "USNM", "USOK" ]
  },
  {
    "Code": "USUT",
    "Neighborcodes": [ "USAZ", "USCO", "USID", "USNM", "USNV", "USWY" ]
  },
  {
    "Code": "USVA",
    "Neighborcodes": [ "USKY", "USMD", "USNC", "USTN", "USWV" ]
  },
  {
    "Code": "USVT",
    "Neighborcodes": [ "USMA", "USNH", "USNY" ]
  },
  {
    "Code": "USWA",
    "Neighborcodes": [ "USID", "USOR" ]
  },
  {
    "Code": "USWI",
    "Neighborcodes": [ "USIA", "USIL", "USMI", "USMN" ]
  },
  {
    "Code": "USWV",
    "Neighborcodes": [ "USKY", "USMD", "USOH", "USPA", "USVA" ]
  },
  {
    "Code": "USWY",
    "Neighborcodes": [ "USCO", "USID", "USMT", "USNE", "USSD", "USUT" ]
  }
]
