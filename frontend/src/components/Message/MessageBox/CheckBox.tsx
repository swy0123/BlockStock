// 체크박스
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// 체크
import CheckIcon from '@mui/icons-material/Check';

function CheckBox(){
  return(
    <>
      <div style={styles.header}>
        <CheckBoxOutlineBlankIcon style={styles.checkBox} />
        <CheckIcon style={styles.check} />
      </div>
    </>
  )
} 

export default CheckBox
const styles = {
  header: {
    position: 'relative',
    width: '24px', // 아이콘 크기에 맞게 조정
    height: '29px', // 아이콘 크기에 맞게 조정
  },
  checkBox: {
    position: 'absolute',
    top: '0',
    left: '0',
    color: 'green',
  },
  check: {
    position: 'absolute',
    top: '-5',
    left: '2',
    fontSize:'27px',
    color: 'green',
    fontweight: 'bold',
  },
};