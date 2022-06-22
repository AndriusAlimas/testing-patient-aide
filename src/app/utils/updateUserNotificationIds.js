import axios from "axios";

export default async function updateUserNotificationIds(
  userId,
  notificationID,
  notificationType
) {
  const apiLogin = process.env.REACT_APP_LOGIN_API;
  const localUrl = "http://localhost:8080";
  const currentUrl = apiLogin;

  try {
    const config = {
      method: "PUT",
      url: `${currentUrl}/user/updateNotification`,
      headers: { "Content-Type": "application/json" },
      data: {
        notificationId: notificationID,
        userId: userId,
        notificationType: notificationType,
      },
    };
    const response = await axios(config);
    console.log(response);
  } catch (error) {
    console.log(error.response);
  }
}
