const mongoose = require('mongoose');
const validator = require('validator');
const { Schema, model } = mongoose;
const User = require('../models/User');

const ResumeSchema = new Schema({
   userId: {
      type: Schema.Types.ObjectId,
      ref: User
   },
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
   workExperience: {
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
   },
   createdAt: {
      type : Date,
      default: Date.now,
      trim: true
   },
   updatedAt: {
      type : Date,
      default: null,
      trim: true
   },
   deletedAt: {
      type : Date,
      default: null,
      trim: true
   }

});

const Resume = model('Resume', ResumeSchema);

module.exports = Resume;