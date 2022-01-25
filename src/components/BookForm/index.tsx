import React from 'react';
import { useForm } from 'react-hook-form';

import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
  FormErrorMessage,
  FormControl
} from '@chakra-ui/react';
import { useBookContext } from '../../context/BookContext';

type Book = {
  title: string,
  description: string,
  date: string,
  genre: string,
}

const BookForm: React.FC = () => {

  const formBackground = useColorModeValue('gray.300', 'gray.700');
  const { addBook } = useBookContext();

  const { register, handleSubmit, formState: { errors } }: any = useForm<Book>();

  const addBookHandler = async (data: Book) => {
    addBook(data.title, data.description, data.date, data.genre)
  }

  return (
      <Flex direction='column' height='405px' background={formBackground} p={12} rounded={6} >
        <Heading mb={6}>
          Add new book
        </Heading>
        <form onSubmit={handleSubmit(addBookHandler)}>
          <Flex>
            <FormControl mb={3} isInvalid={errors.title && errors.title.type === 'required'}>
              <Input
                {...register('title', { required: true })}
                name='title'
                placeholder='title'
                variant='filled'
                type='text'
              />
              <FormErrorMessage>Title is required</FormErrorMessage>
            </FormControl>
          </Flex>

          <Flex>
            <FormControl mb={4} isInvalid={errors.description && errors.description.type === 'required'}>
              <Input
                {...register('description', { required: true })}
                name='description'
                placeholder='description'
                variant='filled'
                type='text'
              />
              <FormErrorMessage>description is required</FormErrorMessage>
            </FormControl>
          </Flex>

          <Flex>
            <FormControl mb={4} isInvalid={errors.date && errors.date.type === 'required'}>
              <Input
                {...register('date', { required: true })}
                name='date'
                placeholder='01/01/2022'
                variant='filled'
                type='text'
              />
              <FormErrorMessage>date is required</FormErrorMessage>
            </FormControl>
          </Flex>

          <Flex>
            <FormControl mb={4} isInvalid={errors.genre && errors.genre.type === 'required'}>
              <Input
                {...register('genre', { required: true })}
                name='genre'
                placeholder='Sci-fi, adventure, action...'
                variant='filled'
                type='text'
              />
              <FormErrorMessage>genre is required</FormErrorMessage>
            </FormControl>
          </Flex>
          <Flex justifyContent='center' >
            <Button type='submit' colorScheme='red' >Add</Button>
          </Flex>
        </form>
        {/* <Flex>{JSON.stringify(user)}</Flex> */}
      </Flex>
  )
}

export default BookForm;