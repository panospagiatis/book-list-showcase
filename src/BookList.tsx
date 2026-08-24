import { booksData, type Book as BookType } from './data/books'

function BookList() {
  return (
    <section className="my-20 w-[90vw] max-w-292.5 mx-auto flex flex-col items-center">
      <h1 className="font-heading text-4xl md:text-6xl pb-4 font-bold">
        My Books' List
      </h1>
      <span className="font-body md:text-2xl pb-4 mb-12 text-gray-400">
        by Panos Pagiatis
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 w-full">
        {booksData.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </section>
  )
}

interface BookProps {
  book: BookType
}

const Book = ({ book }: BookProps) => {
  const { img, title, author } = book

  return (
    <article className="group flex flex-col gap-2 text-center bg-white p-12 border border-gray-200 rounded-2xl hover:shadow-md transition-shadow duration-300">
      <div className="mb-5 w-full aspect-3/4 overflow-hidden">
        <img
          className="w-full h-full aspect-3/4 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          src={img}
          alt={`Book Cover - ${title} by ${author}`}
        />
      </div>
      <h2 className="font-heading font-semibold text-xl text-gray-900 leading-snug">
        {title}
      </h2>
      <span className="font-body text-gray-500">{author}</span>
    </article>
  )
}

export default BookList
