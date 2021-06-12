import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import {auth} from "../firebase";
import moment from "moment";

function Message({user,message}){
    const [userLoggedin] = useAuthState(auth);
    const TypeOfMsg = user === userLoggedin.email ? Sender : Receiver;
    return (
        <Container>
            <TypeOfMsg>{message.message}
            <TimeStamp>
            {message.timestamp ? moment(message.timestamp).format('LT') : "..."}
            </TimeStamp>
            </TypeOfMsg>
        </Container>
    );
}
export default Message;
const Container = styled.div``;
const MessageElement = styled.p`
    width: fit-content;
    padding: 15px;
    border-radius: 8px;
    margin: 10px;
    position: relative;
    text-align: right;
    min-width:60px;
    padding-bottom: 26px;
`;

const Sender = styled(MessageElement)`
    margin-left: auto;
    background-color:#dcf8c6;
`;

const Receiver = styled(MessageElement)`
    text-align:left;
    background-color: whitesmoke;
`;

const TimeStamp = styled.span`
    color:gray;
    padding: 10px;
    font-size:9px;
    position:absolute;
    bottom:0;
    right:0;
    text-align:right;
`;