import React from 'react'
// var openDatabase = require('websql');
import { useState, useEffect } from 'react'
import '../Styles/Counter.css'

export default function Counter() {

    const [date, setDate] = useState(new Date().toString())
    const [currentDate, setCurrentDate] = useState(new Date().toString())
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setTimeout(() => {
            setDate(new Date().toString())
            setCount((prev) => prev + 1);
        }, 1000)
        return () => {
            clearTimeout(id);
        }
    }, [count])

    return (
        <div>
            {count}<br />
            {currentDate}<br />
            {date}
        </div>
    )
}
