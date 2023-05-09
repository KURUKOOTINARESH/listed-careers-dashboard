import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SideNav from "../SideNav";
import "./index.scss"
import {BsBell} from "react-icons/bs"
import {CiSearch} from "react-icons/ci"
import {FaRegMoneyBillAlt} from "react-icons/fa"
import {BsTags} from "react-icons/bs"
import {AiOutlineLike} from "react-icons/ai"
import {FiUsers} from "react-icons/fi"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import { PieChart } from 'react-minimal-pie-chart';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";


/*const dashboardData = {
    statics : {
        revenue : "$2,129,430",
        transactions : "1520",
        likes : "9721",
        users : "892",
    },
    activities: {
        "Jan-Feb 2023" : {
            series: [
              {
                name: "Guest",
                data: [200, 380, 210, 300, 220, 420]
              },
              {
                name: "User",
                data: [100, 400, 160, 430, 180, 250]
              }
            ],
            options: {
              chart: {
                height: 350,
                type: 'line',
                dropShadow: {
                  enabled: true,
                  color: '#000',
                  top: 18,
                  left: 7,
                  blur: 10,
                  opacity: 0.2
                },
                toolbar: {
                  show: false
                }
              },
              colors: ['#E9A0A0', '#9BDD7C'],
              dataLabels: {
                enabled: true,
              },
              stroke: {
                curve: 'smooth'
              },
              title: {
                text: 'Guest & User',
                align: 'left'
              },
              
              markers: {
                size: 1
              },
              xaxis: {
                categories: ['','Week1', 'Week2', 'Week3', 'Week4', ''],
                labels:{
                    style:{
                        colors: ['#858585'],
                        fontFamily: 'Lato',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '17px',
                    }
                }
              },
              yaxis: {
                min: 0,
                max: 500,
                tickAmount: 5,
                labels:{
                    style:{
                        colors: ['#858585'],
                        fontFamily: 'Lato',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '17px',
                    }
                }
              },
              legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
              }
            },
          },
        "Feb-Mar 2023" : {
            series: [
              {
                name: "Guest",
                data: [100, 280, 110, 250, 200, 320]
              },
              {
                name: "User",
                data: [300, 200, 260, 330, 280, 450]
              }
            ],
            options: {
              chart: {
                height: 350,
                type: 'line',
                dropShadow: {
                  enabled: true,
                  color: '#000',
                  top: 18,
                  left: 7,
                  blur: 10,
                  opacity: 0.2
                },
                toolbar: {
                  show: false
                }
              },
              colors: ['#E9A0A0', '#9BDD7C'],
              dataLabels: {
                enabled: true,
              },
              stroke: {
                curve: 'smooth'
              },
              title: {
                text: 'Guest & User',
                align: 'left'
              },
              
              markers: {
                size: 1
              },
              xaxis: {
                categories: ['','Week1', 'Week2', 'Week3', 'Week4', ''],
                labels:{
                    style:{
                        colors: ['#858585'],
                        fontFamily: 'Lato',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '17px',
                    }
                }
              },
              yaxis: {
                min: 0,
                max: 500,
                tickAmount: 5,
                labels:{
                    style:{
                        colors: ['#858585'],
                        fontFamily: 'Lato',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '17px',
                    }
                }
              },
              legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
              }
            },
          },
        "Mar-Apr 2023" : {
            series: [
              {
                name: "Guest",
                data: [400, 280, 210, 100, 320, 320]
              },
              {
                name: "User",
                data: [200, 400, 360, 230, 180, 250]
              }
            ],
            options: {
              chart: {
                height: 350,
                type: 'line',
                dropShadow: {
                  enabled: true,
                  color: '#000',
                  top: 18,
                  left: 7,
                  blur: 10,
                  opacity: 0.2
                },
                toolbar: {
                  show: false
                }
              },
              colors: ['#E9A0A0', '#9BDD7C'],
              dataLabels: {
                enabled: true,
              },
              stroke: {
                curve: 'smooth'
              },
              title: {
                text: 'Guest & User',
                align: 'left'
              },
              
              markers: {
                size: 1
              },
              xaxis: {
                categories: ['','Week1', 'Week2', 'Week3', 'Week4', ''],
                labels:{
                    style:{
                        colors: ['#858585'],
                        fontFamily: 'Lato',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '17px',
                    }
                }
              },
              yaxis: {
                min: 0,
                max: 500,
                tickAmount: 5,
                labels:{
                    style:{
                        colors: ['#858585'],
                        fontFamily: 'Lato',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '17px',
                    }
                }
              },
              legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
              }
            },
          },
        "Apr-May 2023" : {
            series: [
              {
                name: "Guest",
                data: [100, 400, 160, 430, 180, 250]
              },
              {
                name: "User",
                data: [300, 280, 310, 100, 220, 420]
              }
            ],
            options: {
              chart: {
                height: 350,
                type: 'line',
                dropShadow: {
                  enabled: true,
                  color: '#000',
                  top: 18,
                  left: 7,
                  blur: 10,
                  opacity: 0.2
                },
                toolbar: {
                  show: false
                }
              },
              colors: ['#E9A0A0', '#9BDD7C'],
              dataLabels: {
                enabled: true,
              },
              stroke: {
                curve: 'smooth'
              },
              title: {
                text: 'Guest & User',
                align: 'left'
              },
              
              markers: {
                size: 1
              },
              xaxis: {
                categories: ['','Week1', 'Week2', 'Week3', 'Week4', ''],
                labels:{
                    style:{
                        colors: ['#858585'],
                        fontFamily: 'Lato',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '17px',
                    }
                }
              },
              yaxis: {
                min: 0,
                max: 500,
                tickAmount: 5,
                labels:{
                    style:{
                        colors: ['#858585'],
                        fontFamily: 'Lato',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '17px',
                    }
                }
              },
              legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
              }
            },
          },
    },
    products:{
        "Jan-Feb 2023" : {"basicTees":55,"customShortPants":31,"superHoodies":14},
        "Feb-Mar 2023" : {"basicTees":32,"customShortPants":15,"superHoodies":53},
        "Mar-Apr 2023" : {"basicTees":24,"customShortPants":42,"superHoodies":34},
        "Apr-May 2023" : {"basicTees":18,"customShortPants":42,"superHoodies":40},
    },
    schedule:[
        {
        "id" : "1",
        "meeting" : "Meeting with suppliers from Bali",
        "time" : "14:00 - 15:00",
        "place" : "Sunset Road, Kuta, Bali",
        },
        {
        "id" : "2",
        "meeting" : "Check operation at Giga Factory 1",
        "time" : "18:00 - 20:00",
        "place" : "Central Jakarta",
        }
    ]
}*/

