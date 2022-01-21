import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

type Book = {
  bookId: string
  title: string,
  description: string,
  date: string,
  genre: string,
}

type BookContextType = {
  books: Book[],
  setBooks: Dispatch<SetStateAction<Book[]>>
}

export const BookContext = createContext({} as BookContextType)

export const BookProvider = ({ children }) => {

  const [books, setBooks] = useState<Book[]>([])

  const bookst = [
    {
      bookId: '0',
      title: 'brave new world',
      description: 'cool distopy',
      date: '19/01/22',
      genre: 'scifi'
    },
    {
      bookId: '1',
      title: 'brave new world',
      description: 'cool distopy',
      date: '19/01/22',
      genre: 'scifi'
    },
    {
      bookId: '2',
      title: 'brave new world',
      description: 'cool distopy',
      date: '19/01/22',
      genre: 'scifi'
    },
    {
      bookId: '3',
      title: 'brave new world',
      description: 'cool distopy',
      date: '19/01/22',
      genre: 'scifi'
    },
    {
      bookId: '4',
      title: 'brave new world',
      description: 'cool distopy',
      date: '19/01/22',
      genre: 'scifi'
    },
    {
      bookId: '5',
      title: 'brave new world',
      description: 'cool distopy',
      date: '19/01/22',
      genre: 'scifi'
    }
  ]

  useEffect(() => {
    setBooks(bookst)
  }, []);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  )
}

export const useBookContext = () => useContext(BookContext)