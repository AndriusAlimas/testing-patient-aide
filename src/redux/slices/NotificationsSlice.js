import { createSlice } from "@reduxjs/toolkit";

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    notifications: [],
  },
  reducers: {
    addNewAppointments: (state, action) => {
      state.notifications = [
        ...state.notifications,
        ...action.payload.map((appointment) => {
          return {
            id: appointment.appointmentID,
            appointmentDate: appointment.start,
            location: appointment.locationName,
            type: "appointment",
          };
        }),
      ];
    },
    addNewQuestionnaires: (state, action) => {
      state.notifications = [
        ...state.notifications,
        ...action.payload.map((questionnaire) => {
          return {
            questionnaireName: questionnaire.questionnaireName,
            id: questionnaire.id,
            type: "questionnaire",
          };
        }),
      ];
    },
    removeNotification: (state, action) => {
      state.notifications = [
        ...state.notifications.filter((notification) => {
          return notification.id !== action.payload;
        }),
      ];
    },
  },
});

export const { addNewAppointments, addNewQuestionnaires, removeNotification } =
  notificationsSlice.actions;
export default notificationsSlice.reducer;
