import { PageTitle } from "../ui/PageTitle"
import { Container } from "./styles"
import { ChartLineUp } from "@phosphor-icons/react"
import { Text } from "../Typography"
import { RatingCard } from "../RatingCard"

export const LatestRatings = () => {

  return (
    <Container>
      <PageTitle title="Início" icon={<ChartLineUp size={32} />} css={{
        marginBottom: 40
      }} />

      <Text size="sm">Avaliações mais recentes</Text>

      <section>
        {Array.from({ length: 20 }).map((_, i) => (
          <RatingCard key={i} rating={{
            id: "aa",
            rate: 4,
            user: {
              id: "asdfgh",
              email: "johndoe@gmail.com",
              name: "John Doe",
              avatar_url: "https://github.com/renanvzd.png",
              created_at: new Date()
            },
            book: {
              id: "asdfgh",
              name: "John Doe",
              author: "John Doe",
              summary: "Vade mecum ori talum Vade mecum ori talumVade mecum ori talumVade mecum ori talumVade mecum ori talumVade mecum ori talumVade mecum ori talumVade mecum ori talumVade mecum ori talumVade mecum ori talumVade mecum ori talumVade mecum ori talumVade mecum ori talumVade mecum ori talumVade mecum ori talumVade mecum ori talumVade mecum ori talumVade mecum ori talumVade mecum ori talumVade mecum ori talumVade mecum ori talumVade mecum ori talum",
              cover_url: "https://github.com/renanvzd.png",
              total_pages: 100,
            },
            created_at: new Date()
          }} />
        ))}
      </section>
    </Container>
  )
}