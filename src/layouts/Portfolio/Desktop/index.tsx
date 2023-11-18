import './styles.scss';
import { memo } from 'react'

import Project from 'components/Project';

const Desktop = () => {
  return (
    <div className='desktop'>
      <Project
        title='VistoriaPro'
        photo='vistoriapro.png'
        technologies='ASP.NET Core, .NET e C#'
      >
        O VistoriaPro é um software de gestão para empresas de vistoria
        e inspeção veicular, desenvolvido para automatizar todo processo,
        desde a ordem de serviço, até a emissão do laudo. Possui relatórios
        detalhados, que podem ser acessados via web, pela área administrativa
        do sistema. Simples e intuitivo, o sistema auxilia em todas as
        atividades, garantindo que o fluxo de vistoria e inspeção seja feito
        com maior agilidade e segurança.
      </Project>
    </div>
  )
}

export default memo(Desktop)
