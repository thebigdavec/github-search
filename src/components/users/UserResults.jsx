import { useContext } from "react"
import GithubContext from "../../pages/github/GithubContext"

import UserItem from "./UserItem"
import Spinner from "../layout/Spinner"

export default function UserResults () {
  const { users, loading } = useContext(GithubContext)

  if (loading) {
    return <Spinner />
  } else {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users?.map(user =>
        (
          <UserItem key={user.id} user={user} />
        )
        )}
      </div>
    )
  }
}
