import {Link, useI18next} from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import React from 'react';

// TODO: Turn this into a dropdown
// TODO: Show language names instead of abreviations
export default function LanguageSelector({siteTitle}) {
    const {languages, originalPath} = useI18next();
    return (
      <ul className="languages"> 
        { languages.map((lng) => (
          <li key={lng} style={{
              display: 'inline',
              marginLeft: '3pt',
            }}
          >
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        )) }
      </ul>
    );
};
