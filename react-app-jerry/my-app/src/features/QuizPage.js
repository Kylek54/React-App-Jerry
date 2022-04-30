import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Modal from '@mui/material/Modal';
import react, { useEffect, useState } from "react";



export function QuizLayout(){

        var questions = [
            { 
                answerOptions: [
                    { answer: "Laptop", isCorrect: false, src: "video/q1.mp4"},
                    { answer: "Lawyer", isCorrect: true},
                    { answer: "Lavender", isCorrect: false},
                    { answer: "Listen", isCorrect: false},
                ]
            },
            { 
                answerOptions: [
                    { answer: "Love", isCorrect: false, src: "video/q2.mp4"},
                    { answer: "Like", isCorrect: false},
                    { answer: "Lisa", isCorrect: true},
                    { answer: "Lose", isCorrect: false},
                ]
            },
            { 
                answerOptions: [
                    { answer: "Champion", isCorrect: false, src: "video/q3.mp4"},
                    { answer: "Capital", isCorrect: false},
                    { answer: "Chicago", isCorrect: true},
                    { answer: "Colors", isCorrect: false},
                ]
            },
            { 
                answerOptions: [
                    { answer: "Boxes", isCorrect: false, src: "video/q4.mp4"},
                    { answer: "Banana", isCorrect: true},
                    { answer: "Bootstrap", isCorrect: false},
                    { answer: "Balance", isCorrect: false},
                ]
            },
        ]

        const [questionNumber, setQuestionNumber] = useState(0);

        function answerCheck(isCorrect, questionNumber){

            if (isCorrect === true){
                alert("correct")
                if (questionNumber >= 3){
                    questionNumber = -1;
                }
                return setQuestionNumber(questionNumber + 1);
            }
            else{
                alert("incorrect")
            }


            return questionNumber
        };

    return (

        <div>

            <Grid>
                <Grid item>
                    <video class="h-1/2" loop autoPlay muted playsInline key={questions[questionNumber]['answerOptions'][0]['src']}>
                        <source
                            src={questions[questionNumber]['answerOptions'][0]['src']}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>

                </Grid>
                <Grid class="flex items-center justify-center w-full flex-wrap">

                    <Button class="bg-green-400 p-12 border-2 rounded w-1/2"
                        variant="contained"
                        onClick={() => answerCheck(questions[questionNumber]['answerOptions'][0]['isCorrect'], questionNumber)}
                        >{questions[questionNumber]['answerOptions'][0]['answer']}</Button>
                    <Button class="bg-green-400 p-12  border-2 rounded w-1/2"
                        variant="contained"
                        onClick={() => answerCheck(questions[questionNumber]['answerOptions'][1]['isCorrect'], questionNumber)}
                        >{questions[questionNumber]['answerOptions'][1]['answer']}</Button>
                    <Button class="bg-green-400 p-12  border-2 rounded w-1/2"
                        variant="contained"
                        onClick={() => answerCheck(questions[questionNumber]['answerOptions'][2]['isCorrect'], questionNumber)} 
                        >{questions[questionNumber]['answerOptions'][2]['answer']}</Button>
                    <Button class="bg-green-400 p-12  border-2 rounded w-1/2"
                        variant="contained"
                        onClick={() => answerCheck(questions[questionNumber]['answerOptions'][3]['isCorrect'], questionNumber)}
                        >{questions[questionNumber]['answerOptions'][3]['answer']}</Button>


                </Grid>
            </Grid>
        </div>
    )
}