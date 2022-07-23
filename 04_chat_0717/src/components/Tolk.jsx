import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase.js";
import SendMessage from "./SendMessage.jsx";
import { collection, query, onSnapshot } from "firebase/firestore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Tolk() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    //2.1 query=コレクション(firebaseのデータが入る箱のこと)
    const q = query(collection(db, "messages")); //データにアクセス
    // 2.2
    const unsub = onSnapshot(q, (QuerySnapshot) => {
      setMessages(
        QuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          text: doc.data().text,
          timeStamp: doc.data().timeStamp,
        }))
      );
    });
    return () => unsub();
  }, []);
  return (
    <div>
      <div className="msgs">
        {messages.map(({ id, text }) => (
          <div>
            <Card sx={{ maxHeight: 80, minWidth: 275, mrgin: 20 }}>
              <CardContent>
                <Typography variant="body2">
                  <div key={id}>
                    <p>{text}</p>
                  </div>
                </Typography>
              </CardContent>
            </Card>
            <p></p>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
}

export default Tolk;
