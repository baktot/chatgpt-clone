import './chatPage.css'
import NewPrompt from '../../components/newPrompt/NewPrompt'

const ChatPage = () => {
  return (
    <div className='chatPage'>
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Alias sunt repellat minima ipsam eius error quaerat deleniti nulla voluptate?
          Inventore harum voluptatibus officiis ratione obcaecati unde nostrum magni veniam cumque.</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <NewPrompt/>
        </div>
      </div>
    </div>
  )
}

export default ChatPage