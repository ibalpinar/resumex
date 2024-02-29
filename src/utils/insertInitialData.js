const User = require("../models/User");
const UserType = require("../models/UserType");
const Language = require("../models/Language");
const Skill = require("../models/Skill");
const Interest = require("../models/Interest");
const Continent = require("../models/Continent");
const Country = require("../models/Country");
const { bcryptPassword } = require('../utils/passwordManager');

const insertInitialData = async()=>{
   const predefinedUserTypes = [
      { _id: "65dd07373d7e0c75327ccf24", name : "admin" },
      { _id: "65dd07373d7e0c75327ccf25", name : "candidate" },
      { _id: "65dd07373d7e0c75327ccf26", name : "editor" }
   ];
   const userTypes = await UserType.find({});
   if (userTypes === undefined || userTypes.length === 0) {
      UserType.create(predefinedUserTypes);
   }

   const predefinedLanguages = [
      { _id: "65dd07373d7e0c75327ccf32", name : "English" },
      { _id: "65dd07373d7e0c75327ccf33", name : "Turkish" },
      { _id: "65dd07373d7e0c75327ccf34", name : "Chinese" },
      { _id: "65dd07373d7e0c75327ccf30", name : "Arabic" },
      { _id: "65dd07373d7e0c75327ccf2e", name : "Hindi" },
      { _id: "65dd07373d7e0c75327ccf2c", name : "Portuguese" },
      { _id: "65dd07373d7e0c75327ccf2d", name : "Russian" },
      { _id: "65dd07373d7e0c75327ccf31", name : "Japanese" },
      { _id: "65dd07373d7e0c75327ccf2b", name : "French" },
      { _id: "65dd07373d7e0c75327ccf2f", name : "Spanish" }
   ];
   const languages = await Language.find({});
   if (languages === undefined || languages.length === 0) {
      Language.create(predefinedLanguages);
   }

   const predefinedSkills = [
      { _id: "65dd07373d7e0c75327ccf43", name : "Effective Hiring" },
      { _id: "65dd07373d7e0c75327ccf54", name : "Time Management" },
      { _id: "65dd07373d7e0c75327ccf42", name : "People Management" },
      { _id: "65dd07373d7e0c75327ccf41", name : "Execution" },
      { _id: "65dd07373d7e0c75327ccf44", name : "Performance Management" },
      { _id: "65dd07373d7e0c75327ccf45", name : "Listening" },
      { _id: "65dd07373d7e0c75327ccf47", name : "Resource Planning" },
      { _id: "65dd07373d7e0c75327ccf46", name : "Good Communication" },
      { _id: "65dd07373d7e0c75327ccf48", name : "Budget Management" },
      { _id: "65dd07373d7e0c75327ccf4a", name : "Open Source" },
      { _id: "65dd07373d7e0c75327ccf49", name : "Project Management" },
      { _id: "65dd07373d7e0c75327ccf4b", name : "Java" },
      { _id: "65dd07373d7e0c75327ccf4c", name : "Node.js" },
      { _id: "65dd07373d7e0c75327ccf4d", name : "C#" },
      { _id: "65dd07373d7e0c75327ccf4e", name : "Linux" },
      { _id: "65dd07373d7e0c75327ccf51", name : "Software Development" },
      { _id: "65dd07373d7e0c75327ccf4f", name : "RESTful Services" },
      { _id: "65dd07373d7e0c75327ccf50", name : "System Administration" },
      { _id: "65dd07373d7e0c75327ccf52", name : "Object Oriented Paradigm" },
      { _id: "65dd07373d7e0c75327ccf55", name : "DevOps" },
      { _id: "65dd07373d7e0c75327ccf56", name : "Database Systems" },
      { _id: "65dd07373d7e0c75327ccf57", name : "Agile Methodologies" },
      { _id: "65dd07373d7e0c75327ccf58", name : "Scalability" },
      { _id: "65dd07373d7e0c75327ccf59", name : "Availability" },
      { _id: "65dd07373d7e0c75327ccf5b", name : "Caching" },
      { _id: "65dd07373d7e0c75327ccf5a", name : "Indexing Engines" },
      { _id: "65dd07373d7e0c75327ccf53", name : "GIT" },
      { _id: "65dd07373d7e0c75327ccf40", name : "Cloud Platforms (GCP, AWS, Azure)" }
   ];
   const skills = await Skill.find({});
   if (skills === undefined || skills.length === 0) {
      Skill.create(predefinedSkills);
   }

   const predefinedInterests = [
      { _id: "65dd07373d7e0c75327ccf7a", name : "Photography", iconName: "photography.png" },
      { _id: "65dd07373d7e0c75327ccf7b", name : "Constant Reading", iconName: "contant_reading.png" },
      { _id: "65dd07373d7e0c75327ccf7c", name : "Chess", iconName: "chess.png" },
      { _id: "65dd07373d7e0c75327ccf7d", name : "Basketball", iconName: "basketball.png" },
      { _id: "65dd07373d7e0c75327ccf7e", name : "Swimming", iconName: "swimming.png" },
      { _id: "65dd07373d7e0c75327ccf7f", name : "Travelling", iconName: "travelling.png" },
      { _id: "65dd07373d7e0c75327ccf80", name : "Science & Technology", iconName: "science_technology.png" }
   ];
   const interests = await Interest.find({});
   if (interests === undefined || interests.length === 0) {
      Interest.create(predefinedInterests);
   }

   let predefinedUsers = [
      {
         _id: "65dd07373d7e0c75327ccf89",
         name: "Ilker",
         lastName: "Balpinar",
         email: "ilker@balpinar.com",
         password: "$2b$08$yBuRjo66uRpdiilER0FFHua0XoPsvBBgNHSAvwZ0ys6TbM7SSw0.W",
         userTypeId: "65dd07373d7e0c75327ccf24"
     },
     {
         _id: "65dd07373d7e0c75327ccf8a",
         name: "Linus",
         lastName: "Torvalds",
         email: "linus@torvalds.com",
         password: "$2b$08$yBuRjo66uRpdiilER0FFHua0XoPsvBBgNHSAvwZ0ys6TbM7SSw0.W",
         userTypeId: "65dd07373d7e0c75327ccf24"
     },
     {
         _id: "65dd07373d7e0c75327ccf8b",
         name: "Bill",
         lastName: "Gates",
         email: "bill@gates.com",
         password: "$2b$08$yBuRjo66uRpdiilER0FFHua0XoPsvBBgNHSAvwZ0ys6TbM7SSw0.W",
         userTypeId: "65dd07373d7e0c75327ccf26"
     },
     {
         _id: "65dd07373d7e0c75327ccf8c",
         name: "Dennis",
         lastName: "Ritchie",
         email: "dennis@ritchie.com",
         password: "$2b$08$yBuRjo66uRpdiilER0FFHua0XoPsvBBgNHSAvwZ0ys6TbM7SSw0.W",
         userTypeId: "65dd07373d7e0c75327ccf25"
     },
     {
         _id: "65dd07373d7e0c75327ccf8d",
         name: "Richard",
         lastName: "Stallman",
         email: "richard@stallman.com",
         password: "$2b$08$yBuRjo66uRpdiilER0FFHua0XoPsvBBgNHSAvwZ0ys6TbM7SSw0.W",
         userTypeId: "65dd07373d7e0c75327ccf25"
     }
   ];
   const users = await User.find({});
   if (users === undefined || users.length === 0) {
      User.create(predefinedUsers);
   }

   let predefinedContinents = [
      { code: "AF", name: "Africa" },
      { code: "AN", name: "Antarctica" },
      { code: "AS", name: "Asia" },
      { code: "EU", name: "Europa" },
      { code: "NA", name: "North America" },
      { code: "OC", name: "Oceania" },
      { code: "SA", name: "South America" }
   ];
   const continents = await Continent.find({});
   if (continents === undefined || continents.length === 0) {
      Continent.create(predefinedContinents);
   }

   let predefinedCountries = [
      { continentCode: "AS", codeA2: "AF", codeA3: "AFG", name: "Afghanistan, Islamic Republic of" },
      { continentCode: "EU", codeA2: "AX", codeA3: "ALA", name: "Åland Islands" },
      { continentCode: "EU", codeA2: "AL", codeA3: "ALB", name: "Albania, Republic of" },
      { continentCode: "AF", codeA2: "DZ", codeA3: "DZA", name: "Algeria, People's Democratic Republic of" },
      { continentCode: "OC", codeA2: "AS", codeA3: "ASM", name: "American Samoa" },
      { continentCode: "EU", codeA2: "AD", codeA3: "AND", name: "Andorra, Principality of" },
      { continentCode: "AF", codeA2: "AO", codeA3: "AGO", name: "Angola, Republic of" },
      { continentCode: "NA", codeA2: "AI", codeA3: "AIA", name: "Anguilla" },
      { continentCode: "AN", codeA2: "AQ", codeA3: "ATA", name: "Antarctica (the territory South of 60 deg S)" },
      { continentCode: "NA", codeA2: "AG", codeA3: "ATG", name: "Antigua and Barbuda" },
      { continentCode: "SA", codeA2: "AR", codeA3: "ARG", name: "Argentina, Argentine Republic" },
      { continentCode: "AS", codeA2: "AM", codeA3: "ARM", name: "Armenia, Republic of" },
      { continentCode: "NA", codeA2: "AW", codeA3: "ABW", name: "Aruba" },
      { continentCode: "OC", codeA2: "AU", codeA3: "AUS", name: "Australia, Commonwealth of" },
      { continentCode: "EU", codeA2: "AT", codeA3: "AUT", name: "Austria, Republic of" },
      { continentCode: "AS", codeA2: "AZ", codeA3: "AZE", name: "Azerbaijan, Republic of" },
      { continentCode: "NA", codeA2: "BS", codeA3: "BHS", name: "Bahamas, Commonwealth of the" },
      { continentCode: "AS", codeA2: "BH", codeA3: "BHR", name: "Bahrain, Kingdom of" },
      { continentCode: "AS", codeA2: "BD", codeA3: "BGD", name: "Bangladesh, People's Republic of" },
      { continentCode: "NA", codeA2: "BB", codeA3: "BRB", name: "Barbados" },
      { continentCode: "EU", codeA2: "BY", codeA3: "BLR", name: "Belarus, Republic of" },
      { continentCode: "EU", codeA2: "BE", codeA3: "BEL", name: "Belgium, Kingdom of" },
      { continentCode: "NA", codeA2: "BZ", codeA3: "BLZ", name: "Belize" },
      { continentCode: "AF", codeA2: "BJ", codeA3: "BEN", name: "Benin, Republic of" },
      { continentCode: "NA", codeA2: "BM", codeA3: "BMU", name: "Bermuda" },
      { continentCode: "AS", codeA2: "BT", codeA3: "BTN", name: "Bhutan, Kingdom of" },
      { continentCode: "SA", codeA2: "BO", codeA3: "BOL", name: "Bolivia, Plurinational State of" },
      { continentCode: "NA", codeA2: "BQ", codeA3: "BES", name: "Bonaire, Sint Eustatius and Saba" },
      { continentCode: "EU", codeA2: "BA", codeA3: "BIH", name: "Bosnia and Herzegovina" },
      { continentCode: "AF", codeA2: "BW", codeA3: "BWA", name: "Botswana, Republic of" },
      { continentCode: "AN", codeA2: "BV", codeA3: "BVT", name: "Bouvet Island (Bouvetoya)" },
      { continentCode: "SA", codeA2: "BR", codeA3: "BRA", name: "Brazil, Federative Republic of" },
      { continentCode: "AF", codeA2: "IO", codeA3: "IOT", name: "British Indian Ocean Territory" },
      { continentCode: "NA", codeA2: "VG", codeA3: "VGB", name: "British Virgin Islands" },
      { continentCode: "AS", codeA2: "BN", codeA3: "BRN", name: "Brunei, Nation of, the Abode of Peace" },
      { continentCode: "EU", codeA2: "BG", codeA3: "BGR", name: "Bulgaria, Republic of" },
      { continentCode: "AF", codeA2: "BF", codeA3: "BFA", name: "Burkina Faso" },
      { continentCode: "AF", codeA2: "BI", codeA3: "BDI", name: "Burundi, Republic of" },
      { continentCode: "AS", codeA2: "KH", codeA3: "KHM", name: "Cambodia, Kingdom of" },
      { continentCode: "AF", codeA2: "CM", codeA3: "CMR", name: "Cameroon, Republic of" },
      { continentCode: "NA", codeA2: "CA", codeA3: "CAN", name: "Canada" },
      { continentCode: "AF", codeA2: "CV", codeA3: "CPV", name: "Cape Verde, Republic of" },
      { continentCode: "NA", codeA2: "KY", codeA3: "CYM", name: "Cayman Islands" },
      { continentCode: "AF", codeA2: "CF", codeA3: "CAF", name: "Central African Republic" },
      { continentCode: "AF", codeA2: "TD", codeA3: "TCD", name: "Chad, Republic of" },
      { continentCode: "SA", codeA2: "CL", codeA3: "CHL", name: "Chile, Republic of" },
      { continentCode: "AS", codeA2: "CN", codeA3: "CHN", name: "China, People's Republic of" },
      { continentCode: "AS", codeA2: "CX", codeA3: "CXR", name: "Christmas Island" },
      { continentCode: "AS", codeA2: "CC", codeA3: "CCK", name: "Cocos (Keeling) Islands" },
      { continentCode: "SA", codeA2: "CO", codeA3: "COL", name: "Colombia, Republic of" },
      { continentCode: "AF", codeA2: "KM", codeA3: "COM", name: "Comoros, Union of the" },
      { continentCode: "AF", codeA2: "CD", codeA3: "COD", name: "Congo, Democratic Republic of the" },
      { continentCode: "AF", codeA2: "CG", codeA3: "COG", name: "Congo, Republic of the" },
      { continentCode: "OC", codeA2: "CK", codeA3: "COK", name: "Cook Islands" },
      { continentCode: "NA", codeA2: "CR", codeA3: "CRI", name: "Costa Rica, Republic of" },
      { continentCode: "AF", codeA2: "CI", codeA3: "CIV", name: "Côte d'Ivoire, Republic of" },
      { continentCode: "EU", codeA2: "HR", codeA3: "HRV", name: "Croatia, Republic of" },
      { continentCode: "NA", codeA2: "CU", codeA3: "CUB", name: "Cuba, Republic of" },
      { continentCode: "NA", codeA2: "CW", codeA3: "CUW", name: "Curaçao" },
      { continentCode: "AS", codeA2: "CY", codeA3: "CYP", name: "Cyprus, Republic of" },
      { continentCode: "EU", codeA2: "CZ", codeA3: "CZE", name: "Czech Republic" },
      { continentCode: "EU", codeA2: "DK", codeA3: "DNK", name: "Denmark, Kingdom of" },
      { continentCode: "AF", codeA2: "DJ", codeA3: "DJI", name: "Djibouti, Republic of" },
      { continentCode: "NA", codeA2: "DM", codeA3: "DMA", name: "Dominica, Commonwealth of" },
      { continentCode: "NA", codeA2: "DO", codeA3: "DOM", name: "Dominican Republic" },
      { continentCode: "SA", codeA2: "EC", codeA3: "ECU", name: "Ecuador, Republic of" },
      { continentCode: "AF", codeA2: "EG", codeA3: "EGY", name: "Egypt, Arab Republic of" },
      { continentCode: "NA", codeA2: "SV", codeA3: "SLV", name: "El Salvador, Republic of" },
      { continentCode: "AF", codeA2: "GQ", codeA3: "GNQ", name: "Equatorial Guinea, Republic of" },
      { continentCode: "AF", codeA2: "ER", codeA3: "ERI", name: "Eritrea, State of" },
      { continentCode: "EU", codeA2: "EE", codeA3: "EST", name: "Estonia, Republic of" },
      { continentCode: "AF", codeA2: "SZ", codeA3: "SWZ", name: "Eswatini, Kingdom of" },
      { continentCode: "AF", codeA2: "ET", codeA3: "ETH", name: "Ethiopia, Federal Democratic Republic of" },
      { continentCode: "SA", codeA2: "FK", codeA3: "FLK", name: "Falkland Islands (Malvinas)" },
      { continentCode: "EU", codeA2: "FO", codeA3: "FRO", name: "Faroe Islands" },
      { continentCode: "OC", codeA2: "FJ", codeA3: "FJI", name: "Fiji, Republic of" },
      { continentCode: "EU", codeA2: "FI", codeA3: "FIN", name: "Finland, Republic of" },
      { continentCode: "EU", codeA2: "FR", codeA3: "FRA", name: "France, French Republic" },
      { continentCode: "SA", codeA2: "GF", codeA3: "GUF", name: "French Guiana" },
      { continentCode: "OC", codeA2: "PF", codeA3: "PYF", name: "French Polynesia" },
      { continentCode: "AF", codeA2: "TF", codeA3: "ATF", name: "French Southern Territories" },
      { continentCode: "AF", codeA2: "GA", codeA3: "GAB", name: "Gabon, Gabonese Republic" },
      { continentCode: "AF", codeA2: "GM", codeA3: "GMB", name: "Gambia, Republic of the" },
      { continentCode: "AS", codeA2: "GE", codeA3: "GEO", name: "Georgia" },
      { continentCode: "EU", codeA2: "DE", codeA3: "DEU", name: "Germany, Federal Republic of" },
      { continentCode: "AF", codeA2: "GH", codeA3: "GHA", name: "Ghana, Republic of" },
      { continentCode: "EU", codeA2: "GI", codeA3: "GIB", name: "Gibraltar" },
      { continentCode: "EU", codeA2: "GR", codeA3: "GRC", name: "Greece, Hellenic Republic" },
      { continentCode: "NA", codeA2: "GL", codeA3: "GRL", name: "Greenland" },
      { continentCode: "NA", codeA2: "GD", codeA3: "GRD", name: "Grenada" },
      { continentCode: "NA", codeA2: "GP", codeA3: "GLP", name: "Guadeloupe" },
      { continentCode: "OC", codeA2: "GU", codeA3: "GUM", name: "Guam" },
      { continentCode: "NA", codeA2: "GT", codeA3: "GTM", name: "Guatemala, Republic of" },
      { continentCode: "EU", codeA2: "GG", codeA3: "GGY", name: "Guernsey, Bailiwick of" },
      { continentCode: "AF", codeA2: "GW", codeA3: "GNB", name: "Guinea-Bissau, Republic of" },
      { continentCode: "AF", codeA2: "GN", codeA3: "GIN", name: "Guinea, Republic of" },
      { continentCode: "SA", codeA2: "GY", codeA3: "GUY", name: "Guyana, Co-operative Republic of" },
      { continentCode: "NA", codeA2: "HT", codeA3: "HTI", name: "Haiti, Republic of" },
      { continentCode: "AN", codeA2: "HM", codeA3: "HMD", name: "Heard Island and McDonald Islands" },
      { continentCode: "EU", codeA2: "VA", codeA3: "VAT", name: "Holy See (Vatican City State)" },
      { continentCode: "NA", codeA2: "HN", codeA3: "HND", name: "Honduras, Republic of" },
      { continentCode: "AS", codeA2: "HK", codeA3: "HKG", name: "Hong Kong, Special Administrative Region of China" },
      { continentCode: "EU", codeA2: "HU", codeA3: "HUN", name: "Hungary, Republic of" },
      { continentCode: "EU", codeA2: "IS", codeA3: "ISL", name: "Iceland, Republic of" },
      { continentCode: "AS", codeA2: "IN", codeA3: "IND", name: "India, Republic of" },
      { continentCode: "AS", codeA2: "ID", codeA3: "IDN", name: "Indonesia, Republic of" },
      { continentCode: "AS", codeA2: "IR", codeA3: "IRN", name: "Iran, Islamic Republic of" },
      { continentCode: "AS", codeA2: "IQ", codeA3: "IRQ", name: "Iraq, Republic of" },
      { continentCode: "EU", codeA2: "IE", codeA3: "IRL", name: "Ireland" },
      { continentCode: "EU", codeA2: "IM", codeA3: "IMN", name: "Isle of Man" },
      { continentCode: "AS", codeA2: "IL", codeA3: "ISR", name: "Israel, State of" },
      { continentCode: "EU", codeA2: "IT", codeA3: "ITA", name: "Italy, Italian Republic" },
      { continentCode: "NA", codeA2: "JM", codeA3: "JAM", name: "Jamaica" },
      { continentCode: "AS", codeA2: "JP", codeA3: "JPN", name: "Japan" },
      { continentCode: "EU", codeA2: "JE", codeA3: "JEY", name: "Jersey, Bailiwick of" },
      { continentCode: "AS", codeA2: "JO", codeA3: "JOR", name: "Jordan, Hashemite Kingdom of" },
      { continentCode: "AS", codeA2: "KZ", codeA3: "KAZ", name: "Kazakhstan, Republic of" },
      { continentCode: "AF", codeA2: "KE", codeA3: "KEN", name: "Kenya, Republic of" },
      { continentCode: "OC", codeA2: "KI", codeA3: "KIR", name: "Kiribati, Republic of" },
      { continentCode: "AS", codeA2: "KP", codeA3: "PRK", name: "Korea, Democratic People's Republic of" },
      { continentCode: "AS", codeA2: "KR", codeA3: "KOR", name: "Korea, Republic of" },
      { continentCode: "EU", codeA2: "XK", codeA3: "XKX", name: " Republic of" },
      { continentCode: "AS", codeA2: "KW", codeA3: "KWT", name: "Kuwait, State of" },
      { continentCode: "AS", codeA2: "KG", codeA3: "KGZ", name: "Kyrgyz Republic" },
      { continentCode: "AS", codeA2: "LA", codeA3: "LAO", name: "Lao People's Democratic Republic" },
      { continentCode: "EU", codeA2: "LV", codeA3: "LVA", name: "Latvia, Republic of" },
      { continentCode: "AS", codeA2: "LB", codeA3: "LBN", name: "Lebanon, Lebanese Republic" },
      { continentCode: "AF", codeA2: "LS", codeA3: "LSO", name: "Lesotho, Kingdom of" },
      { continentCode: "AF", codeA2: "LR", codeA3: "LBR", name: "Liberia, Republic of" },
      { continentCode: "AF", codeA2: "LY", codeA3: "LBY", name: "Libya, State of" },
      { continentCode: "EU", codeA2: "LI", codeA3: "LIE", name: "Liechtenstein, Principality of" },
      { continentCode: "EU", codeA2: "LT", codeA3: "LTU", name: "Lithuania, Republic of" },
      { continentCode: "EU", codeA2: "LU", codeA3: "LUX", name: "Luxembourg, Grand Duchy of" },
      { continentCode: "AS", codeA2: "MO", codeA3: "MAC", name: "Macao, Special Administrative Region of China" },
      { continentCode: "AF", codeA2: "MG", codeA3: "MDG", name: "Madagascar, Republic of" },
      { continentCode: "AF", codeA2: "MW", codeA3: "MWI", name: "Malawi, Republic of" },
      { continentCode: "AS", codeA2: "MY", codeA3: "MYS", name: "Malaysia" },
      { continentCode: "AS", codeA2: "MV", codeA3: "MDV", name: "Maldives, Republic of" },
      { continentCode: "AF", codeA2: "ML", codeA3: "MLI", name: "Mali, Republic of" },
      { continentCode: "EU", codeA2: "MT", codeA3: "MLT", name: "Malta, Republic of" },
      { continentCode: "OC", codeA2: "MH", codeA3: "MHL", name: "Marshall Islands, Republic of the" },
      { continentCode: "NA", codeA2: "MQ", codeA3: "MTQ", name: "Martinique" },
      { continentCode: "AF", codeA2: "MR", codeA3: "MRT", name: "Mauritania, Islamic Republic of" },
      { continentCode: "AF", codeA2: "MU", codeA3: "MUS", name: "Mauritius, Republic of" },
      { continentCode: "AF", codeA2: "YT", codeA3: "MYT", name: "Mayotte, Department of" },
      { continentCode: "NA", codeA2: "MX", codeA3: "MEX", name: "Mexico, United Mexican States" },
      { continentCode: "OC", codeA2: "FM", codeA3: "FSM", name: "Micronesia, Federated States of" },
      { continentCode: "EU", codeA2: "MD", codeA3: "MDA", name: "Moldova, Republic of" },
      { continentCode: "EU", codeA2: "MC", codeA3: "MCO", name: "Monaco, Principality of" },
      { continentCode: "AS", codeA2: "MN", codeA3: "MNG", name: "Mongolia" },
      { continentCode: "EU", codeA2: "ME", codeA3: "MNE", name: "Montenegro" },
      { continentCode: "NA", codeA2: "MS", codeA3: "MSR", name: "Montserrat" },
      { continentCode: "AF", codeA2: "MA", codeA3: "MAR", name: "Morocco, Kingdom of" },
      { continentCode: "AF", codeA2: "MZ", codeA3: "MOZ", name: "Mozambique, Republic of" },
      { continentCode: "AS", codeA2: "MM", codeA3: "MMR", name: "Myanmar, Union of" },
      { continentCode: "AF", codeA2: "NA", codeA3: "NAM", name: "Namibia, Republic of" },
      { continentCode: "OC", codeA2: "NR", codeA3: "NRU", name: "Nauru, Republic of" },
      { continentCode: "AS", codeA2: "NP", codeA3: "NPL", name: "Nepal, Federal Democratic Republic of" },
      { continentCode: "EU", codeA2: "NL", codeA3: "NLD", name: "Netherlands, Kingdom of the" },
      { continentCode: "OC", codeA2: "NC", codeA3: "NCL", name: "New Caledonia" },
      { continentCode: "OC", codeA2: "NZ", codeA3: "NZL", name: "New Zealand" },
      { continentCode: "NA", codeA2: "NI", codeA3: "NIC", name: "Nicaragua, Republic of" },
      { continentCode: "AF", codeA2: "NE", codeA3: "NER", name: "Niger, Republic of" },
      { continentCode: "AF", codeA2: "NG", codeA3: "NGA", name: "Nigeria, Federal Republic of" },
      { continentCode: "OC", codeA2: "NU", codeA3: "NIU", name: "Niue" },
      { continentCode: "OC", codeA2: "NF", codeA3: "NFK", name: "Norfolk Island" },
      { continentCode: "EU", codeA2: "MK", codeA3: "MKD", name: "North Macedonia, Republic of" },
      { continentCode: "OC", codeA2: "MP", codeA3: "MNP", name: "Northern Mariana Islands, Commonwealth of the" },
      { continentCode: "EU", codeA2: "NO", codeA3: "NOR", name: "Norway, Kingdom of" },
      { continentCode: "AS", codeA2: "OM", codeA3: "OMN", name: "Oman, Sultanate of" },
      { continentCode: "AS", codeA2: "PK", codeA3: "PAK", name: "Pakistan, Islamic Republic of" },
      { continentCode: "OC", codeA2: "PW", codeA3: "PLW", name: "Palau, Republic of" },
      { continentCode: "AS", codeA2: "PS", codeA3: "PSE", name: "Palestine, State of" },
      { continentCode: "NA", codeA2: "PA", codeA3: "PAN", name: "Panama, Republic of" },
      { continentCode: "OC", codeA2: "PG", codeA3: "PNG", name: "Papua New Guinea, Independent State of" },
      { continentCode: "SA", codeA2: "PY", codeA3: "PRY", name: "Paraguay, Republic of" },
      { continentCode: "SA", codeA2: "PE", codeA3: "PER", name: "Peru, Republic of" },
      { continentCode: "AS", codeA2: "PH", codeA3: "PHL", name: "Philippines, Republic of the" },
      { continentCode: "OC", codeA2: "PN", codeA3: "PCN", name: "Pitcairn Islands" },
      { continentCode: "EU", codeA2: "PL", codeA3: "POL", name: "Poland, Republic of" },
      { continentCode: "EU", codeA2: "PT", codeA3: "PRT", name: "Portugal, Portuguese Republic" },
      { continentCode: "NA", codeA2: "PR", codeA3: "PRI", name: "Puerto Rico, Commonwealth of" },
      { continentCode: "AS", codeA2: "QA", codeA3: "QAT", name: "Qatar, State of" },
      { continentCode: "AF", codeA2: "RE", codeA3: "REU", name: "Reunion" },
      { continentCode: "EU", codeA2: "RO", codeA3: "ROU", name: "Romania" },
      { continentCode: "EU", codeA2: "RU", codeA3: "RUS", name: "Russian Federation" },
      { continentCode: "AF", codeA2: "RW", codeA3: "RWA", name: "Rwanda, Republic of" },
      { continentCode: "AF", codeA2: "EH", codeA3: "ESH", name: "Sahrawi Arab Democratic Republic" },
      { continentCode: "NA", codeA2: "BL", codeA3: "BLM", name: "Saint Barthelemy" },
      { continentCode: "AF", codeA2: "SH", codeA3: "SHN", name: "Saint Helena" },
      { continentCode: "NA", codeA2: "KN", codeA3: "KNA", name: "Saint Kitts and Nevis, Federation of" },
      { continentCode: "NA", codeA2: "LC", codeA3: "LCA", name: "Saint Lucia" },
      { continentCode: "NA", codeA2: "MF", codeA3: "MAF", name: "Saint Martin" },
      { continentCode: "NA", codeA2: "PM", codeA3: "SPM", name: "Saint Pierre and Miquelon" },
      { continentCode: "NA", codeA2: "VC", codeA3: "VCT", name: "Saint Vincent and the Grenadines" },
      { continentCode: "OC", codeA2: "WS", codeA3: "WSM", name: "Samoa, Independent State of" },
      { continentCode: "EU", codeA2: "SM", codeA3: "SMR", name: "San Marino, Republic of" },
      { continentCode: "AF", codeA2: "ST", codeA3: "STP", name: "São Tomé and Príncipe, Democratic Republic of" },
      { continentCode: "AS", codeA2: "SA", codeA3: "SAU", name: "Saudi Arabia, Kingdom of" },
      { continentCode: "AF", codeA2: "SN", codeA3: "SEN", name: "Senegal, Republic of" },
      { continentCode: "EU", codeA2: "RS", codeA3: "SRB", name: "Serbia, Republic of" },
      { continentCode: "AF", codeA2: "SC", codeA3: "SYC", name: "Seychelles, Republic of" },
      { continentCode: "AF", codeA2: "SL", codeA3: "SLE", name: "Sierra Leone, Republic of" },
      { continentCode: "AS", codeA2: "SG", codeA3: "SGP", name: "Singapore, Republic of" },
      { continentCode: "NA", codeA2: "SX", codeA3: "SXM", name: "Sint Maarten (Netherlands)" },
      { continentCode: "EU", codeA2: "SK", codeA3: "SVK", name: "Slovakia (Slovak Republic)" },
      { continentCode: "EU", codeA2: "SI", codeA3: "SVN", name: "Slovenia, Republic of" },
      { continentCode: "OC", codeA2: "SB", codeA3: "SLB", name: "Solomon Islands" },
      { continentCode: "AF", codeA2: "SO", codeA3: "SOM", name: "Somalia, Federal Republic of" },
      { continentCode: "AF", codeA2: "ZA", codeA3: "ZAF", name: "South Africa, Republic of" },
      { continentCode: "AN", codeA2: "GS", codeA3: "SGS", name: "South Georgia and the South Sandwich Islands" },
      { continentCode: "AF", codeA2: "SS", codeA3: "SSD", name: "South Sudan, Republic of" },
      { continentCode: "EU", codeA2: "ES", codeA3: "ESP", name: "Spain, Kingdom of" },
      { continentCode: "AS", codeA2: "LK", codeA3: "LKA", name: "Sri Lanka, Democratic Socialist Republic of" },
      { continentCode: "AF", codeA2: "SD", codeA3: "SDN", name: "Sudan, Republic of the" },
      { continentCode: "SA", codeA2: "SR", codeA3: "SUR", name: "Suriname, Republic of" },
      { continentCode: "EU", codeA2: "SJ", codeA3: "SJM", name: "Svalbard & Jan Mayen Islands" },
      { continentCode: "EU", codeA2: "SE", codeA3: "SWE", name: "Sweden, Kingdom of" },
      { continentCode: "EU", codeA2: "CH", codeA3: "CHE", name: "Switzerland, Swiss Confederation" },
      { continentCode: "AS", codeA2: "SY", codeA3: "SYR", name: "Syrian Arab Republic" },
      { continentCode: "AS", codeA2: "TW", codeA3: "TWN", name: "Taiwan" },
      { continentCode: "AS", codeA2: "TJ", codeA3: "TJK", name: "Tajikistan, Republic of" },
      { continentCode: "AF", codeA2: "TZ", codeA3: "TZA", name: "Tanzania, United Republic of" },
      { continentCode: "AS", codeA2: "TH", codeA3: "THA", name: "Thailand, Kingdom of" },
      { continentCode: "AS", codeA2: "TL", codeA3: "TLS", name: "Timor-Leste, Democratic Republic of" },
      { continentCode: "AF", codeA2: "TG", codeA3: "TGO", name: "Togo, Togolese Republic" },
      { continentCode: "OC", codeA2: "TK", codeA3: "TKL", name: "Tokelau" },
      { continentCode: "OC", codeA2: "TO", codeA3: "TON", name: "Tonga, Kingdom of" },
      { continentCode: "NA", codeA2: "TT", codeA3: "TTO", name: "Trinidad and Tobago, Republic of" },
      { continentCode: "AF", codeA2: "TN", codeA3: "TUN", name: "Tunisia, Republic of" },
      { continentCode: "AS", codeA2: "TR", codeA3: "TUR", name: "Turkey, Republic of" },
      { continentCode: "AS", codeA2: "TM", codeA3: "TKM", name: "Turkmenistan" },
      { continentCode: "NA", codeA2: "TC", codeA3: "TCA", name: "Turks and Caicos Islands" },
      { continentCode: "OC", codeA2: "TV", codeA3: "TUV", name: "Tuvalu" },
      { continentCode: "AF", codeA2: "UG", codeA3: "UGA", name: "Uganda, Republic of" },
      { continentCode: "EU", codeA2: "UA", codeA3: "UKR", name: "Ukraine" },
      { continentCode: "AS", codeA2: "AE", codeA3: "ARE", name: "United Arab Emirates" },
      { continentCode: "EU", codeA2: "GB", codeA3: "GBR", name: "United Kingdom of Great Britain & Northern Ireland" },
      { continentCode: "OC", codeA2: "UM", codeA3: "UMI", name: "United States Minor Outlying Islands" },
      { continentCode: "NA", codeA2: "US", codeA3: "USA", name: "United States of America" },
      { continentCode: "NA", codeA2: "VI", codeA3: "VIR", name: "United States Virgin Islands" },
      { continentCode: "SA", codeA2: "UY", codeA3: "URY", name: "Uruguay, Oriental Republic of" },
      { continentCode: "AS", codeA2: "UZ", codeA3: "UZB", name: "Uzbekistan, Republic of" },
      { continentCode: "OC", codeA2: "VU", codeA3: "VUT", name: "Vanuatu, Republic of" },
      { continentCode: "SA", codeA2: "VE", codeA3: "VEN", name: "Venezuela, Bolivarian Republic of" },
      { continentCode: "AS", codeA2: "VN", codeA3: "VNM", name: "Vietnam, Socialist Republic of" },
      { continentCode: "OC", codeA2: "WF", codeA3: "WLF", name: "Wallis and Futuna" },
      { continentCode: "AS", codeA2: "YE", codeA3: "YEM", name: "Yemen" },
      { continentCode: "AF", codeA2: "ZM", codeA3: "ZMB", name: "Zambia, Republic of" },
      { continentCode: "AF", codeA2: "ZW", codeA3: "ZWE", name: "Zimbabwe, Republic of" }
   ];
   const countries = await Country.find({});
   if (countries === undefined || countries.length === 0) {
      Country.create(predefinedCountries);
   }

};

module.exports = {
   insertInitialData
};
