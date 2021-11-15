

export default function CommentWrite(){
    return(
        <Footer>
            <InnerFooter> 
                <InputBar 
                    placeholder="댓글을 입력하세요"
                    placeholderTextColor={"#888888"}
                />
                <SendIcon source={require("../../../public/images/List/send.png")}/>
            </InnerFooter>
        </Footer>
    )
}


const Footer = styled(View)`
    height: 76px;
    background-color: #ffffff;
    padding: 16px;
    elevation: 4;
`
const InnerFooter = styled(View)`
    border-width: 1px;
    border-radius: 10px;
    border-color: #518099;
    padding: 0 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const InputBar = styled(TextInput)`
    width: 287px;
    font-size: 16px;
    color: #000000;
`
const SendIcon = styled(Image)`
    width: 20px;
    height: 20px;
`