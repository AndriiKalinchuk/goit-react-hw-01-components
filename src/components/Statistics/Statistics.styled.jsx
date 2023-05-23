import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-bottom: 28px;
  max-width: 100%;
  width: 360px;

  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  border-radius: 8px;
`;

export const Title = styled.h2`
  padding: 24px;

  border-bottom: 1px solid #d3d5e3;
  color: #9e0202;
  text-shadow: 1px 1px 1px #fff;
  font-weight: 700;
  font-size: 14px;

  text-transform: uppercase;
  text-align: center;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  padding: 16px;

  width: 100%;
  height: 100%;
`;

export const Label = styled.span`
  font-size: 14px;
  color: #2a2a2a;
`;

export const Percentage = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #2a2a2a;
`;
