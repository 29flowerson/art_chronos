'use client'; // Добавьте эту строку, чтобы указать, что компонент является клиентским

import Link from "next/link";

export default function Pictures() {
    const changeOpacity = (element, opacity) => {
        element.style.opacity = opacity;
    };

    return (
        <div className="flex flex-col gap-[2rem]">
            <div className="flex flex-row gap-[3rem]">

                <img
                    src="/2.png"
                    height="277"
                    width="386"
                    onMouseEnter={(e) => changeOpacity(e.target, 0.5)} // Затемнение
                    onMouseLeave={(e) => changeOpacity(e.target, 1)} // Восстановление
                    style={{ transition: 'opacity 0.3s', opacity: 1 }} // Плавный переход и начальная непрозрачность
                    alt="Описание изображения" // Добавить описание для доступности
                />

                <div>

                    <Link href={'/right'}>
                        <div>
                            <img
                                src="/2.png"
                                height="277"
                                width="386"
                                onMouseEnter={(e) => changeOpacity(e.target, 0.5)} // Затемнение
                                onMouseLeave={(e) => changeOpacity(e.target, 1)} // Восстановление
                                style={{ transition: 'opacity 0.3s', opacity: 1 }} // Плавный переход и начальная непрозрачность

                            />
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}