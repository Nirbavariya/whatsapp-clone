import Head from "next/head";
import styled from "styled-components";
import {Button} from "@material-ui/core";
import {auth,provider} from "../firebase";

function Login(){
    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }
    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <LoginContainer>
                <Logo src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png"/>
                <Button onClick={signIn} variant="outlined">Sign in with Google</Button>
            </LoginContainer>
        </Container>
    );
}
export default Login;
const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;
const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px;
    background-color:white;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7);
`;
const Logo = styled.img`
    height: 200px;
    width:200px;
    margin-bottom: 50px;
`;