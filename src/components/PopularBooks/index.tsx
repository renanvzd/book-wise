import { Link } from "../ui/Link"
import { Text } from "../Typography"
import { Container } from "./styles"
import { BookCard } from "../BookCard"


export const PopularBooks = () => {
  return (
    <Container>
      <header>
        <Text size="sm">Livros populares</Text>
        <Link href="/explore" text="Ver todos" />
      </header>

      <section>
        {Array.from({ length: 4 }).map((_, index) => (
          <BookCard key={`popular-${index}`} book={{
            author: "John Doe",
            avgRating: 4,
            cover_url: "https://github.com/renanvzd.png",
            created_at: new Date(),
            id: "",
            name: "Lorem ipsum dolor sit amet",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nist",
            total_pages: 100,
          }} />
        ))}
      </section>
    </Container>
  )
}