export default function ScoreDisplay(props) {
    const { numCorrect, numIncorrect } = props;
    return (
        <p>{numCorrect} / {numCorrect + numIncorrect}</p>
    )
};