import React from 'react';
import { Container } from 'reactstrap';

import Header from '../components/header/index';
import Navigation from '../components/navigation';
import IPageProps from '../interfaces/page';

const HomePage: React.FunctionComponent<IPageProps> = () => {
    return (
        <Container fluid className="p-0">
            <Navigation />
            <Header title="A NerdyBlog Website" headline="check out what people have to say" />
            <Container>Blog Stuff</Container>
        </Container>
    );
};

export default HomePage;
