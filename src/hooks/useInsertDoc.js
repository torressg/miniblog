import { useState, useEffect, useReducer } from "react"
import {db} from '../firebase/config'
import {collection, addDoc, Timestamp } from 'firebase/firestore'


const initialState = {
    loading: null,
    error: null,
}

const insertReducer = (state, action) => {
    
}

export const useInsertDoc = () => {
  return (
    <div>useInsertDoc</div>
  )
}
