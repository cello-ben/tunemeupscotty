export default function ScoreDisplay(props) {
    const { correct, incorrect, setCorrect, setIncorrect } = props;
    return (
        <p>{correct}/{correct + incorrect}<button onClick={(e) => { e.preventDefault(); const n = Math.floor(Math.random() * 2); if (n === 0) setCorrect(correct + 1); else setIncorrect(incorrect + 1); }}>Check</button></p>
    )
};