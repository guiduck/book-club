import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useBookContext } from '../../context/BookContext';
import BookCard from '../BookCard';

type Book = {
  bookId: string
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

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='books'>
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {books.map((book, index) => {
                return (
                  <Draggable key={book.bookId} draggableId={index.toString()} index={index}>
                    {(provided) => (
                      <Box {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <Flex w='full' >
                          <BookCard
                            bookId={book.bookId}
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
      </DragDropContext>
    </Box>
  )
}

export default BookList;