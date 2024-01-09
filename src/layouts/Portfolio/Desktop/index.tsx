import './styles.scss';
import { memo } from 'react'

import Project from 'components/Project';

const Desktop = () => {
  return (
    <div className='desktop'>
      <Project
        title='Plataforma de gestão para empresas de vistoria'
        photo='vistoriapro.png'
        technologies='ASP.NET Core, .NET, C#, ReactJS e Electron(node)'
      >
        A plataforma é um software de gestão para empresas de vistoria e inspeção
        veicular, desenvolvido para automatizar todo processo, desde a ordem de
        serviço, até a emissão do laudo. O software possui, gestão de ordem de serviço,
        gestão de agendamentos, gestão de documentos, gestão de fotos e gestão de
        laudos, além disso também oferece uma variedade de relatórios e análises que
        ajudam as empresas a entender como o processo de vistoria e inspeção veicular
        está sendo realizado.
      </Project>
    </div>
  )
}

export default memo(Desktop)
