import { Button } from "@chakra-ui/react";

export default function StartButton(props) {
    return (
        <Button onClick={(e) => { e.preventDefault(); props.setHasStarted(true); }}>
            Start
        </Button>
    );
};