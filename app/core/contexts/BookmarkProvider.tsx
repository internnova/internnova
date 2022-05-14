import { JobType } from "app/core/components/Job"
import { ReactElement, createContext, useContext, useState, useEffect } from "react"

interface SignedInProviderProps {
  children: ReactElement
}

const BookmarkContext = createContext<{ bookmarks: JobType[]; setBookmarks: any }>({
  bookmarks: [],
  setBookmarks: () => {},
})

export const useBookmark = () => useContext(BookmarkContext)

export const BookmarkProvider = ({ children }: SignedInProviderProps) => {
  const [bookmarks, setBookmarks] = useState<JobType[]>([])

  useEffect(() => {
    if (bookmarks.length !== 0) {
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
    }
  }, [bookmarks])

  useEffect(() => {
    const bookmarks = localStorage.getItem("bookmarks")
    if (bookmarks) {
      setBookmarks(JSON.parse(bookmarks))
    }
  }, [])

  return (
    <BookmarkContext.Provider value={{ bookmarks, setBookmarks }}>
      {children}
    </BookmarkContext.Provider>
  )
}
