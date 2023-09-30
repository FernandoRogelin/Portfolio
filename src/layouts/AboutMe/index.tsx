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
          Meu nome é Fernando Rogelin, sou desenvolvedor front-end 6+ anos, desde que comecei na área
          de desenvolvimento eu atuo nessa área, atualmente estou morando em Guaíba - RS, uma cidade ao lado
          de Porto Alegre.
        </p>
        <p className='aboutme__text'>
          Sou apaixonado pela área de Front (as vezes estudo um pouco Back-end também), então costumo estudar
          bastante sobre e sempre se atualizando sobre as novidades que estão surgindo. Já fiz projetos de
          Internet Banking, Painel administrativos, Portfolio de Investimentos, entra vários outros.
        </p>
        <p className='aboutme__text'>
          No meu tempo livre, gosto bastante de sair com os meus amigos e minha família para conversar, trocar
          uma idéia, também gosto bastante de praticar esporte, adoro ir na academia e jogar futebol.
        </p>
        <div className='details'>
          <label className='details__label'>
            Idade:
            <span className='details__span'>26</span>
          </label>
          <label className='details__label'>
            Endereço:
            <span className='details__span'>Guaíba/Porto Alegre - RS</span>
          </label>
          <label className='details__label'>
            Experiência:
            <span className='details__span'>6 Anos</span>
          </label>
          <label className='details__label'>
            Cargo:
            <span className='details__span'>Front-end Engineer</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
