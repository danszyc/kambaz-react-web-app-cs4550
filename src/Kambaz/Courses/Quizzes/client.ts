/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const REMOTE_SERVER =
  import.meta.env.VITE_REMOTE_SERVER || import.meta.env.REACT_APP_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;

// Fetch all quizzes for a course
export const getAllQuizzesForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${REMOTE_SERVER}/api/courses/${courseId}/quizzes`);
  return data;
};

// Fetch a single quiz by ID
export const getQuizById = async (courseId:string, id: string) => {
  // console.log("Fetching quiz with ID:", id, `${REMOTE_SERVER}/api/courses/${courseId}/quizzes/${id}`);
  const response = await axios.get(`${REMOTE_SERVER}/api/courses/${courseId}/quizzes/${id}`);
  //console.log("Fetched quiz data:", response);
  return response.data;
};

// Create a new quiz
export const createQuiz = async (quiz: any) => {
  const cleanQuiz = {
    // _id: quiz._id,
    name: quiz.name,
    description: quiz.description,
    course: quiz.course, // Link to the course
    quizType: quiz.quizType,
    assignmentGroup: quiz.assignmentGroup,
    shuffleAnswers: quiz.shuffleAnswers,
    timeLimit: quiz.timeLimit,
    lockQuestionsAfterAnswering: quiz.lockQuestionsAfterAnswering,
    showCorrectAnswers: quiz.showCorrectAnswers,
    accessCode: quiz.accessCode,
    oneQuestionAtATime: quiz.oneQuestionAtATime,
    webcamRequired: quiz.webcamRequired,
    dueDate: quiz.dueDate,
    multipleAttempts: quiz.multipleAttempts,
    howManyAttempts: quiz.howManyAttempts,
    points: quiz.points,
    availableFrom: quiz.availableFrom,
    availableUntil: quiz.availableUntil,
    published: quiz.published
  };

  const response = await axios.post(`${REMOTE_SERVER}/api/courses/${quiz.course}/quizzes`, cleanQuiz);
  return response.data;
};

// Update an existing quiz
export const updateQuiz = async (quiz: any) => {
  const cleanQuiz = {
    _id: quiz._id,
    name: quiz.name,
    description: quiz.description,
    course: quiz.course, // Link to the course
    quizType: quiz.quizType,
    assignmentGroup: quiz.assignmentGroup,
    shuffleAnswers: quiz.shuffleAnswers,
    timeLimit: quiz.timeLimit,
    lockQuestionsAfterAnswering: quiz.lockQuestionsAfterAnswering,
    showCorrectAnswers: quiz.showCorrectAnswers,
    accessCode: quiz.accessCode,
    oneQuestionAtATime: quiz.oneQuestionAtATime,
    webcamRequired: quiz.webcamRequired,
    dueDate: quiz.dueDate,
    multipleAttempts: quiz.multipleAttempts,
    howManyAttempts: quiz.howManyAttempts,
    points: quiz.points,
    availableFrom: quiz.availableFrom,
    availableUntil: quiz.availableUntil,
    published: quiz.published
  };

  const response = await axios.put(`${REMOTE_SERVER}/api/courses/${quiz.course}/quizzes/${quiz._id}`, cleanQuiz);
  return response.data;
};

// Delete a quiz by ID
export const deleteQuiz = async (cid: string, id: string) => {
  const response = await axios.delete(`${REMOTE_SERVER}/api/courses/${cid}/quizzes/${id}`);
  return response.data;
};
