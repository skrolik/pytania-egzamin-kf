import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {Question} from "./types";

import './App.css';

const patterns = [
    ['a', 'b', 'c'],
    ['a', 'c', 'b'],
    ['b', 'a', 'c'],
    ['b', 'c', 'a'],
    ['c', 'a', 'b'],
    ['c', 'b', 'a'],
];
const searchParams = new URLSearchParams(window.location.search);

const PATTERN_PARAM_NAME = "pattern";
const QUESTION_PARAM_NAME = "question";

function generateQPattern() {
    const maxFloored = Math.floor(patterns.length - 1);
    return Math.floor(Math.random() * (maxFloored + 1));
}

function resolveQPattern() {

    let patternNumber = generateQPattern();
    if (searchParams.get(PATTERN_PARAM_NAME)) {
        const qPattern = parseInt(searchParams.get(PATTERN_PARAM_NAME) as string);
        if (qPattern >= 0 && qPattern < patterns.length) {
            patternNumber = qPattern;
        }
    }
    return patternNumber;
}

function resolveQuestionNumber(questionLength: number) {
    let questionNumber = 0;
    if (searchParams.get(QUESTION_PARAM_NAME)) {
        const qNumber = parseInt(searchParams.get(QUESTION_PARAM_NAME) as string);
        if (qNumber >= 0 && qNumber < questionLength) {
            questionNumber = qNumber;
        }
    }

    return questionNumber;
}


function loadQuestion() {
    return fetch("/resources/questions.json")
        .then((response) => {
            return response.json();
        }).then((data) => {
            return data as Question[];
        }).then((questions) => {
            const questionNumber = resolveQuestionNumber(questions.length);
            return questions[questionNumber];
        }).then((question) => {

        });
}

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">

                </header>
                <article className="question">
                    <title>Question</title>



                </article>


                <div className="pattern">
                    <strong>Using pattern number: </strong> {resolveQPattern()}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
