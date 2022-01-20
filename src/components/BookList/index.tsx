import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useBookContext } from '../../context/BookContext';

type Book = {
  title: string,
  description: string,
  date: string,
  genre: string,
}

const BookList: React.FC = () => {

  const { books } = useBookContext()

  const handleOnDragEnd = () => {

  }

  return (
    <Box>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='books'>
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {books.map((book, id) => {
                return (
                  <Draggable key={id} draggableId={id.toString()} index={id}>
                    {(provided) => (
                      <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <Flex w='full' height='50px' bg={useColorModeValue("gray.200", "gray.400")}>
                          <Heading>
                            {book.title}
                          </Heading>
                          <Text>{book.description}</Text>
                        </Flex>
                      </li>
                    )}
                  </Draggable>
                )
              })}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  )
}

export default BookList;