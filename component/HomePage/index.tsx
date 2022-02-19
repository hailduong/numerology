import s from './HomePage.module.css'

const HomePage = () => {
    return (
        <main className={s.homeContainer}>
            <div className={s.background}>
                <h1 className={s.numTitle}>NUMEROLOGY</h1>
                <form className={s.inputForm}>
                    <div className="input-group mb-3">
                        <input type="date" className="form-control" placeholder="Recipient's username"/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Name..."/>
                    </div>
                    <a className={`btn ${s.btnSubmit}`} href="#" role="button">VIEW RESULTS</a>
                </form>
            </div>
        </main>
    )
}

export default HomePage
