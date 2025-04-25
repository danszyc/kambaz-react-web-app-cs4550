/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Button,
    Form,
    Row,
    Col,
    // InputGroup,
  } from "react-bootstrap";
  import { useParams, useNavigate } from "react-router-dom";
  import { useEffect, useState } from "react";
  import * as quizzesClient from "./client";
  
  export default function QuizDetails() {
    const { cid, qid } = useParams();
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState<any>({});
  
    const fetchQuiz = async () => {
      const data = await quizzesClient.getQuizById(cid as string,qid as string);
      setQuiz(data);
    };
  
    useEffect(() => {
      fetchQuiz();
    }, [qid]);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement;
      const checked = type === "checkbox" && (e.target as HTMLInputElement).checked;
      setQuiz({ ...quiz, [name]: type === "checkbox" ? checked : value });
    };
  
    const handleSave = async () => {
      await quizzesClient.updateQuiz(quiz);
      fetchQuiz();
      navigate(`/Kambaz/Courses/${cid}/quizzes`)
    };
  
    return (
      <div className="container">
        <h2>Quiz Details</h2>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Quiz Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={quiz.name || ""}
                  onChange={handleChange}
                  className="mb-3"
                />
                <Form.Label>Quiz Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={quiz.description || ""}
                  onChange={handleChange}
                  rows={3}
                  className="mb-3"
                />
                <Form.Label>Quiz Type</Form.Label>
                <Form.Select
                  name="quizType"
                  value={quiz.quizType || "Graded Quiz"}
                  onChange={handleChange}
                >
                  <option>Graded Quiz</option>
                  <option>Practice Quiz</option>
                  <option>Graded Survey</option>
                  <option>Ungraded Survey</option>
                </Form.Select>
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Assignment Group</Form.Label>
                <Form.Select
                  name="assignmentGroup"
                  value={quiz.assignmentGroup || "Quizzes"}
                  onChange={handleChange}
                >
                  <option>Quizzes</option>
                  <option>Exams</option>
                  <option>Assignments</option>
                  <option>Project</option>
                </Form.Select>
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Shuffle Answers"
                  name="shuffleAnswers"
                  checked={quiz.shuffleAnswers || false}
                  onChange={handleChange}
                />
  
                <Form.Check
                  type="checkbox"
                  label="Lock Questions After Answering"
                  name="lockQuestionsAfterAnswering"
                  checked={quiz.lockQuestionsAfterAnswering || false}
                  onChange={handleChange}
                />
  
                <Form.Check
                  type="checkbox"
                  label="Show Correct Answers"
                  name="showCorrectAnswers"
                  checked={quiz.showCorrectAnswers || false}
                  onChange={handleChange}
                />
  
                <Form.Check
                  type="checkbox"
                  label="One Question at a Time"
                  name="oneQuestionAtATime"
                  checked={quiz.oneQuestionAtATime || false}
                  onChange={handleChange}
                />
  
                <Form.Check
                  type="checkbox"
                  label="Webcam Required"
                  name="webcamRequired"
                  checked={quiz.webcamRequired || false}
                  onChange={handleChange}
                />
  
                <Form.Check
                  type="checkbox"
                  label="Multiple Attempts"
                  name="multipleAttempts"
                  checked={quiz.multipleAttempts || false}
                  onChange={handleChange}
                />
              </Form.Group>
  
              {quiz.multipleAttempts && (
                <Form.Group className="mb-3">
                  <Form.Label>How Many Attempts</Form.Label>
                  <Form.Control
                    type="number"
                    name="howManyAttempts"
                    value={quiz.howManyAttempts || 1}
                    onChange={handleChange}
                  />
                </Form.Group>
              )}
            </Col>
  
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Time Limit (minutes)</Form.Label>
                <Form.Control
                  type="number"
                  name="timeLimit"
                  value={quiz.timeLimit || 20}
                  onChange={handleChange}
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Access Code</Form.Label>
                <Form.Control
                  type="text"
                  name="accessCode"
                  value={quiz.accessCode || ""}
                  onChange={handleChange}
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Points</Form.Label>
                <Form.Control
                  type="number"
                  name="points"
                  value={quiz.points || 0}
                  onChange={handleChange}
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="dueDate"
                  value={quiz.dueDate?.slice(0, 16) || ""}
                  onChange={handleChange}
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Available From</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="availableFrom"
                  value={quiz.availableFrom?.slice(0, 16) || ""}
                  onChange={handleChange}
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Available Until</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="availableUntil"
                  value={quiz.availableUntil?.slice(0, 16) || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
  
          <div className="d-flex justify-content-between">
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
            <Button
              variant={quiz.published ? "warning" : "success"}
              onClick={() => {
                console.log("Publish/Unpublish clicked");
                console.log("Current quiz state:", quiz);
                setQuiz({ ...quiz, published: !quiz.published });
                console.log("After quiz state:", quiz);
                handleSave();
              }}
            >
              {quiz.published ? "Unpublish" : "Save & Publish"}
            </Button>
            <div>
              <Button
                variant="secondary"
                className="me-2"
                onClick={() => navigate(`/Kambaz/Courses/${cid}/Quizzes/${qid}/Preview`)}
              >
                Preview
              </Button>
              <Button
                variant="success"
                onClick={() => navigate(`/Kambaz/Courses/${cid}/Quizzes/${qid}/Editor`)}
              >
                Edit
              </Button>
            </div>
          </div>
        </Form>
      </div>
    );
  }
  