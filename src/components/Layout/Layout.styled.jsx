import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  max-width: 80%;
`;

export const Header = styled.header`
  margin: 20px 0;
  border-bottom: 1px solid #070707;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  padding-bottom: 12px;
  font-weight: 700;
  color: #070707;
  font-size: 22px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  &.active {
    color: #a946ad;
  }
`;
