import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 24px 0;
  gap: 24px;
`;

export const TitleText = styled.h2`
  margin: 36px 0 24px;
`;

export const Span = styled.span`
  font-weight: bold;
`;

export const Button = styled.button`
  padding: 8px 20px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  font-weight: 500;
  min-width: 120px;
  background-color: #a946ad;
  color: #ffffff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    background-color: #905891;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const LinkInfo = styled(Link)`
  text-decoration: none;
  color: #070707;
  font-size: 18px;

  &:hover,
  &:focus {
    color: #a946ad;
    font-weight: bold;
  }
`;
