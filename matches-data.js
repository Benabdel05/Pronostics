// Données des matchs de la Coupe du Monde 2026
// Source : openfootball/worldcup.json (domaine public)
// IMPORTANT : 'finalScore' doit être mis à jour manuellement ou via script
// de synchronisation au fur et à mesure des résultats réels.
const WC2026_MATCHES = [
  {
    "id": "m001",
    "round": "Matchday 1",
    "group": "Group A",
    "date": "2026-06-11",
    "time": "13:00 UTC-6",
    "team1": "Mexico",
    "team2": "South Africa",
    "ground": "Mexico City",
    "finalScore": [
      2,
      0
    ]
  },
  {
    "id": "m002",
    "round": "Matchday 1",
    "group": "Group A",
    "date": "2026-06-11",
    "time": "20:00 UTC-6",
    "team1": "South Korea",
    "team2": "Czech Republic",
    "ground": "Guadalajara (Zapopan)",
    "finalScore": [
      2,
      1
    ]
  },
  {
    "id": "m003",
    "round": "Matchday 8",
    "group": "Group A",
    "date": "2026-06-18",
    "time": "12:00 UTC-4",
    "team1": "Czech Republic",
    "team2": "South Africa",
    "ground": "Atlanta",
    "finalScore": [
      1,
      1
    ]
  },
  {
    "id": "m004",
    "round": "Matchday 8",
    "group": "Group A",
    "date": "2026-06-18",
    "time": "19:00 UTC-6",
    "team1": "Mexico",
    "team2": "South Korea",
    "ground": "Guadalajara (Zapopan)",
    "finalScore": [
      1,
      0
    ]
  },
  {
    "id": "m005",
    "round": "Matchday 14",
    "group": "Group A",
    "date": "2026-06-24",
    "time": "19:00 UTC-6",
    "team1": "Czech Republic",
    "team2": "Mexico",
    "ground": "Mexico City",
    "finalScore": null
  },
  {
    "id": "m006",
    "round": "Matchday 14",
    "group": "Group A",
    "date": "2026-06-24",
    "time": "19:00 UTC-6",
    "team1": "South Africa",
    "team2": "South Korea",
    "ground": "Monterrey (Guadalupe)",
    "finalScore": null
  },
  {
    "id": "m007",
    "round": "Matchday 2",
    "group": "Group B",
    "date": "2026-06-12",
    "time": "15:00 UTC-4",
    "team1": "Canada",
    "team2": "Bosnia & Herzegovina",
    "ground": "Toronto",
    "finalScore": [
      1,
      1
    ]
  },
  {
    "id": "m008",
    "round": "Matchday 3",
    "group": "Group B",
    "date": "2026-06-13",
    "time": "12:00 UTC-7",
    "team1": "Qatar",
    "team2": "Switzerland",
    "ground": "San Francisco Bay Area (Santa Clara)",
    "finalScore": [
      1,
      1
    ]
  },
  {
    "id": "m009",
    "round": "Matchday 8",
    "group": "Group B",
    "date": "2026-06-18",
    "time": "12:00 UTC-7",
    "team1": "Switzerland",
    "team2": "Bosnia & Herzegovina",
    "ground": "Los Angeles (Inglewood)",
    "finalScore": [
      4,
      1
    ]
  },
  {
    "id": "m010",
    "round": "Matchday 8",
    "group": "Group B",
    "date": "2026-06-18",
    "time": "15:00 UTC-7",
    "team1": "Canada",
    "team2": "Qatar",
    "ground": "Vancouver",
    "finalScore": [
      6,
      0
    ]
  },
  {
    "id": "m011",
    "round": "Matchday 14",
    "group": "Group B",
    "date": "2026-06-24",
    "time": "12:00 UTC-7",
    "team1": "Switzerland",
    "team2": "Canada",
    "ground": "Vancouver",
    "finalScore": null
  },
  {
    "id": "m012",
    "round": "Matchday 14",
    "group": "Group B",
    "date": "2026-06-24",
    "time": "12:00 UTC-7",
    "team1": "Bosnia & Herzegovina",
    "team2": "Qatar",
    "ground": "Seattle",
    "finalScore": null
  },
  {
    "id": "m013",
    "round": "Matchday 3",
    "group": "Group C",
    "date": "2026-06-13",
    "time": "18:00 UTC-4",
    "team1": "Brazil",
    "team2": "Morocco",
    "ground": "New York/New Jersey (East Rutherford)",
    "finalScore": [
      1,
      1
    ]
  },
  {
    "id": "m014",
    "round": "Matchday 3",
    "group": "Group C",
    "date": "2026-06-13",
    "time": "21:00 UTC-4",
    "team1": "Haiti",
    "team2": "Scotland",
    "ground": "Boston (Foxborough)",
    "finalScore": [
      0,
      1
    ]
  },
  {
    "id": "m015",
    "round": "Matchday 9",
    "group": "Group C",
    "date": "2026-06-19",
    "time": "18:00 UTC-4",
    "team1": "Scotland",
    "team2": "Morocco",
    "ground": "Boston (Foxborough)",
    "finalScore": [
      0,
      1
    ]
  },
  {
    "id": "m016",
    "round": "Matchday 9",
    "group": "Group C",
    "date": "2026-06-19",
    "time": "20:30 UTC-4",
    "team1": "Brazil",
    "team2": "Haiti",
    "ground": "Philadelphia",
    "finalScore": [
      3,
      0
    ]
  },
  {
    "id": "m017",
    "round": "Matchday 14",
    "group": "Group C",
    "date": "2026-06-24",
    "time": "18:00 UTC-4",
    "team1": "Scotland",
    "team2": "Brazil",
    "ground": "Miami (Miami Gardens)",
    "finalScore": null
  },
  {
    "id": "m018",
    "round": "Matchday 14",
    "group": "Group C",
    "date": "2026-06-24",
    "time": "18:00 UTC-4",
    "team1": "Morocco",
    "team2": "Haiti",
    "ground": "Atlanta",
    "finalScore": null
  },
  {
    "id": "m019",
    "round": "Matchday 2",
    "group": "Group D",
    "date": "2026-06-12",
    "time": "18:00 UTC-7",
    "team1": "USA",
    "team2": "Paraguay",
    "ground": "Los Angeles (Inglewood)",
    "finalScore": [
      4,
      1
    ]
  },
  {
    "id": "m020",
    "round": "Matchday 3",
    "group": "Group D",
    "date": "2026-06-13",
    "time": "21:00 UTC-7",
    "team1": "Australia",
    "team2": "Turkey",
    "ground": "Vancouver",
    "finalScore": [
      2,
      0
    ]
  },
  {
    "id": "m021",
    "round": "Matchday 9",
    "group": "Group D",
    "date": "2026-06-19",
    "time": "12:00 UTC-7",
    "team1": "USA",
    "team2": "Australia",
    "ground": "Seattle",
    "finalScore": [
      2,
      0
    ]
  },
  {
    "id": "m022",
    "round": "Matchday 9",
    "group": "Group D",
    "date": "2026-06-19",
    "time": "20:00 UTC-7",
    "team1": "Turkey",
    "team2": "Paraguay",
    "ground": "San Francisco Bay Area (Santa Clara)",
    "finalScore": [
      0,
      1
    ]
  },
  {
    "id": "m023",
    "round": "Matchday 15",
    "group": "Group D",
    "date": "2026-06-25",
    "time": "19:00 UTC-7",
    "team1": "Turkey",
    "team2": "USA",
    "ground": "Los Angeles (Inglewood)",
    "finalScore": null
  },
  {
    "id": "m024",
    "round": "Matchday 15",
    "group": "Group D",
    "date": "2026-06-25",
    "time": "19:00 UTC-7",
    "team1": "Paraguay",
    "team2": "Australia",
    "ground": "San Francisco Bay Area (Santa Clara)",
    "finalScore": null
  },
  {
    "id": "m025",
    "round": "Matchday 4",
    "group": "Group E",
    "date": "2026-06-14",
    "time": "12:00 UTC-5",
    "team1": "Germany",
    "team2": "Curaçao",
    "ground": "Houston",
    "finalScore": [
      7,
      1
    ]
  },
  {
    "id": "m026",
    "round": "Matchday 4",
    "group": "Group E",
    "date": "2026-06-14",
    "time": "19:00 UTC-4",
    "team1": "Ivory Coast",
    "team2": "Ecuador",
    "ground": "Philadelphia",
    "finalScore": [
      1,
      0
    ]
  },
  {
    "id": "m027",
    "round": "Matchday 10",
    "group": "Group E",
    "date": "2026-06-20",
    "time": "16:00 UTC-4",
    "team1": "Germany",
    "team2": "Ivory Coast",
    "ground": "Toronto",
    "finalScore": null
  },
  {
    "id": "m028",
    "round": "Matchday 10",
    "group": "Group E",
    "date": "2026-06-20",
    "time": "19:00 UTC-5",
    "team1": "Ecuador",
    "team2": "Curaçao",
    "ground": "Kansas City",
    "finalScore": null
  },
  {
    "id": "m029",
    "round": "Matchday 15",
    "group": "Group E",
    "date": "2026-06-25",
    "time": "16:00 UTC-4",
    "team1": "Curaçao",
    "team2": "Ivory Coast",
    "ground": "Philadelphia",
    "finalScore": null
  },
  {
    "id": "m030",
    "round": "Matchday 15",
    "group": "Group E",
    "date": "2026-06-25",
    "time": "16:00 UTC-4",
    "team1": "Ecuador",
    "team2": "Germany",
    "ground": "New York/New Jersey (East Rutherford)",
    "finalScore": null
  },
  {
    "id": "m031",
    "round": "Matchday 4",
    "group": "Group F",
    "date": "2026-06-14",
    "time": "15:00 UTC-5",
    "team1": "Netherlands",
    "team2": "Japan",
    "ground": "Dallas (Arlington)",
    "finalScore": [
      2,
      2
    ]
  },
  {
    "id": "m032",
    "round": "Matchday 4",
    "group": "Group F",
    "date": "2026-06-14",
    "time": "20:00 UTC-6",
    "team1": "Sweden",
    "team2": "Tunisia",
    "ground": "Monterrey (Guadalupe)",
    "finalScore": [
      5,
      1
    ]
  },
  {
    "id": "m033",
    "round": "Matchday 10",
    "group": "Group F",
    "date": "2026-06-20",
    "time": "12:00 UTC-5",
    "team1": "Netherlands",
    "team2": "Sweden",
    "ground": "Houston",
    "finalScore": null
  },
  {
    "id": "m034",
    "round": "Matchday 10",
    "group": "Group F",
    "date": "2026-06-20",
    "time": "22:00 UTC-6",
    "team1": "Tunisia",
    "team2": "Japan",
    "ground": "Monterrey (Guadalupe)",
    "finalScore": null
  },
  {
    "id": "m035",
    "round": "Matchday 15",
    "group": "Group F",
    "date": "2026-06-25",
    "time": "18:00 UTC-5",
    "team1": "Japan",
    "team2": "Sweden",
    "ground": "Dallas (Arlington)",
    "finalScore": null
  },
  {
    "id": "m036",
    "round": "Matchday 15",
    "group": "Group F",
    "date": "2026-06-25",
    "time": "18:00 UTC-5",
    "team1": "Tunisia",
    "team2": "Netherlands",
    "ground": "Kansas City",
    "finalScore": null
  },
  {
    "id": "m037",
    "round": "Matchday 5",
    "group": "Group G",
    "date": "2026-06-15",
    "time": "12:00 UTC-7",
    "team1": "Belgium",
    "team2": "Egypt",
    "ground": "Seattle",
    "finalScore": [
      1,
      1
    ]
  },
  {
    "id": "m038",
    "round": "Matchday 5",
    "group": "Group G",
    "date": "2026-06-15",
    "time": "18:00 UTC-7",
    "team1": "Iran",
    "team2": "New Zealand",
    "ground": "Los Angeles (Inglewood)",
    "finalScore": [
      2,
      2
    ]
  },
  {
    "id": "m039",
    "round": "Matchday 11",
    "group": "Group G",
    "date": "2026-06-21",
    "time": "12:00 UTC-7",
    "team1": "Belgium",
    "team2": "Iran",
    "ground": "Los Angeles (Inglewood)",
    "finalScore": null
  },
  {
    "id": "m040",
    "round": "Matchday 11",
    "group": "Group G",
    "date": "2026-06-21",
    "time": "18:00 UTC-7",
    "team1": "New Zealand",
    "team2": "Egypt",
    "ground": "Vancouver",
    "finalScore": null
  },
  {
    "id": "m041",
    "round": "Matchday 16",
    "group": "Group G",
    "date": "2026-06-26",
    "time": "20:00 UTC-7",
    "team1": "Egypt",
    "team2": "Iran",
    "ground": "Seattle",
    "finalScore": null
  },
  {
    "id": "m042",
    "round": "Matchday 16",
    "group": "Group G",
    "date": "2026-06-26",
    "time": "20:00 UTC-7",
    "team1": "New Zealand",
    "team2": "Belgium",
    "ground": "Vancouver",
    "finalScore": null
  },
  {
    "id": "m043",
    "round": "Matchday 5",
    "group": "Group H",
    "date": "2026-06-15",
    "time": "12:00 UTC-4",
    "team1": "Spain",
    "team2": "Cape Verde",
    "ground": "Atlanta",
    "finalScore": [
      0,
      0
    ]
  },
  {
    "id": "m044",
    "round": "Matchday 5",
    "group": "Group H",
    "date": "2026-06-15",
    "time": "18:00 UTC-4",
    "team1": "Saudi Arabia",
    "team2": "Uruguay",
    "ground": "Miami (Miami Gardens)",
    "finalScore": [
      1,
      1
    ]
  },
  {
    "id": "m045",
    "round": "Matchday 11",
    "group": "Group H",
    "date": "2026-06-21",
    "time": "12:00 UTC-4",
    "team1": "Spain",
    "team2": "Saudi Arabia",
    "ground": "Atlanta",
    "finalScore": null
  },
  {
    "id": "m046",
    "round": "Matchday 11",
    "group": "Group H",
    "date": "2026-06-21",
    "time": "18:00 UTC-4",
    "team1": "Uruguay",
    "team2": "Cape Verde",
    "ground": "Miami (Miami Gardens)",
    "finalScore": null
  },
  {
    "id": "m047",
    "round": "Matchday 16",
    "group": "Group H",
    "date": "2026-06-26",
    "time": "19:00 UTC-5",
    "team1": "Cape Verde",
    "team2": "Saudi Arabia",
    "ground": "Houston",
    "finalScore": null
  },
  {
    "id": "m048",
    "round": "Matchday 16",
    "group": "Group H",
    "date": "2026-06-26",
    "time": "18:00 UTC-6",
    "team1": "Uruguay",
    "team2": "Spain",
    "ground": "Guadalajara (Zapopan)",
    "finalScore": null
  },
  {
    "id": "m049",
    "round": "Matchday 6",
    "group": "Group I",
    "date": "2026-06-16",
    "time": "15:00 UTC-4",
    "team1": "France",
    "team2": "Senegal",
    "ground": "New York/New Jersey (East Rutherford)",
    "finalScore": [
      3,
      1
    ]
  },
  {
    "id": "m050",
    "round": "Matchday 6",
    "group": "Group I",
    "date": "2026-06-16",
    "time": "18:00 UTC-4",
    "team1": "Iraq",
    "team2": "Norway",
    "ground": "Boston (Foxborough)",
    "finalScore": [
      1,
      4
    ]
  },
  {
    "id": "m051",
    "round": "Matchday 12",
    "group": "Group I",
    "date": "2026-06-22",
    "time": "17:00 UTC-4",
    "team1": "France",
    "team2": "Iraq",
    "ground": "Philadelphia",
    "finalScore": null
  },
  {
    "id": "m052",
    "round": "Matchday 12",
    "group": "Group I",
    "date": "2026-06-22",
    "time": "20:00 UTC-4",
    "team1": "Norway",
    "team2": "Senegal",
    "ground": "New York/New Jersey (East Rutherford)",
    "finalScore": null
  },
  {
    "id": "m053",
    "round": "Matchday 16",
    "group": "Group I",
    "date": "2026-06-26",
    "time": "15:00 UTC-4",
    "team1": "Norway",
    "team2": "France",
    "ground": "Boston (Foxborough)",
    "finalScore": null
  },
  {
    "id": "m054",
    "round": "Matchday 16",
    "group": "Group I",
    "date": "2026-06-26",
    "time": "15:00 UTC-4",
    "team1": "Senegal",
    "team2": "Iraq",
    "ground": "Toronto",
    "finalScore": null
  },
  {
    "id": "m055",
    "round": "Matchday 6",
    "group": "Group J",
    "date": "2026-06-16",
    "time": "20:00 UTC-5",
    "team1": "Argentina",
    "team2": "Algeria",
    "ground": "Kansas City",
    "finalScore": [
      3,
      0
    ]
  },
  {
    "id": "m056",
    "round": "Matchday 6",
    "group": "Group J",
    "date": "2026-06-16",
    "time": "21:00 UTC-7",
    "team1": "Austria",
    "team2": "Jordan",
    "ground": "San Francisco Bay Area (Santa Clara)",
    "finalScore": [
      3,
      1
    ]
  },
  {
    "id": "m057",
    "round": "Matchday 12",
    "group": "Group J",
    "date": "2026-06-22",
    "time": "12:00 UTC-5",
    "team1": "Argentina",
    "team2": "Austria",
    "ground": "Dallas (Arlington)",
    "finalScore": null
  },
  {
    "id": "m058",
    "round": "Matchday 12",
    "group": "Group J",
    "date": "2026-06-22",
    "time": "20:00 UTC-7",
    "team1": "Jordan",
    "team2": "Algeria",
    "ground": "San Francisco Bay Area (Santa Clara)",
    "finalScore": null
  },
  {
    "id": "m059",
    "round": "Matchday 17",
    "group": "Group J",
    "date": "2026-06-27",
    "time": "21:00 UTC-5",
    "team1": "Algeria",
    "team2": "Austria",
    "ground": "Kansas City",
    "finalScore": null
  },
  {
    "id": "m060",
    "round": "Matchday 17",
    "group": "Group J",
    "date": "2026-06-27",
    "time": "21:00 UTC-5",
    "team1": "Jordan",
    "team2": "Argentina",
    "ground": "Dallas (Arlington)",
    "finalScore": null
  },
  {
    "id": "m061",
    "round": "Matchday 7",
    "group": "Group K",
    "date": "2026-06-17",
    "time": "12:00 UTC-5",
    "team1": "Portugal",
    "team2": "DR Congo",
    "ground": "Houston",
    "finalScore": [
      1,
      1
    ]
  },
  {
    "id": "m062",
    "round": "Matchday 7",
    "group": "Group K",
    "date": "2026-06-17",
    "time": "20:00 UTC-6",
    "team1": "Uzbekistan",
    "team2": "Colombia",
    "ground": "Mexico City",
    "finalScore": [
      1,
      3
    ]
  },
  {
    "id": "m063",
    "round": "Matchday 13",
    "group": "Group K",
    "date": "2026-06-23",
    "time": "12:00 UTC-5",
    "team1": "Portugal",
    "team2": "Uzbekistan",
    "ground": "Houston",
    "finalScore": null
  },
  {
    "id": "m064",
    "round": "Matchday 13",
    "group": "Group K",
    "date": "2026-06-23",
    "time": "20:00 UTC-6",
    "team1": "Colombia",
    "team2": "DR Congo",
    "ground": "Guadalajara (Zapopan)",
    "finalScore": null
  },
  {
    "id": "m065",
    "round": "Matchday 17",
    "group": "Group K",
    "date": "2026-06-27",
    "time": "19:30 UTC-4",
    "team1": "Colombia",
    "team2": "Portugal",
    "ground": "Miami (Miami Gardens)",
    "finalScore": null
  },
  {
    "id": "m066",
    "round": "Matchday 17",
    "group": "Group K",
    "date": "2026-06-27",
    "time": "19:30 UTC-4",
    "team1": "DR Congo",
    "team2": "Uzbekistan",
    "ground": "Atlanta",
    "finalScore": null
  },
  {
    "id": "m067",
    "round": "Matchday 7",
    "group": "Group L",
    "date": "2026-06-17",
    "time": "15:00 UTC-5",
    "team1": "England",
    "team2": "Croatia",
    "ground": "Dallas (Arlington)",
    "finalScore": [
      4,
      2
    ]
  },
  {
    "id": "m068",
    "round": "Matchday 7",
    "group": "Group L",
    "date": "2026-06-17",
    "time": "19:00 UTC-4",
    "team1": "Ghana",
    "team2": "Panama",
    "ground": "Toronto",
    "finalScore": [
      1,
      0
    ]
  },
  {
    "id": "m069",
    "round": "Matchday 13",
    "group": "Group L",
    "date": "2026-06-23",
    "time": "16:00 UTC-4",
    "team1": "England",
    "team2": "Ghana",
    "ground": "Boston (Foxborough)",
    "finalScore": null
  },
  {
    "id": "m070",
    "round": "Matchday 13",
    "group": "Group L",
    "date": "2026-06-23",
    "time": "19:00 UTC-4",
    "team1": "Panama",
    "team2": "Croatia",
    "ground": "Toronto",
    "finalScore": null
  },
  {
    "id": "m071",
    "round": "Matchday 17",
    "group": "Group L",
    "date": "2026-06-27",
    "time": "17:00 UTC-4",
    "team1": "Panama",
    "team2": "England",
    "ground": "New York/New Jersey (East Rutherford)",
    "finalScore": null
  },
  {
    "id": "m072",
    "round": "Matchday 17",
    "group": "Group L",
    "date": "2026-06-27",
    "time": "17:00 UTC-4",
    "team1": "Croatia",
    "team2": "Ghana",
    "ground": "Philadelphia",
    "finalScore": null
  },
  {
    "id": "m073",
    "round": "Round of 32",
    "group": "",
    "date": "2026-06-28",
    "time": "12:00 UTC-7",
    "team1": "2A",
    "team2": "2B",
    "ground": "Los Angeles (Inglewood)",
    "finalScore": null
  },
  {
    "id": "m074",
    "round": "Round of 32",
    "group": "",
    "date": "2026-06-29",
    "time": "16:30 UTC-4",
    "team1": "1E",
    "team2": "3A/B/C/D/F",
    "ground": "Boston (Foxborough)",
    "finalScore": null
  },
  {
    "id": "m075",
    "round": "Round of 32",
    "group": "",
    "date": "2026-06-29",
    "time": "19:00 UTC-6",
    "team1": "1F",
    "team2": "2C",
    "ground": "Monterrey (Guadalupe)",
    "finalScore": null
  },
  {
    "id": "m076",
    "round": "Round of 32",
    "group": "",
    "date": "2026-06-29",
    "time": "12:00 UTC-5",
    "team1": "1C",
    "team2": "2F",
    "ground": "Houston",
    "finalScore": null
  },
  {
    "id": "m077",
    "round": "Round of 32",
    "group": "",
    "date": "2026-06-30",
    "time": "17:00 UTC-4",
    "team1": "1I",
    "team2": "3C/D/F/G/H",
    "ground": "New York/New Jersey (East Rutherford)",
    "finalScore": null
  },
  {
    "id": "m078",
    "round": "Round of 32",
    "group": "",
    "date": "2026-06-30",
    "time": "12:00 UTC-5",
    "team1": "2E",
    "team2": "2I",
    "ground": "Dallas (Arlington)",
    "finalScore": null
  },
  {
    "id": "m079",
    "round": "Round of 32",
    "group": "",
    "date": "2026-06-30",
    "time": "19:00 UTC-6",
    "team1": "1A",
    "team2": "3C/E/F/H/I",
    "ground": "Mexico City",
    "finalScore": null
  },
  {
    "id": "m080",
    "round": "Round of 32",
    "group": "",
    "date": "2026-07-01",
    "time": "12:00 UTC-4",
    "team1": "1L",
    "team2": "3E/H/I/J/K",
    "ground": "Atlanta",
    "finalScore": null
  },
  {
    "id": "m081",
    "round": "Round of 32",
    "group": "",
    "date": "2026-07-01",
    "time": "17:00 UTC-7",
    "team1": "1D",
    "team2": "3B/E/F/I/J",
    "ground": "San Francisco Bay Area (Santa Clara)",
    "finalScore": null
  },
  {
    "id": "m082",
    "round": "Round of 32",
    "group": "",
    "date": "2026-07-01",
    "time": "13:00 UTC-7",
    "team1": "1G",
    "team2": "3A/E/H/I/J",
    "ground": "Seattle",
    "finalScore": null
  },
  {
    "id": "m083",
    "round": "Round of 32",
    "group": "",
    "date": "2026-07-02",
    "time": "19:00 UTC-4",
    "team1": "2K",
    "team2": "2L",
    "ground": "Toronto",
    "finalScore": null
  },
  {
    "id": "m084",
    "round": "Round of 32",
    "group": "",
    "date": "2026-07-02",
    "time": "12:00 UTC-7",
    "team1": "1H",
    "team2": "2J",
    "ground": "Los Angeles (Inglewood)",
    "finalScore": null
  },
  {
    "id": "m085",
    "round": "Round of 32",
    "group": "",
    "date": "2026-07-02",
    "time": "20:00 UTC-7",
    "team1": "1B",
    "team2": "3E/F/G/I/J",
    "ground": "Vancouver",
    "finalScore": null
  },
  {
    "id": "m086",
    "round": "Round of 32",
    "group": "",
    "date": "2026-07-03",
    "time": "18:00 UTC-4",
    "team1": "1J",
    "team2": "2H",
    "ground": "Miami (Miami Gardens)",
    "finalScore": null
  },
  {
    "id": "m087",
    "round": "Round of 32",
    "group": "",
    "date": "2026-07-03",
    "time": "20:30 UTC-5",
    "team1": "1K",
    "team2": "3D/E/I/J/L",
    "ground": "Kansas City",
    "finalScore": null
  },
  {
    "id": "m088",
    "round": "Round of 32",
    "group": "",
    "date": "2026-07-03",
    "time": "13:00 UTC-5",
    "team1": "2D",
    "team2": "2G",
    "ground": "Dallas (Arlington)",
    "finalScore": null
  },
  {
    "id": "m089",
    "round": "Round of 16",
    "group": "",
    "date": "2026-07-04",
    "time": "17:00 UTC-4",
    "team1": "W74",
    "team2": "W77",
    "ground": "Philadelphia",
    "finalScore": null
  },
  {
    "id": "m090",
    "round": "Round of 16",
    "group": "",
    "date": "2026-07-04",
    "time": "12:00 UTC-5",
    "team1": "W73",
    "team2": "W75",
    "ground": "Houston",
    "finalScore": null
  },
  {
    "id": "m091",
    "round": "Round of 16",
    "group": "",
    "date": "2026-07-05",
    "time": "16:00 UTC-4",
    "team1": "W76",
    "team2": "W78",
    "ground": "New York/New Jersey (East Rutherford)",
    "finalScore": null
  },
  {
    "id": "m092",
    "round": "Round of 16",
    "group": "",
    "date": "2026-07-05",
    "time": "18:00 UTC-6",
    "team1": "W79",
    "team2": "W80",
    "ground": "Mexico City",
    "finalScore": null
  },
  {
    "id": "m093",
    "round": "Round of 16",
    "group": "",
    "date": "2026-07-06",
    "time": "14:00 UTC-5",
    "team1": "W83",
    "team2": "W84",
    "ground": "Dallas (Arlington)",
    "finalScore": null
  },
  {
    "id": "m094",
    "round": "Round of 16",
    "group": "",
    "date": "2026-07-06",
    "time": "17:00 UTC-7",
    "team1": "W81",
    "team2": "W82",
    "ground": "Seattle",
    "finalScore": null
  },
  {
    "id": "m095",
    "round": "Round of 16",
    "group": "",
    "date": "2026-07-07",
    "time": "12:00 UTC-4",
    "team1": "W86",
    "team2": "W88",
    "ground": "Atlanta",
    "finalScore": null
  },
  {
    "id": "m096",
    "round": "Round of 16",
    "group": "",
    "date": "2026-07-07",
    "time": "13:00 UTC-7",
    "team1": "W85",
    "team2": "W87",
    "ground": "Vancouver",
    "finalScore": null
  },
  {
    "id": "m097",
    "round": "Quarter-final",
    "group": "",
    "date": "2026-07-09",
    "time": "16:00 UTC-4",
    "team1": "W89",
    "team2": "W90",
    "ground": "Boston (Foxborough)",
    "finalScore": null
  },
  {
    "id": "m098",
    "round": "Quarter-final",
    "group": "",
    "date": "2026-07-10",
    "time": "12:00 UTC-7",
    "team1": "W93",
    "team2": "W94",
    "ground": "Los Angeles (Inglewood)",
    "finalScore": null
  },
  {
    "id": "m099",
    "round": "Quarter-final",
    "group": "",
    "date": "2026-07-11",
    "time": "17:00 UTC-4",
    "team1": "W91",
    "team2": "W92",
    "ground": "Miami (Miami Gardens)",
    "finalScore": null
  },
  {
    "id": "m100",
    "round": "Quarter-final",
    "group": "",
    "date": "2026-07-11",
    "time": "20:00 UTC-5",
    "team1": "W95",
    "team2": "W96",
    "ground": "Kansas City",
    "finalScore": null
  },
  {
    "id": "m101",
    "round": "Semi-final",
    "group": "",
    "date": "2026-07-14",
    "time": "14:00 UTC-5",
    "team1": "W97",
    "team2": "W98",
    "ground": "Dallas (Arlington)",
    "finalScore": null
  },
  {
    "id": "m102",
    "round": "Semi-final",
    "group": "",
    "date": "2026-07-15",
    "time": "15:00 UTC-4",
    "team1": "W99",
    "team2": "W100",
    "ground": "Atlanta",
    "finalScore": null
  },
  {
    "id": "m103",
    "round": "Match for third place",
    "group": "",
    "date": "2026-07-18",
    "time": "17:00 UTC-4",
    "team1": "L101",
    "team2": "L102",
    "ground": "Miami (Miami Gardens)",
    "finalScore": null
  },
  {
    "id": "m104",
    "round": "Final",
    "group": "",
    "date": "2026-07-19",
    "time": "15:00 UTC-4",
    "team1": "W101",
    "team2": "W102",
    "ground": "New York/New Jersey (East Rutherford)",
    "finalScore": null
  }
];
