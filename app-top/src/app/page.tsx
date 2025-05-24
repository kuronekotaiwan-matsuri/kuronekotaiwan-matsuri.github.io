'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        window.location.href = 'https://kuronekotaiwan-matsuri.github.io/y2025/';
    }, []);

  return null;
}
