import style from './Home.module.css';
import mala from './imagens/mala.jpg'


function Home(props){
    return(
        <div>

            <section>
                <img className={style.mala_viagem} src={mala} alt="mala de viagem" />
                <div className={style.textos}>
                    <div className={style.titulo_texto}>Encontre aqui a viagem <br/> dos seus sonhos!!</div>
                    <div className={style.lorem}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Repellendus numquam quisquam ullam fugit debitis<br/> quo repellat iure quas molestias esse non veritatis<br/> suscipit, modi laboriosam assumenda <br/> laborum, necessitatibus autem officiis!</div>
                </div>
            </section>


        </div>
    )
}









export default Home