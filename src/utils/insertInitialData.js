const User = require("../models/User");
const UserType = require("../models/UserType");
const Language = require("../models/Language");
const Skill = require("../models/Skill");
const Interest = require("../models/Interest");
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
};

module.exports = {
   insertInitialData
};
