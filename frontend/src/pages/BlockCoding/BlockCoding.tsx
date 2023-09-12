import BlocklyComponent from "../../components/Blockly"
import Header from "../../components/Common/Header"
import { Container } from "../../components/Common/Header.style"
import SideBar from "../../components/Common/SideBar"
import '../../components/Blockly/blocks/customblocks';
import '../../components/Blockly/generators/generator';

function BlockCoding() {

    return (
        <Container>
            <Header />
            <SideBar />
            <div>
                <BlocklyComponent readOnly={false}
                    trashcan={true} media={'media/'}
                    move={{
                        scrollbars: true,
                        drag: true,
                        wheel: true
                    }}
                >
                </BlocklyComponent>
            </div>
        </Container>

    )

}

export default BlockCoding