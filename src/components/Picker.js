// import { useState } from 'react';

import { Button, HStack, Text } from "@chakra-ui/react";

import { FaArrowDown, FaArrowUp, FaSmile } from "react-icons/fa";

const handleAnswerChoice = (guessedDirection, correctDirection) => {
    return guessedDirection === correctDirection;
}

const handleScoreUpdate = (isCorrect, numCorrect, setNumCorrect, numIncorrect, setNumIncorrect) => {
    if (isCorrect) {
        setNumCorrect(numCorrect + 1);
    } else {
        setNumIncorrect(numIncorrect + 1);
    }
}

export default function Picker(props) {
    const { correctDirection, hasGuessed, setHasGuessed, isCorrect, setIsCorrect, numCorrect, setNumCorrect, numIncorrect, setNumIncorrect } = props;
    
    return (
        <HStack>
            <Button onClick={
                (e) => { 
                    e.preventDefault();
                    setHasGuessed(true);
                    setIsCorrect(handleAnswerChoice(-1, correctDirection)); 
                    handleScoreUpdate(isCorrect, numCorrect, setNumCorrect, numIncorrect, setNumIncorrect);
                }}>
                    <FaArrowDown />
                    Flat
                </Button>
            <Button onClick={
                (e) => { 
                    e.preventDefault();
                    setHasGuessed(true);
                    setIsCorrect(handleAnswerChoice(0, correctDirection));
                    handleScoreUpdate(isCorrect, numCorrect, setNumCorrect, numIncorrect, setNumIncorrect);
                }}>
                    <FaSmile />
                    Just Right
                </Button>
            <Button onClick={
                (e) => { 
                    e.preventDefault();
                    setHasGuessed(true);
                    setIsCorrect(handleAnswerChoice(1, correctDirection));
                    handleScoreUpdate(isCorrect, numCorrect, setNumCorrect, numIncorrect, setNumIncorrect); 
                }}>
                <FaArrowUp />
                Sharp
                </Button>
                { hasGuessed && <Text>{isCorrect ? "Correct!" : "Incorrect" }</Text> }
        </HStack>
    )
}