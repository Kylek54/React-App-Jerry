import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Modal from '@mui/material/Modal';

export function QuizLayout(){

        var questions = [
            { 
                answerOptions: [
                    { answer: "Laptop", isCorrect: false},
                    { answer: "Lawyer", isCorrect: true},
                    { answer: "Lavender", isCorrect: false},
                    { answer: "Listen", isCorrect: false},
                ]
            },
            { 
                answerOptions: [
                    { answer: "Love", isCorrect: false},
                    { answer: "Like", isCorrect: false},
                    { answer: "Lisa", isCorrect: true},
                    { answer: "Lose", isCorrect: false},
                ]
            },
            { 
                answerOptions: [
                    { answer: "Champion", isCorrect: false},
                    { answer: "Capital", isCorrect: false},
                    { answer: "Chicago", isCorrect: true},
                    { answer: "Colors", isCorrect: false},
                ]
            },
            { 
                answerOptions: [
                    { answer: "Boxes", isCorrect: false},
                    { answer: "Banana", isCorrect: true},
                    { answer: "Bootstrap", isCorrect: false},
                    { answer: "Balance", isCorrect: false},
                ]
            },
        ]

        var questionNumber = 0

        function answerCheck(isCorrect,questionNumber){

            if (isCorrect === true){
                alert("correct")
            }

            else(isCorrect === false);{
                alert("incorrect")
            }

            if (isCorrect === true){
                questionNumber += 1
            }

        };

    return (
        <div>
            <span>Correct Answers = </span> 

            <Grid container spacing={2}>
                <Grid item>
                    <video loop autoPlay>
                        <source 

                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>

                </Grid>
                <Grid class="flex items-center justify-center w-full flex-wrap">

                    
                    <Button class="bg-green-400 p-16 border-2 rounded w-1/2"
                        variant="contained"
                        onClick={() => answerCheck(questions[questionNumber].answerOptions.isCorrect[0])}
                        >{questions[questionNumber].answerOptions.answer[0]}</Button>
                    <Button class="bg-green-400 p-16  border-2 rounded w-1/2"
                        variant="contained"
                        onClick={() => answerCheck(questions[questionNumber].answerOptions.isCorrect[1])}
                        >{questions[questionNumber].answerOptions.answer[1]}</Button>
                    <Button class="bg-green-400 p-16  border-2 rounded w-1/2"
                        variant="contained"
                        onClick={() => answerCheck(questions[questionNumber].answerOptions.isCorrect[2])} 
                        >{questions[questionNumber].answerOptions.answer[2]}</Button>
                    <Button class="bg-green-400 p-16  border-2 rounded w-1/2"
                        variant="contained"
                        onClick={() => answerCheck(questions[questionNumber].answerOptions.isCorrect[3])}
                        >{questions[questionNumber].answerOptions.answer[3]}</Button>


                </Grid>
            </Grid>
        </div>

        
    )
}