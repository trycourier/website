import { Flex, Text, Heading } from '@chakra-ui/react';

interface FormattedPriceProps {
    price: string
}

const FormattedPrice = ({price}: FormattedPriceProps) => {
    const priceBase = price;
    if(price.startsWith("$")) {
        const priceSplit = priceBase.split("/");
        const [ price, period, term ] = priceSplit;
        return (
            <Flex justify='center'>
                <Heading variant="h4">{price}</Heading>
                <Text variant="body1medium" pt={"5px"}>/{period}</Text>
                <Text variant="body1medium" pt={"5px"}>/{term}</Text>
            </Flex>
        )
    } else if(price.startsWith("Flexible")) {
        return (
            <Text variant="body2" w={"60%"} mx="auto" fontFamily="Poppins, arial, sans-serif" pt={4}>{price}</Text>
        )
    } else {
        return ( 
            <Heading background="linear-gradient(270deg,#9121c2,#ff5e5e)" sx={{
                "WebkitBackgroundClip": "text",
                "WebkitTextFillColor": "transparent"
            }} variant="h4">{price}</Heading>
         )
    }
}

export default FormattedPrice
