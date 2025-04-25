import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    _id: String,
    name: String,
    description: String,
    course: { type: String, ref: "CourseModel" },

    quizType: {
      type: String,
      enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
      default: "Graded Quiz"
    },

    assignmentGroup: {
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Project"],
      default: "Quizzes"
    },

    shuffleAnswers: {
      type: Boolean,
      default: true
    },

    timeLimit: {
      type: Number,
      default: 20
    },

    lockQuestionsAfterAnswering: {
      type: Boolean,
      default: false
    },

    showCorrectAnswers: {
      type: String,
      enum: [
        "Always", 
        "Only once after each attempt", 
        "Only after last attempt", 
        "Never"
      ],
      default: "Never"
    },

    accessCode: {
      type: String,
      default: ""
    },

    oneQuestionAtATime: {
      type: Boolean,
      default: true
    },

    webcamRequired: {
      type: Boolean,
      default: false
    },

    dueDate: Date,

    multipleAttempts: {
      type: Boolean,
      default: false
    },

    howManyAttempts: {
      type: Number,
      default: 1
    },

    points: {
      type: Number,
      default: 0
    },

    availableDate: Date,
    untilDate: Date
  },
  { collection: "quizzes" }
);

export default schema;
