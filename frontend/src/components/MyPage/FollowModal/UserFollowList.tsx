// 팔로우 리스트 모달
import { BtnWrapper, MenuBtn } from "../../../pages/Member/Mypage.style";
import { useState } from "react";
import UserFollowing from "./UserFollowing";
import UserFollower from "./UserFollow";
import { 
    ModalWrapper,
    ModalContent,
    CloseIcon,
    Hr,
    Content
 } from "./Follow.style";

interface FollowModalProps {
    isOpen: boolean;
    onClose: () => void;
    text: string;
    memberId : number;
  }

function UserFollowListModal(props: FollowModalProps){
    const { isOpen, onClose, memberId } = props; // memberId 추가
    const [selectBtn, setSelectBtn] = useState("follower");

    const Component = () => {
        if (selectBtn) {
        switch (selectBtn) {            
            case "follower":
                return <UserFollower memberId={memberId} />; // memberId 전달
            case "following":
                return <UserFollowing memberId={memberId} />; // memberId 전달
            default:
                return null;
        }
    }};
    return(
        <ModalWrapper isOpen={isOpen}>
            <ModalContent>
                <CloseIcon src="/icon/close.png" onClick={onClose}/>
                <BtnWrapper>
                    <MenuBtn 
                    onClick={()=>setSelectBtn("follower")}
                    isSelected={selectBtn === "follower"}
                    >팔로워</MenuBtn>
                    <MenuBtn
                    onClick={()=> setSelectBtn("following")}
                    isSelected={selectBtn === "following"}
                    >팔로잉</MenuBtn>
                </BtnWrapper>
                <Hr/>
                <Content>{Component()}</Content>
            </ModalContent>
        </ModalWrapper>
    );
}

export default UserFollowListModal;