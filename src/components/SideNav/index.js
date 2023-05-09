import { Link } from "react-router-dom"
import {RiPieChartLine} from "react-icons/ri"
import {BsTags} from "react-icons/bs"
import {TbCalendarTime} from "react-icons/tb"
import {BiUserCircle} from "react-icons/bi"
import {MdOutlineSettings} from "react-icons/md"
import "./index.scss"
import { setActivePage } from "../.."
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"

const SideNav = ()=>{
    const activePage = useSelector((state)=>state.activePage);
    const dispatch = useDispatch();

    const [toggleBtn, setToggleBtn] = useState(false);

    const onMenuClick=()=>{
        setToggleBtn(!toggleBtn);
    }

    return (
        <div className="sidenav">
            <h2 className="sidenav__top-section--title mobile-title">Board.</h2>
            <div className="menu-btn" onClick={onMenuClick}>
                <span className={toggleBtn ? "menu-btn__burger open" : "menu-btn__burger"}></span>
            </div>
            <div className={toggleBtn ? "nav open" : "nav"}>
                <div className={toggleBtn ? "main-nav open" : "main-nav"}>
                        <div className="sidenav__top-section top-section-mobile-view">
                            <ul className="navlinks-container">
                                <li className="navlinks-container__link-wrapper">
                                    <Link to="/home" id="home" className="navlinks-container__link" onClick={(e)=>dispatch(setActivePage({activePage : e.target.id}))} style={{fontWeight : activePage==="home" ? "bold" : ""}}><RiPieChartLine className="navlinks-container__link-icon"/>Dashboard</Link>
                                </li>
                                <li className="navlinks-container__link-wrapper">
                                    <Link to="/transactions" id="transactions" className="navlinks-container__link" onClick={(e)=>dispatch(setActivePage({activePage : e.target.id}))} style={{fontWeight : activePage==="transactions" ? "bold" : ""}}><BsTags className="navlinks-container__link-icon"/>Transactions</Link>
                                </li>
                                <li className="navlinks-container__link-wrapper">
                                    <Link to="/schedules" id="schedules" className="navlinks-container__link" onClick={(e)=>dispatch(setActivePage({activePage : e.target.id}))} style={{fontWeight : activePage==="schedules" ? "bold" : ""}}><TbCalendarTime className="navlinks-container__link-icon"/>Schedules</Link>
                                </li>
                                <li className="navlinks-container__link-wrapper">
                                    <Link to="/users" id="users" className="navlinks-container__link" onClick={(e)=>dispatch(setActivePage({activePage : e.target.id}))} style={{fontWeight : activePage==="users" ? "bold" : ""}}><BiUserCircle className="navlinks-container__link-icon"/>Users</Link>
                                </li>
                                <li className="navlinks-container__link-wrapper">
                                    <Link to="/settings" id="settings" className="navlinks-container__link" onClick={(e)=>dispatch(setActivePage({activePage : e.target.id}))} style={{fontWeight : activePage==="settings" ? "bold" : ""}}><MdOutlineSettings className="navlinks-container__link-icon"/>Settings</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="sidenav__bottom-section bottom-section-mobile-view">
                            <Link to="/home" className="navlinks-container__link">Help</Link>
                            <Link to="/home" className="navlinks-container__link">Contact Us</Link>
                        </div>
                    </div>
                </div>
            <div className="sidenav__top-section">
                <h2 className="sidenav__top-section--title">Board.</h2>
                <ul className="navlinks-container">
                    <li className="navlinks-container__link-wrapper">
                        <Link to="/home" id="home" className="navlinks-container__link" onClick={(e)=>dispatch(setActivePage({activePage : e.target.id}))} style={{fontWeight : activePage==="home" ? "bold" : ""}}><RiPieChartLine className="navlinks-container__link-icon"/>Dashboard</Link>
                    </li>
                    <li className="navlinks-container__link-wrapper">
                        <Link to="/transactions" id="transactions" className="navlinks-container__link" onClick={(e)=>dispatch(setActivePage({activePage : e.target.id}))} style={{fontWeight : activePage==="transactions" ? "bold" : ""}}><BsTags className="navlinks-container__link-icon"/>Transactions</Link>
                    </li>
                    <li className="navlinks-container__link-wrapper">
                        <Link to="/schedules" id="schedules" className="navlinks-container__link" onClick={(e)=>dispatch(setActivePage({activePage : e.target.id}))} style={{fontWeight : activePage==="schedules" ? "bold" : ""}}><TbCalendarTime className="navlinks-container__link-icon"/>Schedules</Link>
                    </li>
                    <li className="navlinks-container__link-wrapper">
                        <Link to="/users" id="users" className="navlinks-container__link" onClick={(e)=>dispatch(setActivePage({activePage : e.target.id}))} style={{fontWeight : activePage==="users" ? "bold" : ""}}><BiUserCircle className="navlinks-container__link-icon"/>Users</Link>
                    </li>
                    <li className="navlinks-container__link-wrapper">
                        <Link to="/settings" id="settings" className="navlinks-container__link" onClick={(e)=>dispatch(setActivePage({activePage : e.target.id}))} style={{fontWeight : activePage==="settings" ? "bold" : ""}}><MdOutlineSettings className="navlinks-container__link-icon"/>Settings</Link>
                    </li>
                </ul>
            </div>
            <div className="sidenav__bottom-section">
                <Link to="/home" className="navlinks-container__link">Help</Link>
                <Link to="/home" className="navlinks-container__link">Contact Us</Link>
            </div>
        </div>
    )
}

export default SideNav