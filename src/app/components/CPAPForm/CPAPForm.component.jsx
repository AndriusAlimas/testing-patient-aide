import React from "react";

import { SectionContainer } from "./CPAPForm.elements";

import { Form, Radio, Button, InputNumber, DatePicker } from "antd";

export default function CPAPForm() {
  return (
    <>
      <SectionContainer data-testid={"cpapForm"}>
        <Form
          style={{ width: "100%", padding: "0.5rem", marginBottom: "5rem" }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "10px 10px 1px 10px",
              marginBottom: "25px",
              borderRadius: "13px",
            }}
          >
            <Form.Item
              name="currentlyUsingCPAP"
              label="1. Are you currently using CPAP?"
              rules={[
                {
                  required: true,
                  message: "Please choose one option",
                },
              ]}
            >
              <Radio.Group size="large">
                <div style={{ display: "flex" }}>
                  <div>
                    <label className="container">
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        name="currentlyUsingCPAP"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      No
                      <input
                        type="radio"
                        value="No"
                        name="currentlyUsingCPAP"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="reductionOfSleepiness"
              label="2. Are you benefiting in terms of reduction of sleepiness?"
              rules={[
                {
                  required: true,
                  message: "Please choose one option",
                },
              ]}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <div>
                    <label className="container">
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        name="reductionOfSleepiness"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      No
                      <input
                        type="radio"
                        value="No"
                        name="reductionOfSleepiness"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      Partially
                      <input
                        type="radio"
                        value="Partially"
                        name="reductionOfSleepiness"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="tirednessGettingWorse"
              label="2a. If not fully improved, is your tiredness getting worse?"
              rules={[
                {
                  required: true,
                  message: "Please choose one option",
                },
              ]}
              style={{ marginBottom: "10px" }}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <div>
                    <label className="container">
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        name="tirednessGettingWorse"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      No
                      <input
                        type="radio"
                        value="No"
                        name="tirednessGettingWorse"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "10px 10px 1px 10px",
              marginBottom: "25px",

              borderRadius: "13px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontWeight: "normal", color: "#0572FD" }}>
                Epworth Score
              </h1>
            </div>
            <p style={{ fontWeight: "normal", color: "#0572FD" }}>
              How likely are you to doze off or fall asleep in the following
              situations, in contrast to feeling just tired? This refers to your
              usual way of life in recent times. Even if you haven't done some
              of these things recently try to work out how they would have
              affected you. Use the following scale to choose the most
              appropriate number for each situation:
            </p>
            <br />
            <ul style={{ fontWeight: "normal", color: "#0572FD" }}>
              <li>0 - would never doze</li>
              <li>1 - slight chance of dozing</li>
              <li>2 - moderate chance of dozing</li>
              <li>3 - high chance of dozing</li>
            </ul>
            <Form.Item
              name="sittingAndReading"
              label="Sitting and Reading"
              rules={[
                {
                  required: true,
                  message: "Please choose one option",
                },
              ]}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <div>
                    <label className="container">
                      0
                      <input type="radio" value={0} name="sittingAndReading" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      1
                      <input type="radio" value={1} name="sittingAndReading" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      2
                      <input type="radio" value={2} name="sittingAndReading" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      3
                      <input type="radio" value={3} name="sittingAndReading" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="sittingInactive"
              label="Sitting Inactive"
              rules={[
                {
                  required: true,
                  message: "Please choose one option",
                },
              ]}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <div>
                    <label className="container">
                      0
                      <input type="radio" value={0} name="sittingInactive" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      1
                      <input type="radio" value={1} name="sittingInactive" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      2
                      <input type="radio" value={2} name="sittingInactive" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      3
                      <input type="radio" value={3} name="sittingInactive" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="passengerInVehicle"
              label="Passenger in vehicle"
              rules={[
                {
                  required: true,
                  message: "Please choose one option",
                },
              ]}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <div>
                    <label className="container">
                      0
                      <input type="radio" value={0} name="passengerInVehicle" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      1
                      <input type="radio" value={1} name="passengerInVehicle" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      2
                      <input type="radio" value={2} name="passengerInVehicle" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      3
                      <input type="radio" value={3} name="passengerInVehicle" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="lyingDown"
              label="Lying Down"
              rules={[
                {
                  required: true,
                  message: "Please choose one option",
                },
              ]}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <div>
                    <label className="container">
                      0
                      <input type="radio" value={0} name="lyingDown" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      1
                      <input type="radio" value={1} name="lyingDown" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      2
                      <input type="radio" value={2} name="lyingDown" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      3
                      <input type="radio" value={3} name="lyingDown" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="sittingAndTalking"
              label="Sitting and talking"
              rules={[
                {
                  required: true,
                  message: "Please choose one option",
                },
              ]}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <div>
                    <label className="container">
                      0
                      <input type="radio" value={0} name="sittingAndTalking" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      1
                      <input type="radio" value={1} name="sittingAndTalking" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      2
                      <input type="radio" value={2} name="sittingAndTalking" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      3
                      <input type="radio" value={3} name="sittingAndTalking" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="sittingAfterLunch"
              label="Sitting after lunch"
              rules={[
                {
                  required: true,
                  message: "Please choose one option",
                },
              ]}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <div>
                    <label className="container">
                      0
                      <input type="radio" value={0} name="sittingAfterLunch" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      1
                      <input type="radio" value={1} name="sittingAfterLunch" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      2
                      <input type="radio" value={2} name="sittingAfterLunch" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      3
                      <input type="radio" value={3} name="sittingAfterLunch" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="sittingInCar"
              label="Sitting in car"
              rules={[
                {
                  required: true,
                  message: "Please choose one option",
                },
              ]}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <div>
                    <label className="container">
                      0
                      <input type="radio" value={0} name="sittingInCar" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      1
                      <input type="radio" value={1} name="sittingInCar" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      2
                      <input type="radio" value={2} name="sittingInCar" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      3
                      <input type="radio" value={3} name="sittingInCar" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="epworthTotalScore"
              label="Epworth Total Score"
              rules={[
                {
                  required: true,
                  message: "Please type a number",
                },
              ]}
            >
              <InputNumber min={1} max={24} placeHolder="0" />
            </Form.Item>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "10px 10px 1px 10px",
              marginBottom: "25px",

              borderRadius: "13px",
            }}
          >
            <Form.Item
              name="cpapIssuesThatPreventsUse"
              label="3. Do you have CPAP issues that prevents its use?"
              rules={[
                {
                  required: true,
                  message: "Please choose one option",
                },
              ]}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <div>
                    <label className="container">
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        name="cpapIssuesThatPreventsUse"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      No
                      <input
                        type="radio"
                        value="No"
                        name="cpapIssuesThatPreventsUse"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="maskIssuesThatPreventsItsUse"
              label="4. Do you have mask issues that prevents its use?"
              rules={[
                {
                  required: true,
                  message: "Please choose one option",
                },
              ]}
              style={{ marginBottom: "10px" }}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <div>
                    <label className="container">
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        name="maskIssuesThatPreventsItsUse"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      No
                      <input
                        type="radio"
                        value="No"
                        name="maskIssuesThatPreventsItsUse"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "10px 10px 1px 10px",
              marginBottom: "25px",

              borderRadius: "13px",
            }}
          >
            <Form.Item
              name="dateCPAPHourseChecked"
              label="Date CPAP hours checked"
              rules={[
                {
                  required: true,
                  message: "Please choose a date",
                },
              ]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item
              name="cpapRunHours"
              label="CPAP run hours"
              rules={[
                {
                  required: true,
                  message: "Please type a number",
                },
              ]}
            >
              <InputNumber min={1} placeHolder="0" />
            </Form.Item>

            <Form.Item
              name="cpapUsage"
              label="Average 30 days CPAP usage (hours)"
              rules={[
                {
                  required: true,
                  message: "Please type a number",
                },
              ]}
            >
              <InputNumber min={1} placeHolder="0" />
            </Form.Item>

            <Form.Item
              name="currentWeight"
              label="Current weight in KG"
              rules={[
                {
                  required: true,
                  message: "Please type a number",
                },
              ]}
            >
              <InputNumber min={1} placeHolder="0" />
            </Form.Item>

            <Form.Item
              name="furtherClinicalReview"
              label="Do you think your circumstances have changed significantly 
            requiring further clinical review e.g. significant weight loss or gain?"
              rules={[
                {
                  required: true,
                  message: "Please choose one option",
                },
              ]}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <div>
                    <label className="container">
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        name="furtherClinicalReview"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      No
                      <input
                        type="radio"
                        value="No"
                        name="furtherClinicalReview"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="doYouDrive"
              label="Do you drive?"
              rules={[
                {
                  required: true,
                  message: "Please choose one option",
                },
              ]}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <div>
                    <label className="container">
                      Yes
                      <input type="radio" value="Yes" name="doYouDrive" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      No
                      <input type="radio" value="No" name="doYouDrive" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="hgvOrPcvDrivingLicence"
              label="Do you hold a Group 2 driving licence (HGV/PCV)?"
              rules={[
                {
                  required: true,
                  message: "Please choose one option",
                },
              ]}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <div>
                    <label className="container">
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        name="hgvOrPcvDrivingLicence"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      No
                      <input
                        type="radio"
                        value="No"
                        name="hgvOrPcvDrivingLicence"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="sleepinessWhilistDrivingBeforeTreatment"
              label="If you drive, have you ever experienced any
             sleepiness whilst driving before starting treatment?"
              rules={[
                {
                  required: true,
                  message: "Please choose one option",
                },
              ]}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <div>
                    <label className="container">
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        name="sleepinessWhilistDrivingBeforeTreatment"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      No
                      <input
                        type="radio"
                        value="No"
                        name="sleepinessWhilistDrivingBeforeTreatment"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="dvlaInformedAboutDiagnosis"
              label="If yes, have you informed DVLA about your diagnosis?"
              rules={[
                {
                  required: false,
                  message: "Please choose one option",
                },
              ]}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <div>
                    <label className="container">
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        name="dvlaInformedAboutDiagnosis"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      No
                      <input
                        type="radio"
                        value="No"
                        name="dvlaInformedAboutDiagnosis"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="sleepyWhilstDrivingOnTreatment"
              label="Do you currently feel sleepy whilst driving?"
              rules={[
                {
                  required: true,
                  message: "Please choose one option",
                },
              ]}
              style={{ marginBottom: "10px" }}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <div>
                    <label className="container">
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        name="sleepyWhilstDrivingOnTreatment"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      No
                      <input
                        type="radio"
                        value="No"
                        name="sleepyWhilstDrivingOnTreatment"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "10px 10px 1px 10px",
              marginBottom: "25px",

              borderRadius: "13px",
            }}
          >
            <p style={{ fontWeight: "normal", color: "#0572FD" }}>
              For masks, tubing or any other CPAP related replacement, please
              call 01223 638890.
            </p>
            <br />
            <p style={{ fontWeight: "normal", color: "#0572FD" }}>
              Depending on your responses we may/may not need to contact you. If
              you don't hear from us you will be sent an appointment in 1 years'
              time.
            </p>

            <br />
            <p style={{ fontWeight: "normal", color: "#0572FD" }}>
              All Group 2 driving licence holders (HGV/PCV) will be contacted as
              they will need up to date sleep study and CPAP equipment check.
            </p>
            <br />

            <Form.Item
              name="additionalQuestions"
              label="In the event that you have any additional questions, please indicate
             if you would like us to contact you via telephone."
              rules={[
                {
                  required: true,
                  message: "Please choose one option",
                },
              ]}
              style={{ marginBottom: "10px" }}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <div>
                    <label className="container">
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        name="additionalQuestions"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <label className="container">
                      No
                      <input
                        type="radio"
                        value="No"
                        name="additionalQuestions"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </Radio.Group>
            </Form.Item>
          </div>
          <div style={{ textAlign: "center" }}>
            <Button
              type="primary"
              htmlType="submit"
              className="submit"
              style={{
                borderRadius: "10px",
                width: "100%",
                height: "50px",
                fontSize: "14px",
                backgroundColor: "rgb(224, 98, 63)",
                borderColor: "rgb(224, 98, 63)",
                marginBottom: "5px",
              }}
            >
              Submit Button
            </Button>
          </div>
          <div style={{ textAlign: "center" }}>
            <Button
              type="primary"
              className="submit"
              style={{
                borderRadius: "10px",
                width: "100%",
                height: "50px",
                fontSize: "14px",
                backgroundColor: "#0572FD",
                borderColor: "#0572FD",
              }}
            >
              Save for later
            </Button>
          </div>
        </Form>
      </SectionContainer>
    </>
  );
}
