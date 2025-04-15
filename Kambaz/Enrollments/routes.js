import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.post("/enroll", (req, res) => {
    const { userId, courseId } = req.body;
    const enrolledUser = dao.enrollUserInCourse(userId, courseId);
    res.json(enrolledUser);
  });

  app.delete("/unenroll", (req, res) => {
    const { userId, courseId } = req.body;
    enrollments = enrollments.filter(
      (enrollment) =>
        enrollment.userId !== userId || enrollment.courseId !== courseId
    );
    const unenrolledUser = dao.unenrollUserFromCourse(userId, courseId);
    res.json(unenrolledUser);
  });
}
