import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin: 0 auto;
  margin-bottom: 14px;
  padding: 10px;

  max-width: 100%;
  width: 360px;

  border-radius: 5px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 12px;
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 150px;
  width: 150px;

  border-radius: 50%;

  &:hover {
    background: #ecf0f3;
  }
`;

export const Info = styled.p`
  color: #2a2a2a;
  font-size: 16px;
`;

export const Name = styled(Info)`
  color: #2b3162;
  font-weight: 500;
`;

export const Tag = styled(Info)`
  color: #1a236a;
`;

export const Location = styled(Info)`
  color: #9e0202;
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 100%;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  &:hover {
    background: #ecf0f3;
  }

  :not(:last-child) {
    border-right: 1px dotted #9e0202;
  }
`;

export const StatsInfo = styled.span`
  margin: 0px 5px;
  color: #9e0202;
  font-size: 16px;
`;

export const Label = styled(StatsInfo)`
  font-weight: 400;
`;

export const Quantity = styled(StatsInfo)`
  color: #9e0202;
  text-shadow: 1px 1px 1px #fff;
  font-weight: 700;
`;
