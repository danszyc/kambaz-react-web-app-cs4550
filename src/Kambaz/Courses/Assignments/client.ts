/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const REMOTE_SERVER =
  import.meta.env.VITE_REMOTE_SERVER || import.meta.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

// Fetch all assignments
export const getAllAssignmentsForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${ASSIGNMENTS_API}?courseId=${courseId}`);
  return data;
};

// Fetch a single assignment by ID
export const getAssignmentById = async (id: string) => {
  const response = await axios.get(`${ASSIGNMENTS_API}/${id}`);
  return response.data;
};

// Create a new assignment
export const createAssignment = async (assignment: any) => {
  const cleanAssignment = {
    _id: assignment._id,
    course: assignment.course,
    title: assignment.title,
    description: assignment.description,
    points: assignment.points,
    dueDate: assignment.dueDate,
    availableFrom: assignment.availableFrom,
    availableUntil: assignment.availableUntil
  };

  const response = await axios.post(ASSIGNMENTS_API, cleanAssignment);
  return response.data;
};

// Update an existing assignment by ID
export const updateAssignment = async (assignment: any) => {
  const cleanAssignment = {
    _id: assignment._id,
    title: assignment.title,
    description: assignment.description,
    points: assignment.points,
    dueDate: assignment.dueDate,
    availableFrom: assignment.availableFrom,
    availableUntil: assignment.availableUntil
  };

  const response = await axios.put(
    `${ASSIGNMENTS_API}/${assignment._id}`,
    cleanAssignment
  );
  return response.data;
};

// Delete an assignment by ID
export const deleteAssignment = async (id: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${id}`);
  return response.data;
};
