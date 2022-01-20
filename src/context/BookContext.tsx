import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

type Book = {
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
      title: 'brave new world',
      description: 'cool distopy',
      date: '19/01/22',
      genre: 'scifi'
    },
    {
      title: 'brave new world',
      description: 'cool distopy',
      date: '19/01/22',
      genre: 'scifi'
    },
    {
      title: 'brave new world',
      description: 'cool distopy',
      date: '19/01/22',
      genre: 'scifi'
    },
    {
      title: 'brave new world',
      description: 'cool distopy',
      date: '19/01/22',
      genre: 'scifi'
    },
    {
      title: 'brave new world',
      description: 'cool distopy',
      date: '19/01/22',
      genre: 'scifi'
    },
    {
      title: 'brave new world',
      description: 'cool distopy',
      date: '19/01/22',
      genre: 'scifi'
    }
  ]

  useEffect(() => {
    setBooks(bookst)
  }, [books]);


  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  )
}

export const useBookContext = () => useContext(BookContext)