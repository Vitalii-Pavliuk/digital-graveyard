import mongoose, { Schema, model, models } from "mongoose";


const CommentSchema = new Schema ({
  commentator: {
    type: String, 
    required: true
  },
  comment:     {
    type: String, 
    required: true
  },
});

const GraveSchema = new Schema({
  projectName: {
    type: String,
    required: true,
    // unique: true,
  },
  userName: {
    type: String,
    required: true,
  },
  gitHubUrl: {
    type: String,
    required: true,
  },
  epitaph:{
 type: String,
 required: true,
  },
  languages: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  causeOfDeath: {
    type: String,
    required: true,
  },
  diedAt:{
    type: Date,
    required: true,
  },

    candles:{
    type: [String],
    default: []
  },

  condolence:{
    type: [CommentSchema],
    default: []
  }


});

export default models.Grave || model("Grave", GraveSchema);