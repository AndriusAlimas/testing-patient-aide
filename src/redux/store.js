import { configureStore } from "@reduxjs/toolkit";

// Import: Reducers
import UserReducer from "./slices/UserSlice";
import ScrollYReducer from "./slices/ScrollYSlice";
import QuestionnaireSortReducer from "./slices/QuestionnaireSortSlice";
import PopUpStatusReducer from "./slices/PopUpStatusSlice";
import PageTransitionsReducer from "./slices/PageTransitionsSlice";

export default configureStore({
  reducer: {
    user: UserReducer,
    scrollYStatus: ScrollYReducer,
    questionnaireSort: QuestionnaireSortReducer,
    popUpStatus: PopUpStatusReducer,
    pageTransitions: PageTransitionsReducer,
  },
});
