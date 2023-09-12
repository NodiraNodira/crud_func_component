import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction: column;
width:300px;
overflow-y:scroll;
`;

export const Wrapper = styled.div`
border-bottom: 1px solid rgba(255, 255, 255, 0.2);

`;

export const Title = styled.div`
color: ${({title})=>title? 'rgba(255, 255, 255, 0.6)':'#ffffff'} ;
line-height:20px;
font-size:18px;
height:40px;
display:flex;
align-items:center;
font-weight:normal;
font-style:normal;
font-family:Roboto;
margin-left:24px;
`;

export const ItemWrapper = styled.div`
display:flex;
align-items:center;
cursor:pointer;
`;