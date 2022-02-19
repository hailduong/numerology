import s from './RulingNumber.module.css'

const RulingNumberComponent = () => {
    return (
        <main>
            <header className={s.rulTitle}>Ruling Number</header>
            <div className={s.rulContent}>
                <div className={s.rulBorder}>
                    <div className={s.rulNumber}>1</div>
                </div>
                <div className={s.rulExplain}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu
                    tincidunt tortor. Nulla lacinia
                    egestas nisl at fermentum. Nam convallis hendrerit augue, a feugiat mauris varius id. Maecenas mi
                    enim,
                    dictum ac dolor eget, consectetur faucibus erat. Vestibulum et leo nunc. In hac habitasse platea
                    dictumst. Aliquam vel nunc ut dui tempus tempor. Aliquam ut efficitur ex.
                </div>
            </div>
            <nav className={s.rulNavigation}>
                <div>Ruling</div>
                <div>BirthChart</div>
                <div>Peaks</div>
            </nav>
        </main>
    )
}

export default RulingNumberComponent