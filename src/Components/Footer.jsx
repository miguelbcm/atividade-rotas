import style from './Footer.module.css';
import instagram from './imagens/insta.jpg'
import facebook from './imagens/face.jpg'
import tiktok from './imagens/tiktok.png'
import whats from './imagens/whtas.png'


function Footer(props){
    return(
        <div>
            <footer>
                <p className={style.titulo_footer}>Siga-nos em nossas redes sociais</p>
                <div className={style.icones}>
                    <img className={style.contatos1} src={instagram} alt="insta" />
                    <img className={style.contatos2} src={facebook} alt="face" />
                    <img className={style.contatos3} src={tiktok} alt="tiktok" />
                    <img className={style.contatos4} src={whats} alt="whts" />
                </div>
                <p className={style.telefone}>Telefone de contato: (11)9555-3355</p>
            </footer>
        </div>
    )
}








export default Footer