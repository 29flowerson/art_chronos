// pages/follow-cursor.js

"use client"; // Marker to specify this is a client component

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function FollowCursor() {
  useEffect(() => {
    // Создаем элемент круга
    const circle = document.createElement('div');
    circle.style.position = 'fixed';
    circle.style.width = '20px'; // Размер круга
    circle.style.height = '20px'; // Размер круга
    circle.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Цвет круга
    circle.style.borderRadius = '50%'; // Делает элемент кругом
    circle.style.pointerEvents = 'none'; // Убирает события мыши на круге
    
    document.body.appendChild(circle);

    // Устанавливаем курсор в none для скрытия стандартного курсора
    document.body.style.cursor = 'none';
  

    const handleMouseMove = (event) => {
      circle.style.left = `${event.clientX}px`;
      circle.style.top = `${event.clientY}px`;
    };
    const handleClick = (event) => {
        const router = useRouter();
        document.body.style.cursor = 'none';
        router.push('/wrong');
        router.push('/right');
        // Предотвращаем переход по ссылке
        // Устанавливаем курсор в none при клике
        document.body.style.cursor = 'none'; 
    }
    

    // Добавляем слушатель движения мыши
    window.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', handleClick);
      // Убираем стандартный курсор на ссылках
      link.style.cursor = 'none';
    });

    // Убираем слушатель события и круг при размонтировании
    return () => {
      window.removeEventListener('mousemove', handleMouseMove,handleClick);
      document.body.removeChild(circle);
      document.body.style.cursor = 'auto'; // Восстанавливаем курсор при размонтировании
    };
  }, []);

}