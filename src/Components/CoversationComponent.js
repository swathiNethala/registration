import { useEffect, useState } from "react";
import styled from "styled-components";
import { messagesList } from "../Data";
import { SearchContainer, SearchInput } from "./ContactListComponent";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 2;
  background: #f6f7f8;
`;
const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: green;
  padding: 15px;
  gap: 10px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const ProfileImage1 = styled.img`
  display: flex;
  height: 15px;
  width: 15px;
  float: right;
  margin-right: 20px;
  margin-top: 12px;
  margin-left: 70%;
`;
const ProfileImage2 = styled.img`
  display: flex;
  height: 15px;
  width: 15px;
  float: right;
  margin-right: 20px;
  margin-top: 12px;
`;
const ProfileImage3 = styled.img`
  display: flex;
  height: 15px;
  width: 15px;
  float: right;
  margin-right: 20px;
  margin-top: 12px;
`;
const ChatBox = styled.div`
  display: flex;
  background: pink;
  padding: 10px;
  align-items: center;
  bottom: 0;
`;

const EmojiImage = styled.img`
  width: 30px;
  height: 28px;
  opacity: 0.8;
  cursor: pointer;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  background: #e5ddd6;
`;

const MessageDiv = styled.div`
  justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
  display: flex;
  margin: 5px 16px;
`;

const Message = styled.div`
  background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
  max-width: 40%;
  color: #303030;
  padding: 8px 10px;
  font-size: 19px;
`;

const ConversationComponent = () => {
  const [dataFromLocal, setDataFromLocal] = useState([]);
  const [textEntered, setTextEntered] = useState("");
  const [imgAdd, setImgAdd] = useState();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("chatList"));
    if (data) setDataFromLocal(data);
    const dataContainer = document.getElementById('containerData')
    dataContainer.scroll({
        behavior:"auto",
        top:10000
    })
  }, [imgAdd]);

  function previewFile() {
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        const imgObject = {
          messageType: "IMAGE",
          text: reader.result,
          senderID: 0,
          addedOn: "12:00 PM",
          id: Math.random().toString(),
        };
        const dupDataFromLocal = dataFromLocal;
        dataFromLocal.push(imgObject);
        localStorage.setItem("chatList", JSON.stringify(dupDataFromLocal));
        setImgAdd((prv) => !prv);
      },
      false
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  return (
    <Container>
      <ProfileHeader>
        <ProfileImage src="/profile/IMG_3464.jpg" />
        Sharma <br />
        online
        <ProfileImage1 src="/profile/video-icon.png" />
        <ProfileImage2 src="/profile/call_icon.png" />
        <ProfileImage3 src="/profile/search-icon.png" />
      </ProfileHeader>
      <MessageContainer id='containerData'>
        {messagesList.map((messageData, index) => (
          <MessageDiv key={index} isYours={messageData.senderID === 0}>
            <Message isYours={messageData.senderID === 0}>
              {messageData.text}
            </Message>
          </MessageDiv>
        ))}
        <>
          {dataFromLocal &&
            dataFromLocal.map((messageData, index) => (
              <div key={index}>
                {messageData.messageType === "TEXT" && (
                  <MessageDiv isYours={messageData.senderID === 0}>
                    <Message isYours={messageData.senderID === 0}>
                      {messageData.text}
                    </Message>
                  </MessageDiv>
                )}
                {messageData.messageType === "IMAGE" && (
                  <MessageDiv isYours={messageData.senderID === 0}>
                    <Message isYours={messageData.senderID === 0}>
                      <img
                        src={messageData.text}
                        alt={Math.random().toString()}
                        width="200px"
                        height="200px"
                      />
                    </Message>
                  </MessageDiv>
                )}
              </div>
            ))}
        </>
      </MessageContainer>
      <ChatBox>
        <SearchContainer>
          <EmojiImage src={"/data.png"} />
          &nbsp;&nbsp;

          <input id="fileInput" type="file" onChange={previewFile} style={{visibility:'hidden', width:'1px'}} />
          <EmojiImage src={"Profile/file_attach.png"} onClick={()=>{
            document.getElementById('fileInput').click()}} />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const dataToAdd = {
                messageType: "TEXT",
                text: textEntered,
                senderID: 0,
                addedOn: "12:00 PM",
                id: Math.random().toString(),
              };
              const dupDataFromLocal = dataFromLocal;
              dataFromLocal.push(dataToAdd);
              localStorage.setItem(
                "chatList",
                JSON.stringify(dupDataFromLocal)
              );
              setTextEntered("");
              setImgAdd(prv=> !prv)
            }}
          >
            <SearchInput
              value={textEntered}
              placeholder="Type a message"
              onChange={(e) => {
                setTextEntered(e.target.value);
              }}
            />
          </form>
        </SearchContainer>
      </ChatBox>
    </Container>
  );
};
export default ConversationComponent;