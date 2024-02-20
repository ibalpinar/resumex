const User = require("./../models/User");
const UserType = require("./../models/UserType");
const Language = require("./../models/Language");
const Skill = require("./../models/Skill");
const Interest = require("./../models/Interest");

const insertInitialData = async()=>{
   const predefinedUserTypes = [
      { name : "admin"},
      { name : "candidate"},
      { name : "editor"}
   ];
   const userTypes = await UserType.find({});
   if (userTypes === undefined || userTypes.length === 0) {
      UserType.create(predefinedUserTypes);
   }

   const predefinedLanguages = [
      { name : "English"},
      { name : "Turkish"},
      { name : "Chinese"},
      { name : "Arabic"},
      { name : "Hindi"},
      { name : "Portuguese"},
      { name : "Russian"},
      { name : "Japanese"},
      { name : "French"},
      { name : "Spanish"}
   ];
   const languages = await Language.find({});
   if (languages === undefined || languages.length === 0) {
      Language.create(predefinedLanguages);
   }

   const predefinedSkills = [
      { name : "Effective Hiring"},
      { name : "Time Management"},
      { name : "People Management"},
      { name : "Execution"},
      { name : "Performance Management"},
      { name : "Listening"},
      { name : "Resource Planning"},
      { name : "Good Communication"},
      { name : "Budget Management"},
      { name : "Open Source"},
      { name : "Project Management"},
      { name : "Java"},
      { name : "Node.js"},
      { name : "C#"},
      { name : "Linux"},
      { name : "Software Development"},
      { name : "RESTful Services"},
      { name : "System Administration"},
      { name : "Object Oriented Paradigm"},
      { name : "DevOps"},
      { name : "Database Systems"},
      { name : "Agile Methodologies"},
      { name : "Scalability"},
      { name : "Availability"},
      { name : "Caching"},
      { name : "Indexing Engines"},
      { name : "GIT"},
      { name : "Cloud Platforms (GCP, AWS, Azure)"}
   ];
   const skills = await Skill.find({});
   if (skills === undefined || skills.length === 0) {
      Skill.create(predefinedSkills);
   }

   const predefinedInterests = [
      { name : "Photography"},
      { name : "Constant Reading"},
      { name : "Chess"},
      { name : "Basketball"},
      { name : "Swimming"},
      { name : "Travelling"},
      { name : "Science & Technology"}
   ];
   const interests = await Interest.find({});
   if (interests === undefined || interests.length === 0) {
      Interest.create(predefinedInterests);
   }

   const predefinedUsers = [
      {
         "name": "Ilker",
         "lastName": "Balpinar",
         "email": "ilker@balpinar.com",
         "password": "buBirsifredir!!!",
         "confirmPassword": "buBirsifredir!!!"
     },
     {
         "name": "Linus",
         "lastName": "Torvalds",
         "email": "linus@torvalds.com",
         "password": "buBirsifredir2!!!",
         "confirmPassword": "buBirsifredir2!!!"
     },
     {
         "name": "Bill",
         "lastName": "Gates",
         "email": "bill@gates.com",
         "password": "buBirsifredir3!!!",
         "confirmPassword": "buBirsifredir3!!!"
     },
     {
         "name": "Dennis",
         "lastName": "Ritchie",
         "email": "dennis@ritchie.com",
         "password": "buBirsifredir4!!!",
         "confirmPassword": "buBirsifredir4!!!"
     },
     {
         "name": "Richard",
         "lastName": "Stallman",
         "email": "richard@stallman.com",
         "password": "buBirsifredir5!!!",
         "confirmPassword": "buBirsifredir5!!!"
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
