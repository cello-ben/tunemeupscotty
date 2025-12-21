import { useState } from 'react';

import { Box } from '@chakra-ui/react';

import RangeSelector from './RangeSelector';
import ScoreDisplay from './ScoreDisplay';
import StartButton from './StartButton';

export default function MainView() {
    const [hasStarted, setHasStarted] = useState(false);
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [lowestNote, setLowestNote] = useState(24);
    const [highestNote, setHighestNote] = useState(36);

    return (
        <Box m="12px">
            { !hasStarted && <StartButton handleClick={setHasStarted} />}
            { !hasStarted && <RangeSelector lowestNote={lowestNote} highestNote={highestNote} setLowestNote={setLowestNote} setHighestNote={setHighestNote} />}
            { hasStarted && <ScoreDisplay correct={correct} incorrect={incorrect} setCorrect={setCorrect} setIncorrect={setIncorrect} /> }
        </Box>
    );
};