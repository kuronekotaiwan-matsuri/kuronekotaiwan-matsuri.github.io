'use client';

import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        window.location.href = 'https://kuronekotaiwan-matsuri.github.io/y2025/';
    }, []);

  return null;
}
