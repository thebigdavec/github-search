import { useState, useContext } from "react"
import GithubContext from "../../pages/github/GithubContext"
import AlertContext from "../../context/alert/AlertContext"
import { searchUsers } from "../../pages/github/GithubActions"

export default function UserSearch () {
  const [text, setText] = useState('')
  const trimmedText = () => text.trim()

  const { users, clearUsers, dispatch } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)

  const handleChange = e => setText(e.target.value)

  const handleSubmit = async e => {
    e.preventDefault()
    if (trimmedText() === '') {
      setAlert('Please enter something', 'error')
      clearUsers()
    } else {
      dispatch({ type: 'SET_LOADING' })
      const users = await searchUsers(trimmedText())
      dispatch({ type: 'GET_USERS', payload: users })
      setText('')
    }
  }

  const handleClick = () => {
    dispatch({ type: 'CLEAR_USERS' })
  }

  const InputButton = () => (
    <button type={trimmedText() ? 'submit' : 'button'} onClick={trimmedText() ? handleSubmit : handleClick} className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
      {trimmedText() ? 'Go' : 'Clear'}
    </button>
  )

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <div className="relative">
            <input type="text" className="w-full bg-gray-200 input input-lg text-black" placeholder="Search" value={text} onChange={handleChange} />
            {(trimmedText() || users.length) ? <InputButton /> : ''}
          </div>
        </div>
      </form>
    </div>
  )
}
