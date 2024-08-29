import './styles.scss';
import { useState } from 'react';
import classNames from 'classnames';

import Website from './Website';
import Desktop from './Desktop';
import { type Screens, EScreens } from './types';

import type { languages } from 'i18n/ui'
import { useTranslations } from 'i18n/utils'

type PortfolioProps = {
  url: URL
}

const Portfolio = ({ url }: PortfolioProps) => {
  const [screens, setScreens] = useState<Screens>('website');

  const t = useTranslations(url.pathname.replaceAll('/', '') as keyof typeof languages)

  function showScreens() {
    const components = {
      [EScreens.website]: <Website url={url} />,
      [EScreens.desktop]: <Desktop url={url} />
    }
    return components[screens]
  }

  return (
    <div className='portfolio' id='nav.portfolio'>
      <h1 className='portfolio__title'>{ t('nav.portfolio') }</h1>

      <div className='screens'>
        <button
          onClick={() => setScreens(EScreens.website)}
          className={classNames(
            { 'screens__option': true, selected: screens === EScreens.website }
          )}
        >
          Website
        </button>
        <button
          onClick={() => setScreens(EScreens.desktop)}
          className={classNames(
            { 'screens__option': true, selected: screens === EScreens.desktop }
          )}
        >
          Desktop
        </button>
      </div>

      <div>{showScreens()}</div>
    </div>
  )
}

export default Portfolio

