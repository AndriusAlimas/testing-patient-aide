import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setScrollYStatus } from "../../redux/slices/UITriggers";

const ScrollToTop = (props) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY === 0) {
        dispatch(setScrollYStatus("top"));
      } else if ((window.scrollY < 40) & (window.scrollY !== 0)) {
        dispatch(setScrollYStatus("near Top"));
      } else if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 1
      ) {
        dispatch(setScrollYStatus("bottom"));
      } else {
        dispatch(setScrollYStatus("scrolling"));
      }
    };
  }, [pathname]);
  return props.children || null;
};

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();

    return <Component history={history} {...props} />;
  };

  return Wrapper;
};

export default withRouter(ScrollToTop);
