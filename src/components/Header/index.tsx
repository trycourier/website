import React, { useEffect, useState } from 'react'
import { Icon, Flex } from '@chakra-ui/react';
import LogoIcon from 'components/Logo';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import InternalLink from 'components/InternalLink';
import PurpleBgButton from 'components/buttons/PurpleBg';
import WhiteBgButton from 'components/buttons/WhiteBg';
import WhiteBgSimpleButton from 'components/buttons/WhiteBgSimple';
import TransparentButton from 'components/buttons/Transparent';
import { login } from 'constants/urls';

interface Props {
    headerPlain?: boolean;
    noHeaderBoxShadow?: boolean;
}

const Header = ({headerPlain, noHeaderBoxShadow}: Props) => {
    const [stickyHeader, setStickyHeader] = useState(false);
    const [plainHeader, setPlainHeader] = useState(false);

    const listenScrollEvent = () => {
        if (window.scrollY > 60) {
            setStickyHeader(true)
        } else {
            setStickyHeader(false)
        }
    }

    useEffect(() => {
        if(headerPlain) {
            setPlainHeader(true);
        } 
        window.addEventListener('scroll', listenScrollEvent)
    });

    return (
        <Flex w={'100%'} color={stickyHeader || plainHeader ? 'secondary.dark': 'white'} justify='center' backgroundColor={stickyHeader || plainHeader ? 'white': 'transparent'} position='fixed' top='0' p='15px 0 17px' align='center' zIndex='999'
        boxShadow={stickyHeader && !noHeaderBoxShadow ? '0 4px 12px rgb(0 0 0 / 8%)': ""}
        >
            <Flex justify='space-between' w='100%'  maxW='1240px' align='center' p='0 20px'>
                <InternalLink to='/'>
                    <Icon as={LogoIcon} transition='all .3s ease-in-out'/>
                </InternalLink>
                <DesktopMenu />
                <Flex>
                    {
                        stickyHeader || plainHeader ? <WhiteBgSimpleButton width={{base: "78px", lg: "88px"}} height={{base: "32px", lg: "40px"}} link={login} ml={4}>Log In</WhiteBgSimpleButton> :
                        <TransparentButton width={{base: "78px", lg: "88px"}} height={{base: "32px", lg: "40px"}} link={login} ml={4}>Log In</TransparentButton>
                    }
                    {
                        stickyHeader || plainHeader ?
                        <PurpleBgButton width={{base: "78px", lg: "88px"}} height={{base: "32px", lg: "40px"}} link={login} ml={4}>Sign Up</PurpleBgButton>:<WhiteBgButton width={{base: "78px", lg: "88px"}} height={{base: "32px", lg: "40px"}} link={login} ml={4}>Sign Up</WhiteBgButton>
                    }
                    <MobileMenu stickyHeader={stickyHeader || plainHeader} />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Header;
