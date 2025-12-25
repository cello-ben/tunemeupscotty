import { Box, Button, Heading, HStack, Spacer, VStack } from '@chakra-ui/react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

import { useColorMode } from './chakra-autogen/color-mode';

import data from '../notes.json';

export default function RangeSelector(props) {
    const { lowestNote, highestNote, setLowestNote, setHighestNote } = props;
    const colorMode = useColorMode().colorMode;    
    return (
        <Box
        borderWidth="1px"
        borderColor={ colorMode === 'light' ? "black" : "white" }
        borderRadius="10px"
        mx="auto"
        my="10px">
            <VStack mx="auto" p="12px">
                <Heading>Pick Your Range!</Heading>
                <HStack>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        if (lowestNote > 0) {
                            setLowestNote(lowestNote - 1);
                        }
                    }}>
                        <FaArrowDown/>
                    </Button>
                    <Spacer />
                    <Button onClick={(e) => {
                        e.preventDefault();
                        if (lowestNote < highestNote) {
                            setLowestNote(lowestNote + 1);
                        }
                    }}>
                        <FaArrowUp />
                    </Button>
                </HStack>
                <Heading>Low: {data[lowestNote].name}</Heading>
                <Heading>High: {data[highestNote].name}</Heading>
                <HStack>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        if (highestNote > lowestNote) {
                            setHighestNote(highestNote - 1);
                        }
                    }}>
                        <FaArrowDown/>
                    </Button>
                    <Spacer />
                    <Button onClick={(e) => {
                        e.preventDefault();
                        if (highestNote < data.length - 1) {
                            setHighestNote(highestNote + 1);
                        }
                    }}>
                        <FaArrowUp />
                    </Button>
                </HStack>
            </VStack>
        </Box>
    );
};