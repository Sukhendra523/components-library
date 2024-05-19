import React from 'react';
import { PageProp } from './type';
import { Container } from './styles';

const Page: React.FC<PageProp> = ({title, children}) => {
  return (
    <Container data-testid='page-container'>
        <h1>{title}</h1>
        <div>{children}</div>
    </Container>
  )
}



export default Page