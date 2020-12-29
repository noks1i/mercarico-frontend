import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Cities from '../../components/Cities/Cities';
import Map from '../../components/Map/Map';

import { Container, Content } from './style';

const MainPage = () => {
    return (
        <Container>
            <Navbar />
            <Content>
                <Cities />
                <Map />
            </Content>
        </Container>
    )
}

export default MainPage;