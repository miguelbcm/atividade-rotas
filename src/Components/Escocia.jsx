import style from './Escocia.module.css'
import viagens from './imagens/viagens.jpg'

function Escocia(props){
    return(
        <div className={style.fundo_escocia}>
            <div className={style.caixa_escocia}>
                <h2 className={style.titulo_escocia}>Venha Explorar esse lugar <br/>incrivel Escócia!!</h2>
                <p className={style.texto_escocia}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, odio natus? Iusto perferendis doloribus natus molestias, magni possimus eos impedit quaerat delectus esse praesentium omnis rem corrupti quos cumque optio.
                </p>
                <img className={style.logo_canyon} src={viagens} alt="logo_viagens" />

            </div>

        </div>
    )
}


export default Escocia