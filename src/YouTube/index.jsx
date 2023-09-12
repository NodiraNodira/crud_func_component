import React from "react";
import { Category, Container,Wrapper,Icons,Input,User } from "./style";
import Sidebar from "./Sidebar";
import Body from "./Body";
import logo from '../assets/imgs/logo.jpg';
import user from '../assets/imgs/user.jpg';

const YouTube =()=>{

    return (
        <Container>
            <Wrapper>
                <Category>
                    <Icons.Burger style={{marginTop:'5px',marginRight:'10px'}}/>
                    <Icons.Logo  src={logo} alt='Logo img'/>
                </Category>
                <Category>
                    <Input placeholder='search'/>
                    <Icons.Search/>
                </Category>
                <Category end >
                    <Icons.Video/>
                    <Icons.Menu/>
                    <Icons.Bell/>
                    <User src={user} alt='user'/>

                </Category>
            </Wrapper>
            <Container flex>
            <Sidebar/>
            <Body/>
            </Container>
        </Container>
    );
}

export default YouTube;