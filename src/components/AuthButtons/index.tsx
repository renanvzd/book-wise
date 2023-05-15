// import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { AuthButton, Container } from "./styles";

type AuthButtonsProps = {
  canGuest?: boolean
  callbackUrl?: string
}

export const AuthButtons = ({ canGuest, callbackUrl = "/" }: AuthButtonsProps) => {
  const router = useRouter();

  return (
    <Container>
      <AuthButton>
        <img src="/images/icons/google.svg" alt="Google Logo" />
        Entrar com Google
      </AuthButton>
      <AuthButton>
        <img src="/images/icons/github.svg" alt="Github Logo" />
        Entrar com Github
      </AuthButton>
      {canGuest && (
        <AuthButton>
          <img src="/images/icons/rocket.svg" alt="Rocket Icon" />
          Acessar como visitante
        </AuthButton>
      )}
    </Container>
  )
}