import { useQuery } from '@apollo/client'
import { GET_USERS } from '../queries/queries'
import { GetUsersQuery } from '../src/gql/graphql'

const Home = () => {
  const { data } = useQuery<GetUsersQuery>(GET_USERS, {
    fetchPolicy: 'cache-and-network',
  })
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-gray-600 text-sm font-mono">
      <main className="flex flex-1 flex-col justify-center items-center w-screen">
        {data?.users.map((user) => {
          return (
            <p className="my-1" key={user.id}>
              {user.name}
            </p>
          )
        })}
      </main>
    </div>
  )
}

export default Home
