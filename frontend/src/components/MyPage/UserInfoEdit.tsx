import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -150px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 562px;
  /* height: 707px; */
  flex-shrink: 0;
  border-radius: 13px;
  background: #fff;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
  margin-top: 5px;
  margin-bottom: 50px;
`;
const Title = styled.p`
  font-size: 23px;
`;
const Text = styled.p`
  font-size: 12px;
`;
const ProfileBox = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 30px;
  opacity: 60%;
`;
const UploadBtn = styled.button`
  width: 125px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 6px;
  font-weight: 500;
  color: #9d6cf9;
  border: 2px solid #9a68f7;
  background: linear-gradient(0deg, #fff 0%, #fff 100%), #d9d9d9;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
const InputTitle = styled.p`
  background-color: white;
  font-size: 13px;
  color: #403e41;
  font-weight: 500;
  z-index: 5;
  padding: 10px;
  margin-left: -250px;
  text-align: start;
  justify-content: start;
`;
const Input = styled.input`
  width: 400px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1.5px solid rgba(0, 0, 0, 0.26);
  background: #fff;
  margin-top: -30px;
  padding-left: 20px;
  font-size: 12px;
  color: lightgrey;
`;

const SubmitBtn = styled.button`
  width: 188px;
  height: 33px;
  flex-shrink: 0;
  border: 0;
  border-radius: 6px;
  background: #9155fd;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
  margin-right: 10px;
  margin-top: 30px;
  color: white;
`;
const CancleBtn = styled.button`
  width: 188px;
  height: 33px;
  flex-shrink: 0;
  border: 0;
  border-radius: 6px;
  background: #f5f4f7;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
  margin-left: 10px;
  margin-top: 30px;
`;
const Withdraw = styled.p`
  font-size: 13px;
  color: #9155fd;
  margin-left: 350px;
  margin-top: 20px;
  margin-bottom: 50px;
`;
const ErrorMessage = styled.span`
  font-size: 10px;
  color: red;
	padding-top: 5px;
`;
function UserInfoEdit() {
  const navigate = useNavigate();
  const {
    watch,
    register,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const password: string = watch("password");
  const data = {
    id: 12,
    nickname: "ssafy1234",
    email: "ssafy1234@naver.com",
    followerCnt: 12,
    followingCnt: 0,
    award: [
      "제1회 카카오 단기 투자 대회 우승",
      "제2회 공모주 투자 대회 준우승",
      "제1회 수익률 of 수익률을 찾아라 준우승",
      "제2회 카카오 단기 투자 대회 우승",
    ],
    money: 122145221,
    ticketCnt: 12,
  };
	const fileInputRef = useRef<HTMLInputElement | null>(null); // HTMLInputElement | null 타입으로 수정
	const [imageURL, setImageURL] = useState<string>("");

  const handleImageUpload = () => {
    // 파일 선택 대화 상자 열기
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
    if (file) {
		// 통신 로직
		setImageURL("")
      console.log("Selected file:", file);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>회원 정보 수정</Title>
        <ProfileBox>
          <Img src={imageURL ? imageURL : "/icon/user4.png"} />
          <Box>
            <UploadBtn onClick={handleImageUpload}>Upload</UploadBtn>
            <input
              type="file"
              accept=".jpg, .png"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileSelected}
            />
            <Text>png 파일 또는 jpg 파일로 업로드 해주세요.</Text>
          </Box>
        </ProfileBox>
        <InputTitle>Nickname</InputTitle>
        <Input placeholder={data.nickname} />
        <InputTitle>E-mail</InputTitle>
        <Input placeholder={data.email} disabled={true} />
        <InputTitle>Password</InputTitle>
        <Input
          placeholder="8~16자리의 비밀번호를 입력해주세요."
          type="password"
          {...register("password", {
            pattern: {
              value:
                /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/,
              message:
                "영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 입력해주세요.",
            },
          })}
        />
				<ErrorMessage>{errors?.password?.message as string}</ErrorMessage>
        <InputTitle>Check Password</InputTitle>
        <Input
          placeholder="Check Password"
          type="password"
          {...register("checkpassword", {
            validate: (value) =>
              value === password || "비밀번호가 일치하지 않습니다.",
          })}
        />
				<ErrorMessage>{errors?.checkpassword?.message as string}</ErrorMessage>
        <ProfileBox>
          <SubmitBtn>✔ 완료</SubmitBtn>
          <CancleBtn onClick={() => navigate(-1)}>취소</CancleBtn>
        </ProfileBox>
        <Withdraw>회원 탈퇴</Withdraw>
      </Wrapper>
    </Container>
  );
}

export default UserInfoEdit;
