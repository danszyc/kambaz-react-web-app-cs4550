import * as assignmentsDao from "./dao.js";
export default function AssignmentsRoutes(app) {
  app.post("/api/assignments", async (req, res) => {
    const newAssignment = req.body;
    const createdAssignment = await assignmentsDao.createAssignment(
      newAssignment
    );
    res.json(createdAssignment);
  });

  app.get("/api/courses/:courseId/assignments", async (req, res) => {
    const { courseId } = req.params;
    const assignments = await assignmentsDao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  });

  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await assignmentsDao.updateAssignment(
      assignmentId,
      assignmentUpdates
    );
    res.send(status);
  });


  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const status = await assignmentsDao.deleteAssignment(assignmentId);
    res.send(status);
  });
}
