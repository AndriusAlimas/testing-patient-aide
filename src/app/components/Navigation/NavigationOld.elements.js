import styled from "styled-components/macro";
import { deviceMaxWidth } from "../../../definitions/breakPoints";

export const SecondaryMenu = styled.div`
  display: none;
  @media ${deviceMaxWidth.mobileL} {
    display: ${({ healthOpen }) => (healthOpen ? "block" : "none")};
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background: #11101d;
  padding: ${({ sidebar }) => (sidebar ? "0" : "6px 14px;")};
  z-index: 20;
  transition: all 0.5s ease;
  width: ${({ sidebar }) => (sidebar ? "250px" : "78px")};
  @media ${deviceMaxWidth.tabletL} {
    display: inline;
    flex-flow: column nowrap;
    text-align: center;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: ${({ sidebar }) => (sidebar ? "100%" : "78px")};
  }
  @media ${deviceMaxWidth.tabletL} {
    .logo-details .iconLogo {
      width: 89%;
    }
  }
  @media ${deviceMaxWidth.tablet} {
    .logo-details .iconLogo {
      width: 83%;
    }
  }
  .threeIcons {
    display: none;
  }
  p {
    color: #a2aaad;
  }
  @media ${deviceMaxWidth.mobileL} {
    // MOBILE VIEW
    .nav-list {
      margin-top: 0;
      overflow-y: ${({ sidebar }) => (sidebar ? "auto" : "visible")};
      overflow-x: ${({ sidebar }) => (sidebar ? "hidden" : "visible")};
      height: 86%;
      padding-left: 0;
      /* width */
      ::-webkit-scrollbar {
        width: 2px;
      }
      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888;
      }
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
      @media ${deviceMaxWidth.tabletL} {
        overflow-y: auto;
        overflow-x: hidden;
        max-height: 79%;
      }
      @media ${deviceMaxWidth.mobileL} {
        /* display: none; */
        max-height: 100%;
        height: 100%;
        overflow-y: hidden;
        overflow-x: hidden;
        display: flex;
        justify-content: space-around;
        position: absolute;
        bottom: -12px;
        width: 100%;
      }
    }
    

    .threeIcons {
      width: 100%;
      display: flex;
      justify-content: space-around;
      position: relative;
      bottom: -0.3rem;
      overflow: visible;
    }
    .restOfIcons {
      display: none;
    }
    :nth-child(2) {
      padding: 0;
    }
    overflow: hidden;
    border-top: ${({ scrollYStatus }) =>
      scrollYStatus !== "bottom" && "1px solid #D3D1D7"};
    background-color: ${({ scrollYStatus }) =>
      scrollYStatus !== "bottom" ? "rgba(255, 255, 255, 0.8)" : "transparent"};
    backdrop-filter: ${({ scrollYStatus }) =>
      scrollYStatus !== "bottom" && "blur(20px)"};
    position: fixed;
    top: auto;
    bottom: 0;
    width: 100%;
    height: 80px;
  }


  .logo-details {
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
    // MOBILE VIEW
    @media ${deviceMaxWidth.mobileL} {
    }
  }
  .logo-details .icon {
    transition: all 0.5s ease;
    @media ${deviceMaxWidth.mobileL} {
      display: none;
    }
  }
  .logo-details .logo_name {
    color: white;
    margin-top: 15px;
    width: 140px;
    font-size: 20px;
    font-weight: 600;
    transition: ${({ sidebar }) => (sidebar ? "all 1.5s ease" : "none")};
    @media ${deviceMaxWidth.mobileL} {
      display: none;
    }
  }
  .logo-details .icon,
  .logo-details .logo_name {
    opacity: ${({ sidebar }) => (sidebar ? "1" : "0")};
    @media ${deviceMaxWidth.mobileL} {
      /* display: none; */
      opacity: 0;
    }
  }
  .logo-details #btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 22px;
    transition: all 0.4s ease;
    font-size: 23px;
    cursor: pointer;
    transition: all 0.5s ease;
    text-align: center;
    @media ${deviceMaxWidth.mobileL} {
      display: none;
    }
  }
  i {
    color: #fff;
    height: 60px;
    min-width: 50px;
    font-size: 28px;
    text-align: center;
    line-height: 60px;
    @media ${deviceMaxWidth.mobileL} {
      /* display: none; */
    }
  }

  li {
    position: relative;
    margin: 8px 0;
    list-style: none;
    @media ${deviceMaxWidth.mobileL} {
      /* display: none; */
      position: static;
      margin: 0;
    }
  }
  li .tooltip {
    position: absolute;
    top: -20px;
    left: calc(100% + 15px);
    z-index: 3;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 400;
    opacity: 0;
    white-space: nowrap;
    pointer-events: none;
    transition: 0s;
  }
  li:hover .tooltip {
    opacity: 1;
    pointer-events: auto;
    transition: all 0.4s ease;
    top: 50%;
    transform: translateY(-50%);
  }
  li .tooltip {
    display: ${({ sidebar }) => sidebar && "none"};
  }
  li .test {
    margin-left: 50%;
  }
  input {
    font-size: 15px;
    color: #fff;
    font-weight: 400;
    outline: none;
    height: 50px;
    width: 100%;
    width: 50px;
    border: none;
    border-radius: 12px;
    transition: all 0.5s ease;
    background: #1d1b31;
    padding: ${({ sidebar }) => sidebar && "0 20px 0 50px"};
    width: ${({ sidebar }) => sidebar && "100%"};
    @media ${deviceMaxWidth.mobileL} {
      padding: 0;
      width: auto;
    }
  }
  li {
    padding-right: 3px;
  }
  li a {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    background: #11101d;
    @media ${deviceMaxWidth.mobileL} {
      /* display: none; */
      height: auto;
      background-color: transparent;
    }
  }
  li .healthWellbeing {
    background: ${({ healthOpen }) => healthOpen && "#fff"};
  }
  li .healthRecords {
    background: ${({ healthRecordsOpen }) => healthRecordsOpen && "#fff"};
  }
  /* li a:hover {
    background: #fff;
    @media ${deviceMaxWidth.mobileL} {
      background: none;
      p {
        color: #E0623F;
      }
    }
  } */
  li a .subpages {
    color: white;
  }
  .secondary-list {
    display: flex;
    justify-content: space-between;
    padding: 0;
    li {
      margin: 8px 0;
      @media screen and (max-width: 280px) {
        :nth-child(1) {
          margin: 0;
        }
        :nth-child(3) {
          margin: 0;
        }
      }
    }
  }
  li a .links_name {
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    transition: 0.4s;
    opacity: ${({ sidebar }) => (sidebar ? "1" : "0")};
    pointer-events: ${({ sidebar }) => (sidebar ? "auto" : "none")};
    @media ${deviceMaxWidth.mobileL} {
      display: none;
    }
  }
  li .healthWellbeing .links_name,
  li .healthWellbeing i {
    color: ${({ healthOpen }) => healthOpen && "#11101d"};
  }
  li .healthRecords .links_name,
  li .healthRecords i {
    color: ${({ healthRecordsOpen }) => healthRecordsOpen && "#11101d"};
  }
  li a:hover .links_name,
  li a:hover i {
    transition: all 0.5s ease;
    color: #11101d;
  }
  li i {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    border-radius: 12px;
  }
  li a i svg {
    @media ${deviceMaxWidth.mobileL} {
      font-size: 1.3em;
    }
  }
  li.profile {
    position: fixed;
    height: 60px;
    left: 0;
    bottom: -8px;
    padding: 10px 14px;
    background: #1d1b31;
    transition: all 0.5s ease;
    overflow: hidden;
    width: ${({ sidebar }) => (sidebar ? "250px" : "78px")};
    @media ${deviceMaxWidth.tabletL} {
      width: ${({ sidebar }) => (sidebar ? "100%" : "78px")};
    }
    @media ${deviceMaxWidth.mobileL} {
      display: none;
    }
  }
  li .profile-details {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    @media ${deviceMaxWidth.tabletL} {
      display: ${({ sidebar }) => (sidebar ? "block" : "flex")};
    }
    @media ${deviceMaxWidth.mobileL} {
      display: none;
    }
  }
  li img {
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 10px;
    @media ${deviceMaxWidth.mobileL} {
      display: none;
    }
  }
  li.profile .name,
  li.profile .job {
    font-size: 15px;
    font-weight: 400;
    color: #fff;
    white-space: nowrap;
    @media ${deviceMaxWidth.mobileL} {
      display: none;
    }
  }
  li.profile .job {
    font-size: 12px;
    @media ${deviceMaxWidth.mobileL} {
      display: none;
    }
  }
  .profile #log_out {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 60px;
    line-height: 60px;
    border-radius: 0px;
    transition: all 0.5s ease;
    width: ${({ sidebar }) => (sidebar ? "50px" : "100%")};
    background: ${({ sidebar }) => (sidebar ? "none" : "#1d1b31")};
    @media ${deviceMaxWidth.mobileL} {
      display: none;
    }
  }
`;

export const RecordsMenu = styled.div`
  display: ${({ healthRecordsOpen }) => (healthRecordsOpen ? "block" : "none")};
  margin-left: ${({ healthRecordsOpen }) => healthRecordsOpen && "4%"};
  @media ${deviceMaxWidth.tabletL} {
    margin-left: ${({ healthRecordsOpen }) => healthRecordsOpen && "3%"};
  }
`;

export const HealthRecords = styled.div`
  display: ${({ sidebar }) => (sidebar ? "block" : "none")};
  li {
    display: ${({ healthOpen }) => (healthOpen ? "block" : "none")};
    padding-right: 10px;
  }
  @media ${deviceMaxWidth.tabletL} {
    padding-right: 1px;
  }
  li a {
    margin-left: ${({ sidebar }) => sidebar && "3%"};
  }
`;
