import style from './Aruba.module.css'
import img_aruba from './imagens/Aruba.jpg'
import viagens from './imagens/viagens.jpg'

function Aruba(props){
    return(
        <div className={style.fundo_aruba}>
            <div className={style.caixa_aruba}>
                <h2 className={style.titulo_aruba}>Venha Explorar esse lugar<br/>incrivel Muralha da China</h2>
                <div className={style.texto_aruba}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque provident ex accusantium voluptates in vero quam, at laboriosam velit veritatis necessitatibus dignissimos nulla nobis, impedit ipsam vitae et quis.
                </div>
                <img className={style.logo_canyon} src={viagens} alt="logo_viagens" />
            </div>

        </div>
    )
}

export default Aruba