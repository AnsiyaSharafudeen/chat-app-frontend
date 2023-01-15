import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ChatPage() {

const [chats, setChats] = useState([]);

    const fetchChats = () => {
        axios.get('/api/chat').then(response => {
            setChats(response.data)
        })
    }
    useEffect(() => {
        
        return () => {
           fetchChats()
        };
    }, []);

  return (
      <div>
          {
              chats.map((chat) => 
                  (
                      <div key={chat.id}>
                      {chat.chatName}
                      </div>
                  )
              )
          }
    </div>
  )
}

export default ChatPage