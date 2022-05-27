import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "./Navigation.elements";
import { Link, useLocation } from "react-router-dom";


export default function Navigation() {
  const location = useLocation();
  const [selectedPage, setSelectedPage] = useState(location.pathname);
  const { scrollYStatus } = useSelector((state) => state.scrollYStatus);

  useEffect(() => {
    setSelectedPage(location.pathname);
  }, [location.pathname]);
  return (
    <NavigationContainer
      scrollYStatus={scrollYStatus}
      selectedPage={selectedPage}
    >
      <div id="navButtonsContainer">
        <Link to="/" className="navButton">
          <svg
            id="homeIcon"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="30"
          >
            <path d="m503.871094 231.433594-236.800782-226.984375c-6.183593-5.933594-15.957031-5.933594-22.140624 0l-237.035157 227.21875c-5.015625 5.015625-7.894531 11.925781-7.894531 18.988281 0 14.699219 11.96875 26.667969 26.667969 26.667969h37.332031v202.664062c0 17.664063 14.335938 32 32 32h90.667969c8.832031 0 16-7.167969 16-16v-138.664062c0-2.925781 2.386719-5.335938 5.332031-5.335938h96c2.921875 0 5.332031 2.410157 5.332031 5.335938v138.664062c0 8.832031 7.167969 16 16 16h90.667969c17.664062 0 32-14.335937 32-32v-202.664062h37.332031c14.699219 0 26.667969-11.96875 26.667969-26.667969 0-7.0625-2.878906-13.972656-8.128906-19.222656zm0 0" />
          </svg>
          <h2 className="title" id="homeTitle">
            Home
          </h2>
        </Link>
        <Link to="/health-tracker" className="navButton">
          <svg
            id="myHealthIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 329.928 329.928"
            strokeWidth="20"
          >
            <path
              id="XMLID_482_"
              d="M115.604,278.4c5.95,5.224,12.092,10.614,18.41,16.202c0.043,0.038,0.087,0.077,0.131,0.115l21.018,18.155
		c2.816,2.433,6.311,3.649,9.806,3.649s6.991-1.217,9.807-3.649l21.014-18.155c0.044-0.038,0.087-0.076,0.13-0.114
		c41.607-36.796,72.802-64.966,95.371-92.44c26.36-32.088,38.638-61.101,38.638-91.305c0-54.646-42.805-97.451-97.449-97.451
		c-24.56,0-48.827,9.248-67.511,25.279c-18.689-16.032-42.956-25.279-67.517-25.279C42.806,13.406,0,56.212,0,110.857
		C0,176.912,45.99,217.286,115.604,278.4z M104.964,134.965h39.999V94.964h40.001v40.001h40v40h-40v39.999h-40.001v-39.999h-39.999
		V134.965z"
            />
          </svg>
          <h2 className="title" id="myHealthTitle">
            My Health
          </h2>
        </Link>
        <Link to="/calendar" className="navButton">
          <svg
            id="calendarIcon"
            viewBox="0 0 34 34"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="2"
          >
            <g>
              <path d="m29.6 2h-3v3c0 .6-.5 1-1 1s-1-.4-1-1v-3h-16v3c0 .6-.5 1-1 1s-1-.4-1-1v-3h-3c-1.5 0-2.6 1.3-2.6 3v3.6h32v-3.6c0-1.7-1.8-3-3.4-3zm-28.6 8.7v18.3c0 1.8 1.1 3 2.7 3h26c1.6 0 3.4-1.3 3.4-3v-18.3zm8.9 16.8h-2.4c-.4 0-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4 0 .8.3.8.8v2.5c-.1.5-.4.8-.9.8zm0-9h-2.4c-.4 0-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4 0 .8.3.8.8v2.5c-.1.5-.4.8-.9.8zm8 9h-2.5c-.4 0-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4 0 .8.3.8.8v2.5c0 .5-.3.8-.8.8zm0-9h-2.5c-.4 0-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4 0 .8.3.8.8v2.5c0 .5-.3.8-.8.8zm8 9h-2.5c-.4 0-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4 0 .8.3.8.8v2.5c0 .5-.3.8-.8.8zm0-9h-2.5c-.4 0-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4 0 .8.3.8.8v2.5c0 .5-.3.8-.8.8z" />
            </g>
          </svg>
          <h2 className="title" id="calendarTitle">
            Calendar
          </h2>
        </Link>
      </div>
    </NavigationContainer>
  );
}
