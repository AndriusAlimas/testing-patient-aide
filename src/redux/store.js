import { configureStore } from "@reduxjs/toolkit";

// Import: Reducers
import UserReducer from "./slices/UserSlice";
import ScrollYReducer from "./slices/ScrollYSlice";
import QuestionnaireSortReducer from "./slices/QuestionnaireSortSlice";
import PopUpStatusReducer from "./slices/PopUpStatusSlice";
import PageTransitionsReducer from "./slices/PageTransitionsSlice";
import AppointmentsReducer from "./slices/AppointmentsSlice";
import AllergiesReducer from "./slices/Allergies";

export default configureStore({
  reducer: {
    user: UserReducer,
    scrollYStatus: ScrollYReducer,
    questionnaireSort: QuestionnaireSortReducer,
    appointments: AppointmentsReducer,
    popUpStatus: PopUpStatusReducer,
    pageTransitions: PageTransitionsReducer,
    allergies : AllergiesReducer,
  },
});
