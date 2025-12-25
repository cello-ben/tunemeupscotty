import { useMemo, useState } from 'react';

import { Box } from '@chakra-ui/react';

import Picker from './Picker';

import { playAudio } from '../lib/sound';

export default function Round(props) {
    const { 
            note, hasGuessed, setHasGuessed,
            isCorrect, setIsCorrect, numCorrect, setNumCorrect,
            numIncorrect, setNumIncorrect
        } = props;
    // const [isPlaying, setIsPlaying] = useState(false);
    const [hasPlayed, setHasPlayed] = useState(false);
    const direction = useMemo(() => playAudio(note, setHasPlayed), [note]);

    // useEffect(() => {
    //     if (!isPlaying) {
    //         setIsPlaying(true);
    //         direction.current = playAudio(note, setHasPlayed);
    //     }
    // }, [isPlaying, setIsPlaying, note]);
    // direction.current = 

    return (
        <Box>
            {hasPlayed && <Picker
                          correctDirection={direction.current} 
                          numCorrect={numCorrect}
                          setNumCorrect={setNumCorrect}
                          numIncorrect={numIncorrect}
                          setNumIncorrect={setNumIncorrect}
                          hasGuessed={hasGuessed}
                          setHasGuessed={setHasGuessed}
                          isCorrect={isCorrect}
                          setIsCorrect={setIsCorrect}
                          />}
        </Box>
    );
};