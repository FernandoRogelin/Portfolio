import './styles.scss'

import Block from 'components/Block'
import { RiComputerLine, RiCodeSSlashLine } from 'react-icons/ri'

import type { languages } from 'i18n/ui'
import { useTranslations } from 'i18n/utils'

type ServicesProps = {
  url: URL
}

const Services = ({ url }: ServicesProps) => {
  const t = useTranslations(url.pathname.replaceAll('/', '') as keyof typeof languages)

  return (
    <div className="services" id="nav.services">
      <h1 className="services__title">{t('nav.services')}</h1>

      <div className="development">
        <Block title="Website" icon={RiCodeSSlashLine}>
          {t('website.text')}
        </Block>
        <Block title="Desktop app" icon={RiComputerLine}>
          {t('desktop.text')}
        </Block>
      </div>
    </div>
  )
}

export default Services
