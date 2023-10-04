import './styles.scss';
import { useState } from 'react';
import classNames from 'classnames';

import Website from './Website';
import Desktop from './Desktop';
import { type Screens, EScreens } from './types';

const Portfolio = () => {
  const [screens, setScreens] = useState<Screens>('website');

  function showScreens() {
    const teste = {
      [EScreens.website]: <Website />,
      [EScreens.desktop]: <Desktop />
    }
    return teste[screens]
  }

  return (
    <div className='portfolio'>
      <h1 className='portfolio__title'>Portfolio</h1>

      <div className='screens'>
        <p
          onClick={() => setScreens(EScreens.website)}
          className={classNames(
            { 'screens__option': true, selected: screens === EScreens.website }
          )}
        >
          Website
        </p>
        <p
          onClick={() => setScreens(EScreens.desktop)}
          className={classNames(
            { 'screens__option': true, selected: screens === EScreens.desktop }
          )}
        >
          Desktop
        </p>
      </div>

      <div>{showScreens()}</div>
    </div>
  )
}

export default Portfolio

