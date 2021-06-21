import { Image, SimpleGrid } from '@chakra-ui/react';

const Customers = ({...props}) => {
    return (
        <SimpleGrid mt={'62px'} columns={{base: 2, lg: 6}} spacingX={{base: 10, md: "112px", lg: 6, xl: 10}} spacingY={{base: 10, lg: 0}} align='center' maxW={{lg: 900, xl: 1024}} opacity="0.5" {...props}>
            <Image src={'/images/customers/lattice.svg'} pt={"7px"} />
            <Image src={'/images/customers/launchDarkly.svg'} pt={"10px"} />
            <Image src={'/images/customers/expel.svg'} pt={"6px"} />
            <Image src={'/images/customers/blueCrew.svg'}pt={"8px"} />
            <Image src={'/images/customers/blissfully.svg'} pt={"4px"} />
            <Image src={'/images/customers/ltse.svg'}/>
        </SimpleGrid>
    )
}

export default Customers
