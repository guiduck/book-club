import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useBookContext } from '../../context/BookContext';
import BookCard from '../BookCard';
import BookForm from '../BookForm';

type Book = {
  _id: string,
  title: string,
  description: string,
  date: string,
  genre: string,
}

const BookList: React.FC = () => {

  const { books, setBooks } = useBookContext()

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(books);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setBooks(items);
  }

  return (
    <Box w='full' bg={useColorModeValue("gray.200", "gray.400")}>

      <Flex justifyContent='space-evenly'>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Flex>
            <BookForm />
          </Flex>

          <Flex direction='column' alignItems='center' justifyContent='center' textAlign='center'>
            <Heading color={useColorModeValue('gray.900', 'gray.900')}>Plan to read</Heading>
            <Droppable droppableId='books'>
              {(provided) => (
                <Box {...provided.droppableProps} ref={provided.innerRef}>
                  {books.map((book, index) => {
                    return (
                      <Draggable key={book._id} draggableId={index.toString()} index={index}>
                        {(provided) => (
                          <Box {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <Flex w='full' justifyContent='center'>
                              <BookCard
                                _id={book._id}
                                title={book.title}
                                description={book.description}
                                date={book.date}
                                genre={book.genre}
                              />
                            </Flex>
                          </Box>
                        )}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          </Flex>
          <Flex direction='column' alignItems='center' textAlign='center'>
            <Heading color={useColorModeValue('gray.900', 'gray.900')}>Reading</Heading>
              {(provided) => (
                <Box {...provided.droppableProps} ref={provided.innerRef}>
                  {provided.placeholder}
                </Box>
              )}
          </Flex>
          <Flex direction='column' alignItems='center' textAlign='center'>
            <Heading color={useColorModeValue('gray.900', 'gray.900')}>Finished</Heading>
              {(provided) => (
                <Box {...provided.droppableProps} ref={provided.innerRef}>
                  {provided.placeholder}
                </Box>
              )}
          </Flex>
        </DragDropContext>
      </Flex>

    </Box>
  )
}

export default BookList;