// 팔로우 리스트 모달
import { BtnWrapper, MenuBtn } from "../../../pages/Member/Mypage.style";
import { useState } from "react";
import Follower from "./Follower";
import Following from "./Following";
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
  }

function FollowListModal(props: FollowModalProps){
    const {isOpen, onClose} = props;
    // const propstext = text
    const [selectBtn, setSelectBtn] = useState("follower");

    const Component = () => {
        if (selectBtn) {
        switch (selectBtn) {            
            case "follower":
                return <Follower />;
            case "following":
                return <Following />;
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

export default FollowListModal;