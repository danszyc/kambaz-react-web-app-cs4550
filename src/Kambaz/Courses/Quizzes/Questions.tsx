import React, { useState } from "react";

type QuestionType = "multiple-choice" | "true-false" | "fill-in-the-blank";

interface Question {
    id: string;
    type: QuestionType;
    title: string;
    points: number;
    content: string;
    choices?: { text: string; isCorrect: boolean }[];
    correctAnswer?: boolean | string[];
}

const Questions: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [editingQuestionId, setEditingQuestionId] = useState<string | null>(
        null
    );
    const [newQuestion, setNewQuestion] = useState<Question | null>(null);

    const addNewQuestion = () => {
        const newQuestion: Question = {
            id: Date.now().toString(),
            type: "multiple-choice",
            title: "",
            points: 0,
            content: "",
            choices: [{ text: "", isCorrect: false }],
        };
        setQuestions([...questions, newQuestion]);
        setEditingQuestionId(newQuestion.id);
    };

    const updateQuestion = (updatedQuestion: Question) => {
        setQuestions(
            questions.map((q) => (q.id === updatedQuestion.id ? updatedQuestion : q))
        );
        setEditingQuestionId(null);
    };

    const cancelEdit = () => {
        setEditingQuestionId(null);
        setNewQuestion(null);
    };

    const calculateTotalPoints = () =>
        questions.reduce((sum, q) => sum + q.points, 0);

    return (
        <div>
            <h1>Quiz Questions Editor</h1>
            <div>
                <button onClick={addNewQuestion}>New Question</button>
            </div>
            <h2>Total Points: {calculateTotalPoints()}</h2>
            <ul>
                {questions.map((question) => (
                    <li key={question.id}>
                        {editingQuestionId === question.id ? (
                            <QuestionEditor
                                question={question}
                                onSave={updateQuestion}
                                onCancel={cancelEdit}
                            />
                        ) : (
                            <div>
                                <h3>{question.title || "Untitled Question"}</h3>
                                <p>Points: {question.points}</p>
                                {question.type === "multiple-choice" && question.choices && (
                                    <ul>
                                        {question.choices.map((choice, index) => (
                                            <li key={index}>
                                                {choice.text} {choice.isCorrect && "(Correct)"}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {question.type === "true-false" && (
                                    <p>Answer: {question.correctAnswer ? "True" : "False"}</p>
                                )}
                                {question.type === "fill-in-the-blank" && question.correctAnswer && (
                                    <p>Correct Answer: {Array.isArray(question.correctAnswer) ? question.correctAnswer.join(", ") : question.correctAnswer}</p>
                                )}
                                <button onClick={() => setEditingQuestionId(question.id)}>
                                    Edit
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const QuestionEditor: React.FC<{
    question: Question;
    onSave: (question: Question) => void;
    onCancel: () => void;
}> = ({ question, onSave, onCancel }) => {
    const [editedQuestion, setEditedQuestion] = useState<Question>(question);

    const handleInputChange = (
        field: keyof Question,
        value: string | number | boolean | string[]
    ) => {
        setEditedQuestion({ ...editedQuestion, [field]: value });
    };

    const handleChoiceChange = (index: number, value: string, isCorrect: boolean) => {
        if (!editedQuestion.choices) return;
        const updatedChoices = [...editedQuestion.choices];
        updatedChoices[index] = { text: value, isCorrect };
        setEditedQuestion({ ...editedQuestion, choices: updatedChoices });
    };

    const addChoice = () => {
        if (!editedQuestion.choices) return;
        setEditedQuestion({
            ...editedQuestion,
            choices: [...editedQuestion.choices, { text: "", isCorrect: false }],
        });
    };

    const removeChoice = (index: number) => {
        if (!editedQuestion.choices) return;
        const updatedChoices = editedQuestion.choices.filter((_, i) => i !== index);
        setEditedQuestion({ ...editedQuestion, choices: updatedChoices });
    };

    return (
        <div>
            <h3>Edit Question</h3>
            <label>
                Title:
                <input
                    type="text"
                    value={editedQuestion.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                />
            </label>
            <label>
                Points:
                <input
                    type="number"
                    value={editedQuestion.points}
                    onChange={(e) => handleInputChange("points", parseInt(e.target.value))}
                />
            </label>
            <label>
                Question:
                <textarea
                    value={editedQuestion.content}
                    onChange={(e) => handleInputChange("content", e.target.value)}
                />
            </label>
            <label>
                        Question Type:
                        <select
                            value={editedQuestion.type || "multiple-choice"}
                            onChange={(e) => handleInputChange("type", e.target.value as QuestionType)}
                        >
                            <option value="multiple-choice">Multiple Choice</option>
                            <option value="true-false">True/False</option>
                            <option value="fill-in-the-blank">Fill in the Blank</option>
                        </select>
                    </label>
            {editedQuestion.type === "multiple-choice" && (
                <div>
                    <h4>Choices</h4>
                    {editedQuestion.choices?.map((choice, index) => (
                        <div key={index}>
                            <textarea
                                value={choice.text}
                                onChange={(e) =>
                                    handleChoiceChange(index, e.target.value, choice.isCorrect)
                                }
                            />
                            <label>
                                Correct:
                                <input
                                    type="radio"
                                    checked={choice.isCorrect}
                                    onChange={() =>
                                        handleChoiceChange(index, choice.text, true)
                                    }
                                />
                            </label>
                            <button onClick={() => removeChoice(index)}>Remove</button>
                        </div>
                    ))}
                    <button onClick={addChoice}>Add Choice</button>
                </div>
            )}
            {editedQuestion.type === "true-false" && (
                <div>
                    <h4>True/False</h4>
                    <label>
                        <input
                            type="radio"
                            name={`true-false-${editedQuestion.id}`}
                            checked={editedQuestion.correctAnswer === true}
                            onChange={() => handleInputChange("correctAnswer", true)}
                        />
                        True
                    </label>
                    <label>
                        <input
                            type="radio"
                            name={`true-false-${editedQuestion.id}`}
                            checked={editedQuestion.correctAnswer === false}
                            onChange={() => handleInputChange("correctAnswer", false)}
                        />
                        False
                    </label>
                </div>
            )}
            {editedQuestion.type === "fill-in-the-blank" && (
                <div>
                    <h4>Fill in the Blank</h4>
                    <label>
                        Correct Answer:
                        <input
                            type="text"
                            value={Array.isArray(editedQuestion.correctAnswer) ? editedQuestion.correctAnswer.join(", ") : ""}
                            onChange={(e) =>
                                handleInputChange("correctAnswer", e.target.value.split(",").map((answer) => answer.trim()))
                            }
                        />
                    </label>
                </div>
            )}

            <button onClick={() => onSave(editedQuestion)}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
};

export default Questions;