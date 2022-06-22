export const checkAppointments = (appointments, appointmentIds) => {
  if (!Array.isArray(appointments) || !Array.isArray(appointmentIds)) return [];
  const newAppointments = appointments.filter((appointment) => {
    return !appointmentIds.includes(appointment.appointmentID);
  });
  return newAppointments;
};

export const checkQuestionnaires = (questionnaires, questionnaireIds) => {
  const newQuestionnaires = questionnaires.filter((questionnaire) => {
    return !questionnaireIds.includes(questionnaire.id);
  });
  return newQuestionnaires;
};
