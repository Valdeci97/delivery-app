import { useContext } from 'react';

import AppContext from '../context/AppContext';
import * as S from '../styles/loginFooter';
import githubLink from '../utils/social';

export default function Footer() {
  const { theme } = useContext(AppContext);
  const isDarkMode = theme === 'dark';

  return (
    <S.Footer>
      <S.LeftSide>
        <S.LeftSideTitle isDarkMode={ isDarkMode }>
          Feito antes das 17h por
        </S.LeftSideTitle>
      </S.LeftSide>
      <S.RightSide>
        {githubLink.map(({ href, name, src }) => (
          <S.GitLink
            target="_blank"
            href={ href }
            key={ name }
            rel="noreferrer"
            isDarkMode={ isDarkMode }
          >
            <S.GitImage src={ src } alt={ name } title={ name } />
            <S.MemberName>{ name }</S.MemberName>
          </S.GitLink>
        ))}
      </S.RightSide>
    </S.Footer>
  );
}
