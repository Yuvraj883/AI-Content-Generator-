'use client'

import { createContext, useState, useEffect, ReactNode } from 'react'
import { signIn, signOut, getToken, isAuthenticated } from './authService'

type User = {
  token: string | null // Allow token to be null
  // Add other fields if needed, like email, id, etc.
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isLoggedIn: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)
export { AuthContext }

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const checkAuth = () => {
      const auth = isAuthenticated()
      setIsLoggedIn(auth)
      if (auth) {
        const token = getToken()
        setUser({ token }) // This is now safe as User type allows token: string | null
      }
    }

    checkAuth()
  }, [])

  async function login(email: string, password: string) {
    try {
      await signIn(email, password)
      const token = getToken()
      setUser({ token }) // This is now safe
      setIsLoggedIn(true)
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  }

  function logout() {
    signOut()
    setUser(null)
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}
