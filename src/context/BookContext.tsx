import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

type Book = {
  _id: string
  title: string,
  description: string,
  date: string,
  genre: string,
}

type BookContextType = {
  books: Book[],
  setBooks: Dispatch<SetStateAction<Book[]>>,
  addBook: (title: string, description: string, date: string, genre: string) => Promise<void>
  deleteBook: (data: string) => Promise<void>
}

export const BookContext = createContext({} as BookContextType)

export const BookProvider = ({ children }) => {

  const [books, setBooks] = useState([])
  const [newBook, setNewBook] = useState({
    title: '',
    description: '',
    date: '',
    genre: ''
  })
  const [deletedId, setDeletedId] = useState('')

  const addBook = async (title: string, description: string, date: string, genre: string) => {
    try {
      await api.post('/books', { title, description, date, genre })
      setNewBook({
        title: title,
        description: description,
        date: date,
        genre: genre
      })
    } catch (e) {
      console.log(e.message)
    }
  }

  const deleteBook = async (id: string) => {
    try {
      await api.delete(`/books/${id}`)
      setDeletedId(id)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {

    const loadData = async () => {
      try {
        const response = await api.get<Book[]>('/books')
        if (response.data) {
          setBooks(response.data)
        } else {
          console.log('could not get response')
        }
      } catch (err) {
        return err.message
      }
    }

    loadData()
    console.log(books)
  }, [newBook, deletedId]);

  return (
    <BookContext.Provider value={{ books, setBooks, addBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  )
}

export const useBookContext = () => useContext(BookContext)