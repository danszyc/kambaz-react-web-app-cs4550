import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";
import * as quizzesDao from "../Quizzes/dao.js";

export default function CourseRoutes(app) {
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.send(courses);
  });

  app.delete("/api/courses/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.deleteCourse(courseId);
    res.send(status);
  });

  app.put("/api/courses/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    const status = await dao.updateCourse(courseId, courseUpdates);
    res.send(status);
  });

  app.get("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
    const modules = await modulesDao.findModulesForCourse(courseId);
    res.json(modules);
  });

  app.post("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
    const module = {
      ...req.body,
      course: courseId,
    };
    const newModule = await modulesDao.createModule(module);
    res.send(newModule);
  });

  const findUsersForCourse = async (req, res) => {
    const { cid } = req.params;
    const users = await enrollmentsDao.findUsersForCourse(cid);
    res.json(users);
  };
  app.get("/api/courses/:cid/users", findUsersForCourse);

  // Get all quizzes for a course
  app.get("/api/courses/:courseId/quizzes", async (req, res) => {
    const { courseId } = req.params;
    const quizzes = await quizzesDao.findQuizzesForCourse(courseId);
    res.json(quizzes);
  });

  // Create a new quiz
  app.post("/api/courses/:courseId/quizzes", async (req, res) => {
    const quiz = req.body;
    const newQuiz = await quizzesDao.createQuiz(quiz);
    res.json(newQuiz);
  });

  app.get("/api/courses/:courseId/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const ALL_QUIZZES = await quizzesDao.findQuizzesForCourse(req.params.courseId);
    const quiz = await quizzesDao.findQuizById(quizId);
    res.json(quiz);
  });

  app.put("/api/courses/:courseId/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  });
}


