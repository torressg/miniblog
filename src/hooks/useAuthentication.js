import { app } from '../firebase/config'

import { useState, useEffect } from 'react'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

export const useAuthentication = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth(app)

    function checkIfIsCancelled() {
        if (cancelled) {
            return
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false)

            return user
        } catch (error) {
            console.log(error)
            console.log(typeof error.message)

            let systemErrorMsg

            if (error.message.includes("Password")) {
                systemErrorMsg = "A senha precisa conter ao menos 6 caracteres."
            } else if (error.message.includes("email-already")) {
                systemErrorMsg = "E-mail já cadastrado"
            } else {
                systemErrorMsg = "Houve um erro. Contate o Administrador."
            }

            setError(systemErrorMsg)
        }

        setLoading(false)
    }

    const logout = () => {

        checkIfIsCancelled()

        signOut(auth)
    }

    const login = async (data) => {

        checkIfIsCancelled()

        setLoading(true)
        setError(false)

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(true)

        } catch (error) {
            console.log(error.message)

            let systemErrorMsg

            if (error.message.includes("user-not-found")) {
                systemErrorMsg = "Usuário não encontrado."
            } else if (error.message.includes("wrong-password")) {
                systemErrorMsg = "Senha incorreta."
            } else {
                systemErrorMsg = "Houve um erro. Contate o Administrador."
            }
            setError(systemErrorMsg)
            setLoading(false)
        }
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
    }
}
