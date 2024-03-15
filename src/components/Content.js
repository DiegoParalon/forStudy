import style from './Content.module.css'

const Content = () => {
    return (
        <div class="content">
            <h2>Titulo</h2>
            <p>
                lorem Ipsum is simply form to write on documents
            </p>
            <button className={style.btn}>Outro botao teste</button>

        </div>
    )
}

export default Content