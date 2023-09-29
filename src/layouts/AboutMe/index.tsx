import './styles.scss';

const AboutMe = () => {
  return (
    <div className='about'>
      <div className='perfil'>
        <div className='perfil__photo' />
        <div className='perfil__frame' />
      </div>
      <div className='aboutme'>
        <h3 className='aboutme__title'>About Me</h3>
        <p className='aboutme__text'>
          Sejam bem-vindos ao meu portfolio, atualmente estou trabalhando como Senior Front-end Engineer e tenho 6+ anos de experiência na área.
        </p>
        <p className='aboutme__text'>
          Sou apaixonado pela área de Front-end (as vezes estudo um pouco Back-end também) então costumo estudar bastante sobre e ficar sempre se atualizando sobre as novidades que estão surgindo, até por que na área de desenvolvimento, sempre tem algo novo para estudar.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
