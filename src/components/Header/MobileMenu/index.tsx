import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, Box, DrawerCloseButton, Accordion } from '@chakra-ui/react';
import HamburgerButton from 'components/buttons/MobileHamburger';
import ColoredLogo from 'components/LogoColored';
import SingleItem from './SingleItem';
import ItemWithChildren from './ItemWithChildren';
import data from '../data';

interface MobileMenuProps {
    stickyHeader: boolean
}

const MobileMenu = ({stickyHeader}: MobileMenuProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box display={{base: "block", lg: "none"}}>
                <HamburgerButton width="40px" height="32px" ml={4} stickyHeader={stickyHeader} onClick={onOpen} />
            </Box>
            <Box zIndex="-200">
                <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size="full">
                    <DrawerOverlay />
                    <DrawerContent bg="#FFF">
                        <DrawerCloseButton verticalAlign="middle" bg="linear-gradient(119.01deg,rgba(145,33,194,.15) -91.42%,rgba(253,137,122,0) 124.02%)" 
                        mt={"12px"}
                        mr={"10px"}
                        boxSize={"40px"} sx={{
                            "_hover": {
                                opacity: ".8"
                            }
                        }}/>
                        <DrawerHeader mt={"12px"} ml={"10px"}>
                            <ColoredLogo />
                        </DrawerHeader>
                        <DrawerBody>
                        <Accordion w={{base: "100%"}} mt={"62px"} allowToggle>
                            {
                                data.map(menu => {
                                    if(menu.items) {
                                        return (
                                            <ItemWithChildren title={menu.title}  items={menu.items} key={menu.title} />
                                        )
                                    } else {
                                        return (
                                            <SingleItem title={menu.title} link={menu.link} key={menu.title} />
                                        )
                                    }
                                    
                                })
                            }
                        </Accordion>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box> 
        </>           
    )
};

export default MobileMenu;