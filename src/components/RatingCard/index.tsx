import { getRelativeTimeString } from "@/utils/getRelativeTimeString"
import { Book, Rating, User } from "@prisma/client"
import Link from "next/link"
import { Text } from "../Typography"
import { Avatar } from "../ui/Avatar"
import { Container, UserDetails } from "./styles"
import { RatingStars } from "../RatingStars"

export type RatingWithAuthorAndBook = Rating & {
  user: User
  book: Book
}
type RatingCardProps = {
  rating: RatingWithAuthorAndBook
}

export const RatingCard = ({ rating }: RatingCardProps) => {
  const distance = getRelativeTimeString(new Date(rating.created_at), "pt-BR")

  return (
    <Container>
      <UserDetails>
        <section>
          <Link href={`/profile/${rating.user_id}`}>
            <Avatar src={rating.user.avatar_url!} alt={rating.user.name} />
          </Link>
          <div>
            <Text>{rating.user.name}</Text>
            <Text size="sm" color="gray-400">{distance}</Text>
          </div>
        </section>
        <RatingStars rating={rating.rate} />
      </UserDetails>
    </Container>
  )
}