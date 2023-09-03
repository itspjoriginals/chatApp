import {
    MultiChatSocket,
    MultiChatWindow,
    useMultiChatLogic,
  } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('e2adbe5f-5172-4af4-9f41-c15578ee035a', props.user.username, props.user.secret);
    return <div style={{height:'100vh'}}>
        <MultiChatSocket{...chatProps}/>
        <MultiChatWindow{...chatProps} style={{height:'100%'}}/>

    </div>
}
export default ChatsPage;