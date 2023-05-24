import { useState, useEffect } from "react";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;
import "./DateInput.css";

const DateInput = ({ getDates }) => {
  const dateFormat = "YYYY/MM/DD";
  const [dates, setDates] = useState(null);

  useEffect(() => {
    getDates(dates);
  }, [dates, getDates]);

  const getDatesValues = (dateValues, dateStrings) => {
    setDates(dateStrings);
  };
  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        className="dateInput"
        onChange={getDatesValues}
        format={dateFormat}
      />
    </Space>
  );
};

export default DateInput;
