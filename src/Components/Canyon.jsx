import style from './Canyon.module.css'
import viagens from './imagens/viagens.jpg'


function Canyon(props){
    return(
        <div className={style.fundo_canyon}>
            <div className={style.caixa}>
                <h2>Venha Explorar esse lugar<br/>incrivel Grand Canyon!!</h2>
                <p className={style.texto_lorem}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, voluptas accusamus libero incidunt saepe molestiae eius, beatae animi sed veniam voluptatem obcaecati nesciunt? Minus fuga minima reprehenderit, soluta sed porro.</p>
                <img className={style.logo_canyon} src={viagens} alt="logo_viagens" />
            </div>
            

        </div>
    )
}


export default Canyon