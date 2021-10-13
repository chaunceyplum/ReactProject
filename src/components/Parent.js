import React, { useState } from 'react'
import axios from 'axios'
import Rendercard from './Rendercard'
const Parent = () => {
    const [cuts, getCuts] = useState('')
    
    const url = 'https://localhost:3000'
    const getAllCuts = () => {
        axios.get(`${url}cuts`)
        .then((response) => {
            const allCuts = response.data.cuts.allCuts
        })
        .catch(error => console.error(`Error: ${error}`))
    }
        return(
            <Rendercard cuts={cuts} />
        )
}

export default Parent
