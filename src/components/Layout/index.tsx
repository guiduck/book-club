import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Flex, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Layout: React.FC = ({ children }) => {

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex>
      <Flex style={{position: 'absolute', right: 30}}>
        <IconButton
          bg={useColorModeValue('gray.200', 'gray.700')}
          p={2}
          aria-label="theme"
          fontSize="20px"
          icon={<>{colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}</>}
          onClick={toggleColorMode}
        />
      </Flex>
      {children}
    </Flex>
  )
}

export default Layout;