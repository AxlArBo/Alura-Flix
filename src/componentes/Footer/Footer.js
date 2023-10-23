import './Footer.css'

const Footer = () => {
    return <footer className='footer' style={{backgroundImage: 'url(/img/fondo-footer0.75.jpg)'}}>
        <div className='redes'> 
            <a href='https://www.discordapp/users/541806512662642698'> 
                <img src='/img/discord.png' alt='Threads'/>
            </a>

            <a href='https://twitter.com/AxelArBo'>
                <img src='/img/twitter.png' alt='Twitter'/>
            </a>
            
            <a href='https://instagram.com/axelarroyob?igshid=MTcydzB0bTA5bTg1Yg=='>
                <img src='/img/instagram.png' alt='Instagram'/>
            </a>
        </div>
        <img src='/img/Logo.png' alt='Logo'/>
        <strong>Desarrollado por Axel Arroyo Bonilla</strong>
    </footer>
}

export default Footer