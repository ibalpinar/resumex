const mongoose = require('mongoose');
const validator = require('validator');
const { Schema, model } = mongoose;

const ResumeSchema = new Schema({
   header: {
      type: Object,
      properties: {
         fullName: String,
         title: String,
         objective: String,
         photograph: String,
         email: String,
         mobile: String,
         location: String,
         linkedin: String,
         github: String
      }
   },
   WorkExperience: {
      type: Array,
      items: {
         type: Object,
         properties: {
            position: String,
            company: String,
            start: String,
            end: String,
            location: String,
            accomplishments: {
               type: Array,
               items: {
                  type: String
               }
            }
         }
      }
   },
   skills: {
      type: Array,
      items: {
         type: String
      }
   },
   education: {
      type: Array,
      items: {
         type: Object,
         properties: {
            school: String,
            department: String,
            location: String,
            start: String,
            end: String,
            degree: String
         }
      }
   },
   languages: {
      type: Array,
      items: {
         type: Object,
         properties: {
            name: String,
            level: String
         }
      }
   },
   courses: {
      type: Array,
      items: {
         type: Object,
         properties: {
            name: String,
            company: String
         }
      }
   },
   interests: {
      type: Array,
      items: {
         type: Object,
         properties: {
            name: String,
            iconName: String
         }
      }
   }

});


const Resume = model('Resume', ResumeSchema);

module.exports = Resume;
