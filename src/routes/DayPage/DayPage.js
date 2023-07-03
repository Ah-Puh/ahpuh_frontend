import React, {useState,useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from 'moment/moment';
import Calendar from 'react-calendar';


import Header from '../../components/Header';
import './DayPage.css';
import 'react-calendar/dist/Calendar.css'; // css import

function DayPage() {

  const [value, onChange] = useState(new Date());
  // const [levelData, setlevelData] = useState([]);//서버인자
  const navigate = useNavigate();

  //next-stage 선택시 강사선택페이지로 이동
  const goToTutorPage = () => {
    navigate(`/tutor`);
};

  const handleDataChange = (data) => {
    onChange(data);
    //moment 사용해서 날짜 처리
    const formattedData = moment(data.format('YYYY-MM-DD'));
    localStorage.setItem('days', data.format('MM-DD'));
  }

  //localStorage에 days 저장
  const params = useParams();
  useEffect(()=>{
    localStorage.setItem('place',params.locationId);
  })

  //서버 데이터 받아오기
//   const fetchData = async () => {
//     try {
//         const response = await axios.get(`/day?beach_id=${levelValue}`);
//         setlevelData(response.data.result);
//     } catch (error) {
//         console.log(error);
//     }
// };

//   useEffect(() => {
//     fetchData();
//   });


  return(
    <>
      <div className='viewport'>

        <div className='contents'>

          <Header />

          <div className='info'>
            
            <span className='place-name'>
              망상 해수욕장
              {/* {place-name 변수 받기 useeffect로 변수 전송 서버에도 보내고, 메인이랑도 받고 props는 안되고 currysting으로 넘겨주자} */}
            </span>
            <span className='date-choose'>
              원하는 날짜를 선택하세요
            </span>
            
            <div className='next-stage' onClick={()=>goToTutorPage()}>
            <span>다음 단계 &gt;</span>
            </div>
            
          </div>

          

          <div className='level'>
            
            <div id='1'>별로예요
            {/* <img src={icon1} style={{width:"20px", height:"20px"}}/> */}
            </div>
            <div id='2'>좋지 않아요</div>
            <div id='3'>무난해요</div>
            <div id='4'>좋아요</div>
            <div id='5'>최고예요</div>
          </div>

          

          <div className='calendar'>
            <Calendar
              onChange={handleDataChange}
              value={value}
              calendarType="US" // 요일을 일요일부터 시작하도록 설정
	            formatDay={(locale, date) => moment(date).format("D")} // '일' 제외하고 숫자만 보이도록 설정
            />
              {/* <div className="click-date">
                {moment(value).format("YYYY년 MM월 DD일")} 
              </div> */}
          </div>

        </div>
      </div>
    </>
  );
  
}

export default DayPage;
