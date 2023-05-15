import { signOut, useSession } from "next-auth/react";
import { DefaultLayout } from "@/layouts/DefaultLayout"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"


const HomePage: NextPageWithLayout = () => {
  const { data } = useSession();
  return (
    <pre>
      {JSON.stringify(data, null, 2)}
      <button onClick={() => signOut()}>Sign Out</button>
    </pre>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout title="Início">
      {page}
    </DefaultLayout>
  )
}

export default HomePage