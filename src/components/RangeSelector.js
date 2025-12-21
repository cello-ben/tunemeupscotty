import { FaArrowDown } from 'react-icons/fa';

import data from '../notes.json';

export default function RangeSelector(props) {
    const { lowestNote, highestNote, setLowestNote, setHighestNote } = props;    
    return (
        <>
            <FaArrowDown onClick={(e) => { e.preventDefault(); alert('Hi!'); }} />
            <h3>{data[lowestNote].name}</h3>
            <h3>{data[highestNote].name}</h3>
        </>
    );
};