import React from 'react';
import Badge from 'react-bootstrap/Badge'

const Header = () => (
    <h1 className = 'bg-gray-100 mx-2 w-full position-sticky px-40 py-2 top-0 z-10'>
    Meme Stream <Badge variant="secondary">Crio</Badge>
  </h1>
)

export default Header;