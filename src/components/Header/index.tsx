import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import logoLightSvg from '../../assets/logo-light.svg';
import logoDarkSvg from '../../assets/logo-dark.svg';

import { HeaderContainer, Fixed } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Fixed>
      <HeaderContainer>
        <img
          src={title === 'light' ? logoLightSvg : logoDarkSvg}
          alt="Github"
        />
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          width={50}
          height={20}
          // handleDiameter={20}
          offColor={colors.secundary}
          onColor={colors.primary}
        />
      </HeaderContainer>
    </Fixed>
  );
};

export default Header;
