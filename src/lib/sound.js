import { getRandomInRange } from './rand';

import data from '../notes.json';

const LOW_NOTE = 61.74;
const HIGH_NOTE = 1108.73;

const orchestrate = (oscillator1, oscillator2, setHasPlayed) => {
    oscillator1.start();
    setTimeout(() => { oscillator1.stop(); oscillator2.start(); }, 1000);
    setTimeout(() => {
        oscillator2.stop();
        setHasPlayed(true);
    }, 2000);
}

const getMicrotoneBelow = (note, factor) => {
    if (note === 0) {
        return (data[note].frequency + LOW_NOTE) / (factor + 2);
    }
    return (data[note].frequency + data[note - 1].frequency) / (factor + 2);
}

const getMicrotoneAbove = (note, factor) => {
    if (note === data.length - 1) {
        return (data[note].frequency + HIGH_NOTE) / (factor + 2);
    }
    return (data[note].frequency + data[note + 1].frequency) / (factor + 2);
}

export function playAudio(note, setHasPlayed) {
    console.log('Function called.');
    const ctx = new AudioContext();
    
    const oscillator1 = ctx.createOscillator();
    oscillator1.type = 'triangle';

    
    oscillator1.frequency.setValueAtTime(440, ctx.currentTime);
    oscillator1.connect(ctx.destination);

    const direction = getRandomInRange(-1, 1); //-1 for flat, 0 for in tune, 1 for sharp.

    //If we want to go flat or sharp, grab the note below or above, split the difference with geometric mean, Bob's your uncle.
    let diff = data[note].frequency;
    console.log(`playAudio called. Note: ${note}, direction: ${direction}`);
    if (direction === -1) {
        diff = getMicrotoneBelow(note, 5);
    } else if (direction === 1) { //No need to handle 0, as we've set diff to hz by default.
        diff = getMicrotoneAbove(note, 5);
    }

    const oscillator2 = ctx.createOscillator();
    oscillator2.type = 'triangle';
    oscillator2.frequency.setValueAtTime(Number.parseInt(diff), ctx.currentTime + 1);
    oscillator2.connect(ctx.destination);

    orchestrate(oscillator1, oscillator2, setHasPlayed);

    return direction;
};