const Messages = ({messages}) => {

    return (
        < > 
            {messages.map((element, index) => (
                <div className="messages" key = {index}>
                    <p>{element.text}</p>
                    <sup>{element.author}</sup>
                </div>
            ))}
        </>
    )
};

export default Messages;