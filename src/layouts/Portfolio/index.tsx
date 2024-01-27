import './styles.scss';
import { useState } from 'react';
import classNames from 'classnames';

import Website from './Website';
import Desktop from './Desktop';
import { type Screens, EScreens } from './types';

const Portfolio = () => {
  const [screens, setScreens] = useState<Screens>('website');

  function showScreens() {
    const components = {
      [EScreens.website]: <Website />,
      [EScreens.desktop]: <Desktop />
    }
    return components[screens]
  }

  return (
    <div className='portfolio' id='Portfolio'>
      <h1 className='portfolio__title'>Portfolio</h1>

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

