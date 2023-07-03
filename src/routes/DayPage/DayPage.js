import React, {useState,useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";
// import { QueryClient, QueryClientProvider  } from 'react-query';
import axios from "axios";
import moment from 'moment/moment';
import Calendar from 'react-calendar';


import Header from '../../components/Header';
import icon1 from "../../image/icon1.png";
import Footer from "../../components/Footer.js";

import './DayPage.css';
import 'react-calendar/dist/Calendar.css'; // css import
// import { useQuery } from 'react-query';

function DayPage(props) {

  const [value, onChange] = useState(new Date());
  const [levelData, setlevelData] = useState([]);//서버인자
  const navigate = useNavigate();

  //next-stage 선택시 강사선택페이지로 이동
  const goToTutorPage = () => {
    navigate(`/tutor`);
};

//days localStorage 저장!
const handleDataChange = (date) => {
  onChange(date);
  //moment 사용해서 날짜 처리
  const momentDate = moment(date);
  const formattedData = momentDate.format('YYYY-MM-DD');
  localStorage.setItem('days', momentDate.format('MM-DD'));
}
 
//place localStorage 가져오고 저장하기
useEffect(() => {
  // localStorage에서 locationId 가져오기
  const storedLocationId = localStorage.getItem('locationId');
  console.log("locationId:", storedLocationId);

  // … 나머지 코드 …
}, []);
  //  let {locationId} = useParams();
  // //const locationId = new URLSearchParams(window.location.search).get('locationId')

  //   localStorage.setItem('place',locationId);


  //서버 데이터 받아오기
  // const {data} = useQuery(
  //   ["time","index"],
  //   async () => {
  //     const result = await axios.get(`http://54.145.149.194/day?beach_id={}`);
  //     return result.data;
  //   },
  //   {
  //     onSuccess: (data: any) => {
  //       setlevelData(data);
  //     },
  //   }
  // );

  // useEffect(() => {
  //   fetchData();
  // });

  

  const time = [
    "2023-07-04",
    "2023-07-05",
    "2023-07-06",
    "2023-07-07",
    "2023-07-08",
    "2023-07-09",
    "2023-07-10",
  ];

  const index = [
    4,
    5,
    4,
    4,
    4,
    4,
    4,
  ];

  const addContent = ({ date }:any) => {
    // 해당 날짜(하루)에 추가할 컨텐츠의 배열
    const contents = [];
    if (time.find((day) => day === moment(date).format("YYYY-MM-DD"))) {
    contents.push(
      <>
      <img
      src={icon1}
      className="iconImg"
      width="26"
      height="26"
      />
      </>
    );
    }
    return <div>{contents}</div>
  }
  
  // const addContent = ({date}:any)=>{
  //   const contents = [];

  //   if(time.find(()))
  // }

  return(
    <>
      <div className='viewport'>

        <div className='contents'>

          <Header />

          <div className='info'>
            
            <span className='place-name'>
              망상 해수욕장
              {/* {storedLocationId} */}
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
            
            <div id='1'>별로예요&ensp;
            <img src={icon1} style={{width:"25px", height:"25px"}}/>
            </div>
            <div id='2'>좋지 않아요&ensp;
            <img src={icon1} style={{width:"25px", height:"25px"}}/>
            </div>
            <div id='3'>무난해요&ensp;
            <img src={icon1} style={{width:"25px", height:"25px"}}/>
            </div>
            <div id='4'>좋아요&ensp;
            <img src={icon1} style={{width:"25px", height:"25px"}}/>
            </div>
            <div id='5'>최고예요&ensp;
            <img src={icon1} style={{width:"25px", height:"25px"}}/>
            </div>
          </div>

          

          <div className='calendar'>
            <Calendar
              onChange={handleDataChange}
              value={value}
              calendarType="US" // 요일을 일요일부터 시작하도록 설정
	            formatDay={(locale, date) => moment(date).format("D")} // '일' 제외하고 숫자만 보이도록 설정
              tileContent={addContent}
              
              
              // className="mx-auto w-full text-sm border-b"
              // tileContent={({ date, view }) => {
              //   if (levelData.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
              //   return (
              //     <>
              //       <div className="flex justify-center items-center absoluteDiv">
              //       <div className="dot">
              //         <button class="react-calendar__tile">
              //         <abbr>날짜</abbr>
              //         {/*tileContent로 추가되는 위치 시작*/}
              //         <div class="flex ...">
              //           <div class="dot"></div>
              //         </div>
              //         {/* tileContent로 추가되는 위치 끝 */}
              //         </button>
              //       </div>
              //       </div>
              //     </>
              //   );}
              // }}
            />
              
          </div>

        </div>
        <Footer></Footer>
      </div>
    </>
  );
  
}

export default DayPage;
