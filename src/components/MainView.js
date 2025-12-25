import { useEffect, useRef, useState } from 'react';

import { Box } from '@chakra-ui/react';

import RangeSelector from './RangeSelector';
import Round from './Round';
import ScoreDisplay from './ScoreDisplay';
import StartButton from './StartButton';
import { getRandomInRange } from '../lib/rand';

export default function MainView() {
    const [hasStarted, setHasStarted] = useState(false);
    const [numCorrect, setNumCorrect] = useState(0);
    const [numIncorrect, setNumIncorrect] = useState(0);
    const [lowestNote, setLowestNote] = useState(24);
    const [highestNote, setHighestNote] = useState(36);
    const [hasGuessed, setHasGuessed] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    // const note = useMemo(() => getRandomInRange(lowestNote, highestNote), [lowestNote, highestNote]);

    let note = useRef({"name": "", "frequency": 0});
    useEffect(() => {
        note.current= getRandomInRange(lowestNote, highestNote);
        console.log(note, note.current);
        setHasGuessed(false);
    }, [lowestNote, highestNote, hasGuessed]);

    return (
        <Box m="12px">
            { /* TODO Clean up into child components */}
            { !hasStarted && <StartButton setHasStarted={setHasStarted} />}
            { !hasStarted && <RangeSelector 
                            lowestNote={lowestNote}
                            highestNote={highestNote}
                            setLowestNote={setLowestNote}
                            setHighestNote={setHighestNote} />
            }

            { hasStarted && <ScoreDisplay
                            numCorrect={numCorrect}
                            setNumCorrect={setNumCorrect}
                            numIncorrect={numIncorrect}
                            setNumIncorrect={setNumIncorrect} /> }
            { hasStarted && <Round
                            note={note.current}
                            numCorrect={numCorrect}
                            setNumCorrect={setNumCorrect}
                            numIncorrect={numIncorrect}
                            setNumIncorrect={setNumIncorrect}
                            hasGuessed={hasGuessed}
                            setHasGuessed={setHasGuessed}
                            isCorrect={isCorrect}
                            setIsCorrect={setIsCorrect}
                            />
            }
        </Box>
    );
};