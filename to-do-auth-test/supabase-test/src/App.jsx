import { useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    console.log(data, error)
  }

  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    console.log(data, error)
  }

  const logout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Supabase Auth Test</h2>

      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={signup}>Signup</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default App