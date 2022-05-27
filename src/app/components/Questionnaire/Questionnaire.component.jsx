import React from "react";

// import { Form, Button, FormControl } from "react-bootstrap";
import AddImage from "../AddImage/AddImage.component";
import {
  Switch,
  Slider,
  Select,
  Form,
  Input,
  Radio,
  Checkbox,
  Row,
  Col,
  Button,
} from "antd";
import { SectionContainer } from "./Questionnaire.elements";

export default function Questionnaire() {
  const { Option } = Select;

  return (
    <>
      <SectionContainer data-testid={"questionnaire"}>
        <Form style={{ width: "100%", padding: "2rem", marginBottom: "5rem" }}>
          <Form.Item
            name="nickname"
            label="Nickname"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="intro"
            label="Intro"
            rules={[
              {
                required: true,
                message: "Please input Intro",
              },
            ]}
          >
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>
          <Form.Item
            name="radio"
            label="Radio"
            rules={[
              {
                required: true,
                message: "Please input radio",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={1}>Option 1</Radio>
              <Radio value={2}>Option 2</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="checkbox"
            label="Checkbox"
            rules={[
              {
                required: true,
                message: "Please input checkbox",
              },
            ]}
          >
            <Checkbox.Group style={{ width: "100%" }}>
              <Row>
                <Col span={8}>
                  <Checkbox value="A">A</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="B">B</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="C">C</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="D">D</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="E">E</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item name="switch" label="Switch">
            <Switch />
          </Form.Item>
          <Form.Item name="slider" label="Slider">
            <Slider />
          </Form.Item>
          <Form.Item name="select" label="Select an option">
            <Select
              showSearch
              placeholder="Select an option"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="option1">Option 1</Option>
              <Option value="option2">Option 2</Option>
              <Option value="option3">Option 3</Option>
            </Select>
          </Form.Item>

          <Form.Item name="addImage" label="Add images">
            <AddImage />
          </Form.Item>
          <div style={{ textAlign: "center" }}>
            <Button type="primary" htmlTpe="submit">
              Submit Button
            </Button>
          </div>
        </Form>
      </SectionContainer>
    </>
  );
}
