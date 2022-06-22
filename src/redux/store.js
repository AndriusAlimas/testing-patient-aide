import { configureStore } from "@reduxjs/toolkit";
import { sessionReducer } from "redux-react-session";

// Import: Reducers
import UserReducer from "./slices/UserSlice";
import UITriggersReducer from "./slices/UITriggers";
import AppointmentsReducer from "./slices/AppointmentsSlice";
import AllergiesReducer from "./slices/Allergies";
import ProceduresReducer from "./slices/ProceduresSlice";
import ConditionsReducer from "./slices/ConditionsSlice";
import DocumentsReducer from "./slices/DocumentsSlice";
import PractitionerReducer from "./slices/PractitionerSlice";
import QuestionnaireReducer from "./slices/QuestionnaireSlice";
import NotificationsReducer from "./slices/NotificationsSlice";
import EncountersReducer from "./slices/EncountersSlice";
import MedicationsReducer from "./slices/MedicationsSlice";

export default configureStore({
  reducer: {
    session: sessionReducer,
    user: UserReducer,
    uiTriggers: UITriggersReducer,
    appointments: AppointmentsReducer,
    allergies: AllergiesReducer,
    procedures: ProceduresReducer,
    conditions: ConditionsReducer,
    documents: DocumentsReducer,
    practitioner: PractitionerReducer,
    questionnaire: QuestionnaireReducer,
    notifications: NotificationsReducer,
    encounters: EncountersReducer,
    medications: MedicationsReducer,
  },
});
