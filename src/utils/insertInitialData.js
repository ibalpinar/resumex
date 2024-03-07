const User = require("../models/User");
const UserType = require("../models/UserType");
const Language = require("../models/Language");
const Skill = require("../models/Skill");
const Interest = require("../models/Interest");
const Continent = require("../models/Continent");
const Country = require("../models/Country");

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
      { _id: "65e0a6630426e221f00bc0d6", name: "Afghanistan, Islamic Republic of", codeA2: "AF", codeA3: "AFG", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc0d7", name: "Åland Islands", codeA2: "AX", codeA3: "ALA", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc0d8", name: "Albania, Republic of", codeA2: "AL", codeA3: "ALB", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc0d9", name: "Algeria, People's Democratic Republic of", codeA2: "DZ", codeA3: "DZA", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc0dc", name: "Angola, Republic of", codeA2: "AO", codeA3: "AGO", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc0dd", name: "Anguilla", codeA2: "AI", codeA3: "AIA", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc0de", name: "Antarctica (the territory South of 60 deg S)", codeA2: "AQ", codeA3: "ATA", continentCode: "AN" },
      { _id: "65e0a6630426e221f00bc0df", name: "Antigua and Barbuda", codeA2: "AG", codeA3: "ATG", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc0e1", name: "Armenia, Republic of", codeA2: "AM", codeA3: "ARM", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc0db", name: "Andorra, Principality of", codeA2: "AD", codeA3: "AND", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc0da", name: "American Samoa", codeA2: "AS", codeA3: "ASM", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc0e3", name: "Australia, Commonwealth of", codeA2: "AU", codeA3: "AUS", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc0e4", name: "Austria, Republic of", codeA2: "AT", codeA3: "AUT", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc0e5", name: "Azerbaijan, Republic of", codeA2: "AZ", codeA3: "AZE", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc0e0", name: "Argentina, Argentine Republic", codeA2: "AR", codeA3: "ARG", continentCode: "SA" },
      { _id: "65e0a6630426e221f00bc0e9", name: "Barbados", codeA2: "BB", codeA3: "BRB", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc0e2", name: "Aruba", codeA2: "AW", codeA3: "ABW", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc0e8", name: "Bangladesh, People's Republic of", codeA2: "BD", codeA3: "BGD", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc0eb", name: "Belgium, Kingdom of", codeA2: "BE", codeA3: "BEL", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc0ea", name: "Belarus, Republic of", codeA2: "BY", codeA3: "BLR", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc0ec", name: "Belize", codeA2: "BZ", codeA3: "BLZ", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc0e6", name: "Bahamas, Commonwealth of the", codeA2: "BS", codeA3: "BHS", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc0ef", name: "Bhutan, Kingdom of", codeA2: "BT", codeA3: "BTN", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc0ee", name: "Bermuda", codeA2: "BM", codeA3: "BMU", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc0e7", name: "Bahrain, Kingdom of", codeA2: "BH", codeA3: "BHR", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc0f2", name: "Bosnia and Herzegovina", codeA2: "BA", codeA3: "BIH", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc0f1", name: "Bonaire, Sint Eustatius and Saba", codeA2: "BQ", codeA3: "BES", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc0f3", name: "Botswana, Republic of", codeA2: "BW", codeA3: "BWA", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc0f4", name: "Bouvet Island (Bouvetoya)", codeA2: "BV", codeA3: "BVT", continentCode: "AN" },
      { _id: "65e0a6630426e221f00bc0f5", name: "Brazil, Federative Republic of", codeA2: "BR", codeA3: "BRA", continentCode: "SA" },
      { _id: "65e0a6630426e221f00bc0f6", name: "British Indian Ocean Territory", codeA2: "IO", codeA3: "IOT", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc0f7", name: "British Virgin Islands", codeA2: "VG", codeA3: "VGB", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc0ed", name: "Benin, Republic of", codeA2: "BJ", codeA3: "BEN", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc0f0", name: "Bolivia, Plurinational State of", codeA2: "BO", codeA3: "BOL", continentCode: "SA" },
      { _id: "65e0a6630426e221f00bc0fb", name: "Burundi, Republic of", codeA2: "BI", codeA3: "BDI", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc0fa", name: "Burkina Faso", codeA2: "BF", codeA3: "BFA", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc0fd", name: "Cameroon, Republic of", codeA2: "CM", codeA3: "CMR", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc0fc", name: "Cambodia, Kingdom of", codeA2: "KH", codeA3: "KHM", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc0fe", name: "Canada", codeA2: "CA", codeA3: "CAN", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc0ff", name: "Cape Verde, Republic of", codeA2: "CV", codeA3: "CPV", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc100", name: "Cayman Islands", codeA2: "KY", codeA3: "CYM", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc101", name: "Central African Republic", codeA2: "CF", codeA3: "CAF", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc102", name: "Chad, Republic of", codeA2: "TD", codeA3: "TCD", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc0f8", name: "Brunei, Nation of, the Abode of Peace", codeA2: "BN", codeA3: "BRN", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc0f9", name: "Bulgaria, Republic of", codeA2: "BG", codeA3: "BGR", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc105", name: "Christmas Island", codeA2: "CX", codeA3: "CXR", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc106", name: "Cocos (Keeling) Islands", codeA2: "CC", codeA3: "CCK", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc107", name: "Colombia, Republic of", codeA2: "CO", codeA3: "COL", continentCode: "SA" },
      { _id: "65e0a6630426e221f00bc108", name: "Comoros, Union of the", codeA2: "KM", codeA3: "COM", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc10a", name: "Congo, Republic of the", codeA2: "CG", codeA3: "COG", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc109", name: "Congo, Democratic Republic of the", codeA2: "CD", codeA3: "COD", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc10b", name: "Cook Islands", codeA2: "CK", codeA3: "COK", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc10d", name: "Côte d'Ivoire, Republic of", codeA2: "CI", codeA3: "CIV", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc103", name: "Chile, Republic of", codeA2: "CL", codeA3: "CHL", continentCode: "SA" },
      { _id: "65e0a6630426e221f00bc10e", name: "Croatia, Republic of", codeA2: "HR", codeA3: "HRV", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc110", name: "Curaçao", codeA2: "CW", codeA3: "CUW", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc111", name: "Cyprus, Republic of", codeA2: "CY", codeA3: "CYP", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc104", name: "China, People's Republic of", codeA2: "CN", codeA3: "CHN", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc112", name: "Czech Republic", codeA2: "CZ", codeA3: "CZE", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc113", name: "Denmark, Kingdom of", codeA2: "DK", codeA3: "DNK", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc114", name: "Djibouti, Republic of", codeA2: "DJ", codeA3: "DJI", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc115", name: "Dominica, Commonwealth of", codeA2: "DM", codeA3: "DMA", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc116", name: "Dominican Republic", codeA2: "DO", codeA3: "DOM", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc10c", name: "Costa Rica, Republic of", codeA2: "CR", codeA3: "CRI", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc118", name: "Egypt, Arab Republic of", codeA2: "EG", codeA3: "EGY", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc10f", name: "Cuba, Republic of", codeA2: "CU", codeA3: "CUB", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc11b", name: "Eritrea, State of", codeA2: "ER", codeA3: "ERI", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc11a", name: "Equatorial Guinea, Republic of", codeA2: "GQ", codeA3: "GNQ", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc11c", name: "Estonia, Republic of", codeA2: "EE", codeA3: "EST", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc11d", name: "Eswatini, Kingdom of", codeA2: "SZ", codeA3: "SWZ", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc127", name: "Gabon, Gabonese Republic", codeA2: "GA", codeA3: "GAB", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc119", name: "El Salvador, Republic of", codeA2: "SV", codeA3: "SLV", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc128", name: "Gambia, Republic of the", codeA2: "GM", codeA3: "GMB", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc11e", name: "Ethiopia, Federal Democratic Republic of", codeA2: "ET", codeA3: "ETH", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc11f", name: "Falkland Islands (Malvinas)", codeA2: "FK", codeA3: "FLK", continentCode: "SA" },
      { _id: "65e0a6630426e221f00bc129", name: "Georgia", codeA2: "GE", codeA3: "GEO", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc117", name: "Ecuador, Republic of", codeA2: "EC", codeA3: "ECU", continentCode: "SA" },
      { _id: "65e0a6630426e221f00bc121", name: "Fiji, Republic of", codeA2: "FJ", codeA3: "FJI", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc12d", name: "Greece, Hellenic Republic", codeA2: "GR", codeA3: "GRC", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc120", name: "Faroe Islands", codeA2: "FO", codeA3: "FRO", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc123", name: "France, French Republic", codeA2: "FR", codeA3: "FRA", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc12a", name: "Germany, Federal Republic of", codeA2: "DE", codeA3: "DEU", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc122", name: "Finland, Republic of", codeA2: "FI", codeA3: "FIN", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc124", name: "French Guiana", codeA2: "GF", codeA3: "GUF", continentCode: "SA" },
      { _id: "65e0a6630426e221f00bc12b", name: "Ghana, Republic of", codeA2: "GH", codeA3: "GHA", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc12e", name: "Greenland", codeA2: "GL", codeA3: "GRL", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc12c", name: "Gibraltar", codeA2: "GI", codeA3: "GIB", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc12f", name: "Grenada", codeA2: "GD", codeA3: "GRD", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc130", name: "Guadeloupe", codeA2: "GP", codeA3: "GLP", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc131", name: "Guam", codeA2: "GU", codeA3: "GUM", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc132", name: "Guatemala, Republic of", codeA2: "GT", codeA3: "GTM", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc133", name: "Guernsey, Bailiwick of", codeA2: "GG", codeA3: "GGY", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc134", name: "Guinea-Bissau, Republic of", codeA2: "GW", codeA3: "GNB", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc135", name: "Guinea, Republic of", codeA2: "GN", codeA3: "GIN", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc136", name: "Guyana, Co-operative Republic of", codeA2: "GY", codeA3: "GUY", continentCode: "SA" },
      { _id: "65e0a6630426e221f00bc125", name: "French Polynesia", codeA2: "PF", codeA3: "PYF", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc126", name: "French Southern Territories", codeA2: "TF", codeA3: "ATF", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc139", name: "Holy See (Vatican City State)", codeA2: "VA", codeA3: "VAT", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc13a", name: "Honduras, Republic of", codeA2: "HN", codeA3: "HND", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc13b", name: "Hong Kong, Special Administrative Region of China", codeA2: "HK", codeA3: "HKG", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc13c", name: "Hungary, Republic of", codeA2: "HU", codeA3: "HUN", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc13d", name: "Iceland, Republic of", codeA2: "IS", codeA3: "ISL", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc13e", name: "India, Republic of", codeA2: "IN", codeA3: "IND", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc13f", name: "Indonesia, Republic of", codeA2: "ID", codeA3: "IDN", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc140", name: "Iran, Islamic Republic of", codeA2: "IR", codeA3: "IRN", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc141", name: "Iraq, Republic of", codeA2: "IQ", codeA3: "IRQ", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc142", name: "Ireland", codeA2: "IE", codeA3: "IRL", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc143", name: "Isle of Man", codeA2: "IM", codeA3: "IMN", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc144", name: "Israel, State of", codeA2: "IL", codeA3: "ISR", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc145", name: "Italy, Italian Republic", codeA2: "IT", codeA3: "ITA", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc146", name: "Jamaica", codeA2: "JM", codeA3: "JAM", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc147", name: "Japan", codeA2: "JP", codeA3: "JPN", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc148", name: "Jersey, Bailiwick of", codeA2: "JE", codeA3: "JEY", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc149", name: "Jordan, Hashemite Kingdom of", codeA2: "JO", codeA3: "JOR", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc14a", name: "Kazakhstan, Republic of", codeA2: "KZ", codeA3: "KAZ", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc14b", name: "Kenya, Republic of", codeA2: "KE", codeA3: "KEN", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc14c", name: "Kiribati, Republic of", codeA2: "KI", codeA3: "KIR", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc14d", name: "Korea, Democratic People's Republic of", codeA2: "KP", codeA3: "PRK", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc14e", name: "Korea, Republic of", codeA2: "KR", codeA3: "KOR", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc14f", name: "Republic of", codeA2: "XK", codeA3: "XKX", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc150", name: "Kuwait, State of", codeA2: "KW", codeA3: "KWT", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc151", name: "Kyrgyz Republic", codeA2: "KG", codeA3: "KGZ", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc152", name: "Lao People's Democratic Republic", codeA2: "LA", codeA3: "LAO", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc153", name: "Latvia, Republic of", codeA2: "LV", codeA3: "LVA", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc154", name: "Lebanon, Lebanese Republic", codeA2: "LB", codeA3: "LBN", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc155", name: "Lesotho, Kingdom of", codeA2: "LS", codeA3: "LSO", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc156", name: "Liberia, Republic of", codeA2: "LR", codeA3: "LBR", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc157", name: "Libya, State of", codeA2: "LY", codeA3: "LBY", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc158", name: "Liechtenstein, Principality of", codeA2: "LI", codeA3: "LIE", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc159", name: "Lithuania, Republic of", codeA2: "LT", codeA3: "LTU", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc15a", name: "Luxembourg, Grand Duchy of", codeA2: "LU", codeA3: "LUX", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc15b", name: "Macao, Special Administrative Region of China", codeA2: "MO", codeA3: "MAC", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc15c", name: "Madagascar, Republic of", codeA2: "MG", codeA3: "MDG", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc15d", name: "Malawi, Republic of", codeA2: "MW", codeA3: "MWI", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc15e", name: "Malaysia", codeA2: "MY", codeA3: "MYS", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc15f", name: "Maldives, Republic of", codeA2: "MV", codeA3: "MDV", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc160", name: "Mali, Republic of", codeA2: "ML", codeA3: "MLI", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc161", name: "Malta, Republic of", codeA2: "MT", codeA3: "MLT", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc162", name: "Marshall Islands, Republic of the", codeA2: "MH", codeA3: "MHL", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc163", name: "Martinique", codeA2: "MQ", codeA3: "MTQ", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc164", name: "Mauritania, Islamic Republic of", codeA2: "MR", codeA3: "MRT", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc165", name: "Mauritius, Republic of", codeA2: "MU", codeA3: "MUS", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc166", name: "Mayotte, Department of", codeA2: "YT", codeA3: "MYT", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc167", name: "Mexico, United Mexican States", codeA2: "MX", codeA3: "MEX", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc168", name: "Micronesia, Federated States of", codeA2: "FM", codeA3: "FSM", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc169", name: "Moldova, Republic of", codeA2: "MD", codeA3: "MDA", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc16a", name: "Monaco, Principality of", codeA2: "MC", codeA3: "MCO", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc16b", name: "Mongolia", codeA2: "MN", codeA3: "MNG", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc16c", name: "Montenegro", codeA2: "ME", codeA3: "MNE", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc16d", name: "Montserrat", codeA2: "MS", codeA3: "MSR", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc16e", name: "Morocco, Kingdom of", codeA2: "MA", codeA3: "MAR", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc16f", name: "Mozambique, Republic of", codeA2: "MZ", codeA3: "MOZ", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc170", name: "Myanmar, Union of", codeA2: "MM", codeA3: "MMR", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc171", name: "Namibia, Republic of", codeA2: "NA", codeA3: "NAM", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc172", name: "Nauru, Republic of", codeA2: "NR", codeA3: "NRU", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc173", name: "Nepal, Federal Democratic Republic of", codeA2: "NP", codeA3: "NPL", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc174", name: "Netherlands, Kingdom of the", codeA2: "NL", codeA3: "NLD", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc175", name: "New Caledonia", codeA2: "NC", codeA3: "NCL", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc176", name: "New Zealand", codeA2: "NZ", codeA3: "NZL", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc177", name: "Nicaragua, Republic of", codeA2: "NI", codeA3: "NIC", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc178", name: "Niger, Republic of", codeA2: "NE", codeA3: "NER", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc179", name: "Nigeria, Federal Republic of", codeA2: "NG", codeA3: "NGA", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc17a", name: "Niue", codeA2: "NU", codeA3: "NIU", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc17b", name: "Norfolk Island", codeA2: "NF", codeA3: "NFK", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc17c", name: "North Macedonia, Republic of", codeA2: "MK", codeA3: "MKD", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc17d", name: "Northern Mariana Islands, Commonwealth of the", codeA2: "MP", codeA3: "MNP", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc17e", name: "Norway, Kingdom of", codeA2: "NO", codeA3: "NOR", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc17f", name: "Oman, Sultanate of", codeA2: "OM", codeA3: "OMN", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc180", name: "Pakistan, Islamic Republic of", codeA2: "PK", codeA3: "PAK", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc181", name: "Palau, Republic of", codeA2: "PW", codeA3: "PLW", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc182", name: "Palestine, State of", codeA2: "PS", codeA3: "PSE", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc183", name: "Panama, Republic of", codeA2: "PA", codeA3: "PAN", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc184", name: "Papua New Guinea, Independent State of", codeA2: "PG", codeA3: "PNG", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc185", name: "Paraguay, Republic of", codeA2: "PY", codeA3: "PRY", continentCode: "SA" },
      { _id: "65e0a6630426e221f00bc186", name: "Peru, Republic of", codeA2: "PE", codeA3: "PER", continentCode: "SA" },
      { _id: "65e0a6630426e221f00bc187", name: "Philippines, Republic of the", codeA2: "PH", codeA3: "PHL", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc188", name: "Pitcairn Islands", codeA2: "PN", codeA3: "PCN", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc189", name: "Poland, Republic of", codeA2: "PL", codeA3: "POL", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc18a", name: "Portugal, Portuguese Republic", codeA2: "PT", codeA3: "PRT", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc18b", name: "Puerto Rico, Commonwealth of", codeA2: "PR", codeA3: "PRI", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc18c", name: "Qatar, State of", codeA2: "QA", codeA3: "QAT", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc18d", name: "Reunion", codeA2: "RE", codeA3: "REU", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc18e", name: "Romania", codeA2: "RO", codeA3: "ROU", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc18f", name: "Russian Federation", codeA2: "RU", codeA3: "RUS", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc190", name: "Rwanda, Republic of", codeA2: "RW", codeA3: "RWA", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc191", name: "Sahrawi Arab Democratic Republic", codeA2: "EH", codeA3: "ESH", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc192", name: "Saint Barthelemy", codeA2: "BL", codeA3: "BLM", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc193", name: "Saint Helena", codeA2: "SH", codeA3: "SHN", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc194", name: "Saint Kitts and Nevis, Federation of", codeA2: "KN", codeA3: "KNA", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc195", name: "Saint Lucia", codeA2: "LC", codeA3: "LCA", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc196", name: "Saint Martin", codeA2: "MF", codeA3: "MAF", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc197", name: "Saint Pierre and Miquelon", codeA2: "PM", codeA3: "SPM", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc198", name: "Saint Vincent and the Grenadines", codeA2: "VC", codeA3: "VCT", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc199", name: "Samoa, Independent State of", codeA2: "WS", codeA3: "WSM", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc19a", name: "San Marino, Republic of", codeA2: "SM", codeA3: "SMR", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc19b", name: "São Tomé and Príncipe, Democratic Republic of", codeA2: "ST", codeA3: "STP", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc19c", name: "Saudi Arabia, Kingdom of", codeA2: "SA", codeA3: "SAU", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc19d", name: "Senegal, Republic of", codeA2: "SN", codeA3: "SEN", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc19e", name: "Serbia, Republic of", codeA2: "RS", codeA3: "SRB", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc19f", name: "Seychelles, Republic of", codeA2: "SC", codeA3: "SYC", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc1a0", name: "Sierra Leone, Republic of", codeA2: "SL", codeA3: "SLE", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc1a1", name: "Singapore, Republic of", codeA2: "SG", codeA3: "SGP", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc1a2", name: "Sint Maarten (Netherlands)", codeA2: "SX", codeA3: "SXM", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc1a3", name: "Slovakia (Slovak Republic)", codeA2: "SK", codeA3: "SVK", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc1a4", name: "Slovenia, Republic of", codeA2: "SI", codeA3: "SVN", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc1a5", name: "Solomon Islands", codeA2: "SB", codeA3: "SLB", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc1a6", name: "Somalia, Federal Republic of", codeA2: "SO", codeA3: "SOM", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc1a7", name: "South Africa, Republic of", codeA2: "ZA", codeA3: "ZAF", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc1a8", name: "South Georgia and the South Sandwich Islands", codeA2: "GS", codeA3: "SGS", continentCode: "AN" },
      { _id: "65e0a6630426e221f00bc137", name: "Haiti, Republic of", codeA2: "HT", codeA3: "HTI", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc1aa", name: "Spain, Kingdom of", codeA2: "ES", codeA3: "ESP", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc1ab", name: "Sri Lanka, Democratic Socialist Republic of", codeA2: "LK", codeA3: "LKA", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc1ac", name: "Sudan, Republic of the", codeA2: "SD", codeA3: "SDN", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc1ad", name: "Suriname, Republic of", codeA2: "SR", codeA3: "SUR", continentCode: "SA" },
      { _id: "65e0a6630426e221f00bc1ae", name: "Svalbard & Jan Mayen Islands", codeA2: "SJ", codeA3: "SJM", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc1af", name: "Sweden, Kingdom of", codeA2: "SE", codeA3: "SWE", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc1b0", name: "Switzerland, Swiss Confederation", codeA2: "CH", codeA3: "CHE", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc1b1", name: "Syrian Arab Republic", codeA2: "SY", codeA3: "SYR", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc1b2", name: "Taiwan", codeA2: "TW", codeA3: "TWN", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc1b3", name: "Tajikistan, Republic of", codeA2: "TJ", codeA3: "TJK", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc1b4", name: "Tanzania, United Republic of", codeA2: "TZ", codeA3: "TZA", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc1b5", name: "Thailand, Kingdom of", codeA2: "TH", codeA3: "THA", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc1b6", name: "Timor-Leste, Democratic Republic of", codeA2: "TL", codeA3: "TLS", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc1b7", name: "Togo, Togolese Republic", codeA2: "TG", codeA3: "TGO", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc1b8", name: "Tokelau", codeA2: "TK", codeA3: "TKL", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc1b9", name: "Tonga, Kingdom of", codeA2: "TO", codeA3: "TON", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc1ba", name: "Trinidad and Tobago, Republic of", codeA2: "TT", codeA3: "TTO", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc1bb", name: "Tunisia, Republic of", codeA2: "TN", codeA3: "TUN", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc1bc", name: "Turkey, Republic of", codeA2: "TR", codeA3: "TUR", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc1bd", name: "Turkmenistan", codeA2: "TM", codeA3: "TKM", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc1be", name: "Turks and Caicos Islands", codeA2: "TC", codeA3: "TCA", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc1bf", name: "Tuvalu", codeA2: "TV", codeA3: "TUV", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc138", name: "Heard Island and McDonald Islands", codeA2: "HM", codeA3: "HMD", continentCode: "AN" },
      { _id: "65e0a6630426e221f00bc1c1", name: "Ukraine", codeA2: "UA", codeA3: "UKR", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc1c2", name: "United Arab Emirates", codeA2: "AE", codeA3: "ARE", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc1c3", name: "United Kingdom of Great Britain & Northern Ireland", codeA2: "GB", codeA3: "GBR", continentCode: "EU" },
      { _id: "65e0a6630426e221f00bc1c4", name: "United States Minor Outlying Islands", codeA2: "UM", codeA3: "UMI", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc1c5", name: "United States of America", codeA2: "US", codeA3: "USA", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc1c6", name: "United States Virgin Islands", codeA2: "VI", codeA3: "VIR", continentCode: "NA" },
      { _id: "65e0a6630426e221f00bc1c7", name: "Uruguay, Oriental Republic of", codeA2: "UY", codeA3: "URY", continentCode: "SA" },
      { _id: "65e0a6630426e221f00bc1c8", name: "Uzbekistan, Republic of", codeA2: "UZ", codeA3: "UZB", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc1c9", name: "Vanuatu, Republic of", codeA2: "VU", codeA3: "VUT", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc1ca", name: "Venezuela, Bolivarian Republic of", codeA2: "VE", codeA3: "VEN", continentCode: "SA" },
      { _id: "65e0a6630426e221f00bc1cb", name: "Vietnam, Socialist Republic of", codeA2: "VN", codeA3: "VNM", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc1cc", name: "Wallis and Futuna", codeA2: "WF", codeA3: "WLF", continentCode: "OC" },
      { _id: "65e0a6630426e221f00bc1cd", name: "Yemen", codeA2: "YE", codeA3: "YEM", continentCode: "AS" },
      { _id: "65e0a6630426e221f00bc1ce", name: "Zambia, Republic of", codeA2: "ZM", codeA3: "ZMB", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc1cf", name: "Zimbabwe, Republic of", codeA2: "ZW", codeA3: "ZWE", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc1a9", name: "South Sudan, Republic of", codeA2: "SS", codeA3: "SSD", continentCode: "AF" },
      { _id: "65e0a6630426e221f00bc1c0", name: "Uganda, Republic of", codeA2: "UG", codeA3: "UGA", continentCode: "AF" }
   ];
   const countries = await Country.find({});
   if (countries === undefined || countries.length === 0) {
      Country.create(predefinedCountries);
   }

};

module.exports = {
   insertInitialData
};
