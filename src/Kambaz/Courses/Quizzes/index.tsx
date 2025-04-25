/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Button,
    ListGroup,
    Dropdown,
    DropdownButton,
  } from "react-bootstrap";
  import {
    BsGripVertical,
    BsThreeDotsVertical,
    BsPlus,
    BsTrash,
    BsPencilSquare,
  } from "react-icons/bs";
  import { Link, useParams, useNavigate } from "react-router-dom";
  import { useEffect, useState } from "react";
  import * as quizzesClient from "./client";
  import dayjs from "dayjs";
  
  export default function Quizzes() {
    const { cid } = useParams();
    const navigate = useNavigate();
    const [quizzes, setQuizzes] = useState<any[]>([]);
  
    const fetchQuizzes = async () => {
      const data = await quizzesClient.getAllQuizzesForCourse(cid!);
      setQuizzes(data);
    };
  
    useEffect(() => {
      fetchQuizzes();
    }, []);
  
    const handleAddQuiz = async () => {
      navigate(`/Kambaz/Courses/${cid}/Quizzes/new`);
    };
  
    const handleDeleteQuiz = async (quizId: string) => {
      const isConfirmed = window.confirm("Are you sure you want to delete this quiz?");
      if (isConfirmed && cid) {
        await quizzesClient.deleteQuiz(cid,quizId);
        setQuizzes(quizzes.filter((quiz) => quiz._id !== quizId));
      }
    };
  
    const togglePublish = async (quiz: any) => {
      const updatedQuiz = { ...quiz, published: !quiz.published };
      await quizzesClient.updateQuiz(updatedQuiz);
      fetchQuizzes();
    };
  
    const getAvailability = (quiz: any) => {
      const now = dayjs();
      if (quiz.availableFrom && now.isBefore(dayjs(quiz.availableFrom))) {
        return `Not available until ${dayjs(quiz.availableFrom).format("MMM D, YYYY")}`;
      } else if (
        quiz.availableFrom &&
        quiz.availableUntil &&
        now.isAfter(dayjs(quiz.availableUntil))
      ) {
        return "Closed";
      } else if (
        quiz.availableFrom &&
        quiz.availableUntil &&
        now.isAfter(dayjs(quiz.availableFrom)) &&
        now.isBefore(dayjs(quiz.availableUntil))
      ) {
        return "Available";
      }
      return "";
    };
  
    return (
      <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Quizzes</h3>
          <Button variant="danger" onClick={handleAddQuiz}>
            + Quiz
          </Button>
        </div>
  
        {quizzes.length === 0 ? (
          <p>No quizzes yet. Click the + Quiz button to add one.</p>
        ) : (
          <ListGroup>
            {quizzes.map((quiz) => (
              <ListGroup.Item key={quiz._id} className="d-flex align-items-start">
                <BsGripVertical className="me-3 mt-1" />
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center">
                    <Link to={`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`} className="me-2 fw-bold">
                      {quiz.name}
                    </Link>
                    <span>
                      {quiz.published ? "✅" : (
                        <span
                          role="button"
                          className="text-danger"
                          onClick={() => togglePublish(quiz)}
                        >
                          🚫
                        </span>
                      )}
                    </span>
                    <DropdownButton
                      id={`dropdown-${quiz._id}`}
                      title={<BsThreeDotsVertical />}
                      className="ms-auto"
                      variant="light"
                    >
                      <Dropdown.Item
                        onClick={() => navigate(`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`)}
                      >
                        <BsPencilSquare className="me-2" />
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDeleteQuiz(quiz._id)}>
                        <BsTrash className="me-2" />
                        Delete
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => togglePublish(quiz)}>
                        {quiz.published ? (
                          <>
                            <BsTrash className="me-2" />
                            Unpublish
                          </>
                        ) : (
                          <>
                            <BsPlus className="me-2" />
                            Publish
                          </>
                        )}
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div className="text-muted">
                    {getAvailability(quiz)} | Due: {quiz.dueDate || "N/A"} | {quiz.points} pts | 0 Questions
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </div>
    );
  }