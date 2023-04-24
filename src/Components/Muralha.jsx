import style from './Muralha.module.css'
import img_muralha from './imagens/Muralha.jpg'
import viagens from './imagens/viagens.jpg'

function Muralha(props){
    return(
        <div className={style.fundo_muralha}>
            <div className={style.caixa_muralha}>
                <h2 className={style.titulo_muralha}>Venha Explorar esse lugar<br/>incrivel Muralha da China</h2>
                <p className={style.texto_muralha}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea eius modi non deserunt laudantium animi numquam perspiciatis eligendi. Consequuntur suscipit voluptas laboriosam quaerat ab culpa non deserunt provident officiis minus.
                </p>
                <img className={style.logo_canyon} src={viagens} alt="logo_viagens" />
            </div>

        </div>
    )
}


export default Muralha