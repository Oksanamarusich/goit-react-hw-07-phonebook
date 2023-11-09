import styled from 'styled-components';

export const ErrorMessage = styled.b`
display: flex;
justify-content: center;
align-items: start;
margin-top: 20px;
margin-bottom: 40px;
color: ${p => p.theme.colors.error};
font-style: italic;
`;