import { Box, SimpleGrid } from '@chakra-ui/react';
import LatticeImage from '../../../../../public/images/customers/lattice.svg'
import LaunchDarklyImage from '../../../../../public/images/customers/launchDarkly.svg'
import ExpelImage from '../../../../../public/images/customers/expel.svg'
import BlueCrewImage from '../../../../../public/images/customers/blueCrew.svg'
import BlissfullyImage from '../../../../../public/images/customers/blissfully.svg'
import LTSEImage from '../../../../../public/images/customers/ltse.svg'
import Image from 'next/image';

const CustomerImage = ({paddingTop, imgSrc}: {paddingTop?: string, imgSrc: StaticImageData}) => (
    <Box pt={paddingTop}>
        <Image src={imgSrc} />
    </Box>
)

const Customers = ({...props}) => {
    return (
        <SimpleGrid mt={'62px'} columns={{base: 2, lg: 6}} spacingX={{base: 10, md: "112px", lg: 6, xl: 10}} spacingY={{base: 10, lg: 0}} align='center' maxW={{lg: 900, xl: 1024}} opacity="0.5" {...props}>
            <CustomerImage paddingTop="7px" imgSrc={LatticeImage} />
            <CustomerImage paddingTop="10px" imgSrc={LaunchDarklyImage} />
            <CustomerImage paddingTop="6px" imgSrc={ExpelImage} />
            <CustomerImage paddingTop="8px" imgSrc={BlueCrewImage} />
            <CustomerImage paddingTop="4px" imgSrc={BlissfullyImage} />
            <CustomerImage imgSrc={LTSEImage} />
        </SimpleGrid>
    )
}

export default Customers;
