import style from './Header.module.css';
import viagens from './imagens/viagens.jpg'
import lupa from './imagens/lupa.png'
import {Link} from 'react-router-dom';



function Header(){
    return(
        
            <header className={style.content}>
                <Link to='/'> <img src={viagens} alt="logo_site" className={style.logo_viagens} /> </Link>
                <nav className={style.menus}>
                    <ul className={style.menus}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/Canyon'>Grand Canyon</Link>
                        </li>
                        <li>
                            <Link to='/Escocia'>Escócia</Link>
                        </li>
                        <li>
                            <Link to='/Muralha'>Muralhas da China</Link>
                        </li>
                        <li>
                            <Link to='/Aruba'>Aruba</Link>
                        </li>
                    </ul>
                </nav>
                <input className={style.pesquisa} type="pesquisa" />
                <img className={style.lupa} src={lupa} alt="lupa" />
                
            </header>



        
    )  
}


export default Header