import { Button, Text } from '@chakra-ui/react';
import RightArrow from 'components/icons/RightArrow';

interface Props {
    text: string
}

const CTAGradient = ({text}: Props) => {
    return (
        <Button variant='defaultGradient' mb={'62px'} rightIcon={<RightArrow />}
        transition='all .3s cubic-bezier(.645,.045,.355,1)'
        sx={{
            'p': {
                backgroundImage: "linear-gradient(270deg, #9121C2 0%, #FF5E5E 99.38%, #9121C2 151.08%, #FF5E5E 200.75%)"
            },
            ":hover p": {
                backgroundImage: "linear-gradient(270deg, #9121C2 -119.03%, #FF5E5E 8.24%, #9121C2 50.97%, #FF5E5E 91.41%)",
                transition: "all .3s ease-in-out"
            },
            ":not(:hover) p": {
                transition: "all .3s ease-in-out"
            },
            ":not(:hover) span": {
                transition: "all .3s ease-in-out"
            },
            ":hover span": {
                transform: "translateX(3px)",
                transition: "all .3s ease-in-out"
            }
        }}
        >
            <Text sx={{
                "WebkitBackgroundClip": "text",
                "WebkitTextFillColor": "transparent"
            }}
            transition="all .3s ease-in-out"
            >
                Login
            </Text>
        </Button>
    )
}

export default CTAGradient;