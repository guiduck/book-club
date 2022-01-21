import {
  Box,
  chakra,
  Flex,
  Image,
  useColorModeValue,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Button
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Book = {
  bookId: string,
  title: string,
  description: string,
  date: string,
  genre: string,
}

const BookCard: React.FC<Book> = ({
  bookId,
  title,
  description,
  date,
  genre
}) => {

  const[descriptionState, setDescriptionState] = useState('flex');

  // useEffect(() => {
  //   setDescription(description)
  // }, [description])

  return (
    <Flex
      my={2}
      p={15}
      w="25%"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        maxW="xs"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
      >
        <Box px={4} py={2}>
          <chakra.h1
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
            fontSize="sm"
            textTransform="uppercase"
            minHeight='12px'
          >
            {title.length > 30 ? title.slice(0, 30) + '...' : title}
          </chakra.h1>
          <chakra.p
            mt={1}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
            minHeight='15px'
            display={description}
          >
            {description.slice(0, 90) + '...'}
          </chakra.p>
          <Accordion allowToggle>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      onClick={() => description == 'flex' ?  setDescriptionState('none') : setDescriptionState('flex')}
                    >
                      <Box flex="1" textAlign="left">
                        <chakra.p fontSize='sm'>
                          See more
                        </chakra.p>
                      </Box>
                      {/* {!isExpanded ? () => (setSynopsisState('flex')) : () => (setSynopsisState('none'))} */}
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={2}>
                    {description}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            </Accordion>
        </Box>
        {/* remember to add cover img */}
        {/* <Image
          h={24}
          w="full"
          fit="cover"
          mt={2}
          src='/'
          alt="cover"
        /> */}

        <Flex
          alignItems="center"
          justifyContent="space-between"
          px={6}
          py={4}
          // bg="gray.900"
          roundedBottom="lg"
        >
          <chakra.h1 color="white" fontWeight="bold" fontSize="sm">
            {`updated: ${date.slice(0, 9)}`}
          </chakra.h1>
          <Button
            px={2}
            py={1}
            height='30px'
            bg="red.400"
            fontSize="xx-small"
            color="white"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              bg: "red.300",
            }}
            _focus={{
              bg: "red.600",
            }}
          >
            <Link href={`/Books/${bookId}`} >
              <a>Details</a>

            </Link>

          </Button>
        </Flex>
      </Box>

    </Flex>
  );
}

export default BookCard;