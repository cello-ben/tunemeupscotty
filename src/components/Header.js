import { Heading, HStack, Spacer } from '@chakra-ui/react';

import { ColorModeButton } from './chakra-autogen/color-mode';

export default function Header(props) {
    return (
        <HStack>
            <Heading>{props.title}</Heading>  {/* TODO Center */}
            <Spacer />
            <ColorModeButton />
        </HStack>
);
}