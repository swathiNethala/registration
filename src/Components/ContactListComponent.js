import styled from "styled-components";
import { contactList } from "../Data";

const Container = styled.div`
 display:flex;
 flex-direction: column;
 height: 100%;
 overflow-y:auto;
 flex: 0.6;
`;
const ProfileInfoDiv = styled.div`
display:flex;
flex-direction:row;
background:#ededed;
padding:15px;

`;
const ProfileImage =styled.img`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 
 `;
 const SearchIcon1 =styled.img`
 display : flex;
 height: 10px;
 width: 10%;
 float: right;
 margin-right: 20px;
 margin-top:20px;
 margin-left: 150px;
 
 `;
 const SearchIcon2 =styled.img`
 flex-direction: column;
 width: 10%;
 height: 10px;
 float:right;
 margin-right: 20px;
 margin-top:20px;
 `;
const SearchBox = styled.div`
display: flex;
background: #f6f6f6;
padding:10px ;
`;
export const SearchContainer = styled.div`
display: flex;
flex-direction: row;
background: white;
border-radius: 16px;
width: 100%;
padding: 20px 0;
`;
const SearchIcon =styled.img`
width: 28px;
height: 28px;
padding-left: 10px;
`;
export const SearchInput =styled.input`
width: 100%;
outline: none;
border: none;
padding-left: 15px;
font-size: 17px;
margin-left: 10px;
`;
const ContactItem =styled.div`
    display: flex;
    flex-direction : row;
    border-bottom: 1px solid #f2f2f2;
    background: white;
    cursor: pointer;
    padding: 15px 12px;
`;

const ProfileIcon = styled(ProfileImage)` 
width: 38px;
height: 38px;
`;
const ContactName= styled.span`
width: 100%;
font-size: 16px;
color:black;
`;
const ContactInfo = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin: 0 19px;
`;

const LastText = styled.div``;

const LastTextTime = styled.div``;

const ContactComponent =(props) => {
    const { userData } = props;
    return ( 
        <ContactItem> 
        <ProfileIcon src={userData.profilePic}/>
        <ContactInfo>
        <ContactName>{userData.name}</ContactName>
        <LastText>{userData.lastText}</LastText>
        {/* <lastTextTime>{userData.lastTextTime}</lastTextTime>   */}
        {/* <MessageText>Hello</MessageText> */}
        </ContactInfo>
         {/* <lastTextTime>5:00pm</lastTextTime>  */}
         <LastTextTime>{userData.lastTextTime}</LastTextTime> 
    </ContactItem>
    );
};

const ContactListComponent = () => {

    return( 
        <Container>
        <ProfileInfoDiv>
            <ProfileImage src= "/profile/profilephoto.jpg"/>
            <SearchIcon1 src="/profile/setting-icon.png"/>
            <SearchIcon2 src="/profile/plus-icon.png"/>

        </ProfileInfoDiv>
        <SearchBox>
            <SearchContainer>
                <SearchIcon src={"profile/search-icon.png"}/>
                <SearchInput placeholder="Search or start new chat" />
            </SearchContainer>
        </SearchBox>
        {contactList.map((userData, index)=>(
        <ContactComponent key={index} userData={userData}/>
        ))}
          </Container>
    );
};

export default ContactListComponent;