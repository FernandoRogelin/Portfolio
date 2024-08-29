import './styles.scss';
import { memo } from 'react'

import type { languages } from 'i18n/ui'
import { useTranslations } from 'i18n/utils'

import Project from 'components/Project'
import VistoriaPhoto from '/src/assets/images/vistoriapro.png'

type DesktopProps = {
  url: URL
}

const Desktop = ({ url }: DesktopProps) => {
  const t = useTranslations(url.pathname.replaceAll('/', '') as keyof typeof languages)

  return (
    <div className='desktop'>
      <Project
        photo={VistoriaPhoto.src}
        title='Plataforma de gestão para empresas de vistoria'
        technologies='ASP.NET Core, .NET, C#, ReactJS e Electron(node)'
      >
        { t('vistoria.text') }
      </Project>
    </div>
  )
}

export default memo(Desktop)
