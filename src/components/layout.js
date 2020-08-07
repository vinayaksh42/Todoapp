import React from 'react'
import { Link } from 'react-router-dom'

export default function layout() {
    return (
        <header style={Header}>
            <h1>TodoList</h1>
            <Link style={linkstyle} to="/Todoapp">Home</Link> | <Link style={linkstyle} to="/Todoapp/about">About</Link>
        </header>
    )
}

const Header = {
    background: '#333',
    color: '#fff',
    textAlign: 'Center',
    padding: '10px'
}

const linkstyle = {
    color: '#fff',
    textDecoration: 'none'
}
