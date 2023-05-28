"use client";

import React, { useState, useEffect } from 'react'

interface clientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly: React.FC<clientOnlyProps> = ({ children }) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, [])

    if (!hasMounted) return null;
    
  return (
    <div>{children}</div>
  )
}

export default ClientOnly