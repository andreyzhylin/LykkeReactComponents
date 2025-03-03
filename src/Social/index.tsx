import classnames from 'classnames';
import React from 'react';

import './icons.css';
import './style.css';

const SOCIAL_CLASS_NAME = 'social';

export interface SocialProps {
  theme: any;
}

export const Social = ({theme}: SocialProps) => (
  <ul
    className={classnames(SOCIAL_CLASS_NAME, {
      [`${SOCIAL_CLASS_NAME}--${theme}`]: theme
    })}
  >
    <li>
      <a
        href="https://www.facebook.com/LykkeCity"
        target="_blank"
        className="social__item"
      >
        <i className="icon icon--fb_simple" />
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/lykke"
        target="_blank"
        className="social__item"
      >
        <i className="icon icon--tw" />
      </a>
    </li>
    <li>
      <a
        href="http://instagram.com/lykkecity"
        target="_blank"
        className="social__item"
      >
        <i className="icon icon--instagram" />
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/c/LykkeX"
        target="_blank"
        className="social__item"
      >
        <i className="icon icon--youtube" />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/company/lykke"
        target="_blank"
        className="social__item"
      >
        <i className="icon icon--linkedin" />
      </a>
    </li>
    <li>
      <a
        href="https://www.reddit.com/r/lykke/"
        target="_blank"
        className="social__item"
      >
        <i className="icon icon--reddit" />
      </a>
    </li>
    <li>
      <a
        href="https://t.co/TmjMYnQD7T"
        target="_blank"
        className="social__item"
      >
        <i className="icon icon--telegram" />
      </a>
    </li>
    <li>
      <a href="https://t.me/LykkeDev" target="_blank" className="social__item">
        <i className="icon icon--telegram_dev" />
      </a>
    </li>
  </ul>
);

export default Social;
