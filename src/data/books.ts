import calamityCover from '../assets/the-calamity-club-kathryn-stockett-book-cover.webp'
import serviceberryCover from '../assets/the-serviceberry-robin-wall-kimmererbook-cover.jpg'
import whistlerCover from '../assets/whistler-ann-patchett-book-cover.webp'

export interface Book {
  id: number
  title: string
  author: string
  img: string
}

export const booksData: Book[] = [
  {
    id: 1,
    title: 'The Calamity Club: A Novel',
    author: 'Kathryn Stockett',
    img: calamityCover,
  },
  {
    id: 2,
    title: 'The Serviceberry: Abundance and Reciprocity in the Natural World',
    author: 'Robin Wall Kimmerer',
    img: serviceberryCover,
  },
  {
    id: 3,
    title: 'Whistler: A Novel',
    author: 'Ann Patchett',
    img: whistlerCover,
  },
]
