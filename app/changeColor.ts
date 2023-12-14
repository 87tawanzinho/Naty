// components/ScrollColorChange.js
import { useEffect, useState } from 'react';

const ScrollColorChange = () => {
    const [scrollingDown, setScrollingDown] = useState(false);

    useEffect(() => {
        const scrollDiv = document.getElementById('scrollDiv');

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrollingDown(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        // Remova o ouvinte de evento ao desmontar o componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Este efeito só deve ser executado uma vez durante a montagem do componente

    return null; // Este componente não renderiza nada visível no DOM
};

export default ScrollColorChange;