const Home =()=>{
    const token = useSelector((state)=>state.token);
    const navigate = useNavigate();

    const [dashboardData,setDashboardData] = useState();

    useEffect(()=>{
        if(token.name===""){
          navigate('/')
        }
        else{
          fetch('http://localhost:3000/api')
            .then((res)=>res.json())
            .then((data)=>setDashboardData(data))
        }
    })

    const [productDate, setProductDate] = useState("Jan-Feb 2023")
    let details;
    if(dashboardData){
      details = dashboardData.products[productDate]
    }
    

    const [activityDate, setActivityDate] = useState("Jan-Feb 2023")
    let activityDetails;
    if(dashboardData){
      activityDetails = dashboardData.activities[activityDate]
    }


    let staticsData;
    if(dashboardData){
      staticsData = [
        {
            name: "Total Revenues",
            value : dashboardData.statics.revenue,
            icon : <FaRegMoneyBillAlt className="static-card__icon"/>,
            bgColor : '#DDEFE0',
        },
        {
            name: "Total Transactions",
            value : dashboardData.statics.transactions,
            icon : <BsTags className="static-card__icon"/>,
            bgColor : '#F4ECDD',
        },
        {
            name: "Total LIkes",
            value : dashboardData.statics.likes,
            icon : <AiOutlineLike className="static-card__icon"/>,
            bgColor : '#EFDADA',
        },
        {
            name: "Total Users",
            value : dashboardData.statics.users,
            icon : <FiUsers className="static-card__icon"/>,
            bgColor : '#DEE0EF',
        }
    ]
    }
    return(
        <div className="home">
            <SideNav/>
            <div className="home__content-container">
                <div className="home__header-container">
                    <h3 className="home__header-container--title">Dashboard</h3>
                    <div className="header-right-section">
                        <div className="search-container">
                            <input type="Search" placeholder="Search..." className="search-container__inputfield"/>
                            <CiSearch className="search-container__icon"/>
                        </div>
                        <BsBell/>
                        <img src={`${token.profilePic}`} alt={token.name} className="profile-img"/>
                    </div>
                </div>
                <ul className="statics-wrapper">
                    {staticsData && staticsData.map((eachData)=>
                    <li className="static-card" style={{backgroundColor : `${eachData.bgColor}`}}>
                        {eachData.icon}
                        <span className="static-card__name">{eachData.name}</span>
                        <span className="static-card__value">{eachData.value}</span>
                    </li>
                    )}
                </ul>
                <div className="activities-wrapper">
                <div className="data-card-container__top-section">
                        <h4 className="activities-wrapper__title">Activities</h4>
                        <select className="data-card-container__date-selector" onChange={(e)=>setActivityDate(e.target.value)}>
                            {dashboardData && Object.keys(dashboardData.products).map((eachItem)=><option>{eachItem}</option>)}
                        </select>
                        </div>
                    {activityDetails && <ReactApexChart options={activityDetails.options} series={activityDetails.series} type="line" height={280} />}
                    
                </div>
                <div className="data-cards-wrapper">
                    <div className="data-card-container">
                        <div className="data-card-container__top-section">
                            <h4 className="activities-wrapper__title">Top Products</h4>
                            <select className="data-card-container__date-selector" onChange={(e)=>setProductDate(e.target.value)}>
                                {dashboardData && Object.keys(dashboardData.products).map((eachItem)=><option>{eachItem}</option>)}
                            </select>
                        </div>
                        <div className="data-card-container__chart-container">
                            {details && <PieChart
                                data={[
                                    { title: 'Basic Tees', value: details.basicTees, color: '#98D89E' },
                                    { title: 'Super Hoodies', value: details.superHoodies, color: '#EE8484' },
                                    { title: 'Custom Short Pants', value: details.customShortPants, color: '#F6DC7D' },
                                    
                                ]}
                                className="piechart"
                            />}
                            
                            <ul className="data-card-container__content-container">
                                    {details && Object.keys(details).map((eachItem)=>{
                                        let classname = ""
                                        if(eachItem==="basicTees"){
                                            classname = "basic-tees"
                                        }
                                        else if(eachItem === "customShortPants"){
                                            classname = "custom-short-pants"
                                        }
                                        else{
                                            classname="super-hoodies"
                                        }
                                return <li className={classname}>
                                        <div className="text-box">
                                            <span className="text-box__name">
                                                {eachItem.split(/(?=[A-Z])/).map((s,index) => {
                                                    const firtChar = s[0].toUpperCase();
                                                    const remainChar = s.slice(1,).toLowerCase();
                                                    return firtChar+remainChar
                                                }).join(' ')}
                                            </span>
                                            <span className="text-box__value">
                                                {details[eachItem]}%
                                            </span>
                                        </div>
                                    </li>})}
                            </ul>
                        </div>
                    </div>
                    <div className="data-card-container">
                        <div className="data-card-container__top-section">
                            <h4 className="activities-wrapper__title">Today's Schedule</h4>
                            <div className="data-card-container__date-selector data-card-container__see-all"><span>See All </span> <MdOutlineKeyboardArrowRight/></div>
                        </div>
                        <ul className="data-card-container__content-container schedule-container">
                            {
                              dashboardData &&  dashboardData.schedule.map((eachItem)=>
                                {
                                let border = ""
                                if(eachItem.id === "1"){
                                    border = "4px solid #9BDD7C"
                                }
                                if(eachItem.id === "2"){
                                    border = "4px solid #6972C3"
                                }
                                return  <li className="schedule-box" style={{borderLeft: border}}>
                                        <p className="schedule-box__meeting">{eachItem.meeting}</p>
                                        <span className="schedule-box__text">{eachItem.time}</span>
                                        <span className="schedule-box__text">{eachItem.place}</span>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home