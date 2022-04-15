import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Modal from '@mui/material/Modal';

export function QuizLayout(){

    var data = {"questions":[
        { "src": "../video/q1.mp4", "correctAnswer" : 1 , "answer" :["Laptop","Lawyer","Lavender","Listen"]},
        { "src": "../video/q2.mp4", "correctAnswer" : 2 , "answer" : ["Love","Like","Lisa","Lose"]},
        { "src": "../video/q3.mp4", "correctAnswer" : 3 , "answer" : ["Champion","Capital","Colors","Chicago"]},
        { "src": "../video/q4.mp4", "correctAnswer" : 1 , "answer" : ["Boxes","Banana","Bootstrap","Balance"]},
    ]}


    function answerCheck (isCorrect) {
        alert(JSON.questions.answer);
  }
    
    

    return (
        <div>
            <span>Correct Answers = </span> 

            

            <Grid container spacing={2}>
                <Grid item>
                    <video loop autoPlay>
                        <source
                            src= {data.src}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>

                </Grid>
                <Grid class="flex items-center justify-center w-full flex-wrap">

                    <Button class="bg-green-400 p-16 m- border-2 rounded w-1/2"
                        variant="contained"
                        onClick={() => answerCheck(false)}
                        ></Button>
                    <Button class="bg-green-400 p-16 m border-2 rounded w-1/2"
                        variant="contained"
                        onClick={() => answerCheck(true)}
                        >Lawyer</Button>
                    <Button class="bg-green-400 p-16 m border-2 rounded w-1/2"
                        variant="contained"
                        onClick={() => answerCheck(false)} 
                        >Listen</Button>
                    <Button class="bg-green-400 p-16 m border-2 rounded w-1/2"
                        variant="contained"
                        onClick={() => answerCheck(false)}
                        >Laptop</Button>


                </Grid>
            </Grid>
        </div>

        
    )
}