import s from './Loader.module.css'

export const Loader = () => {
    return (
        <div className={s.loader}>
            <svg width="90" height="90" viewBox="0 0 90 90">
                {/* <!-- Градиент --> */}
                <defs>
                    <linearGradient id="myGradient">
                        <stop offset="0%" stop-color="#512DE4" />
                        <stop offset="100%" stop-color="#ffffff" />
                    </linearGradient>
                </defs>

                {/* <!-- Анимированный круг --> */}
                <circle cx="45" cy="45" r="40"
                    stroke="url(#myGradient)"
                    stroke-width="9"
                    fill="none"
                    stroke-linecap="round"
                    stroke-dasharray="150 101">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 45 45"
                        to="360 45 45"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                </circle>
            </svg>
        </div>

    )
}