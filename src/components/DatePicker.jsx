import DatePicker from "react-datepicker";
import React, { useState } from "react";

function DatePick() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  return (
    <div className="w-64 -z-10 ">
      <div className="flex gap-1 mb-3">
        <p className="text-xs flex items-center border-l-2 border-primary px-2">
          Alış Tarihi
        </p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          minDate={new Date()}
          startDate={startDate}
          endDate={endDate}
          locale="tr-TR"
          dateFormat="dd MMMM"
          monthsShown={2}
          showPopperArrow={false}
          className=" px-2 h-12 text-xl cursor-pointer w-28 bg-modalBlack text-white font-semibold text-center"
        />

        <DatePicker
          selected={startTime}
          onChange={(date) => setStartTime(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={60}
          dateFormat="HH:mm"
          timeFormat="HH:mm"
          placeholderText="09:00"
          className="px-2 h-12 text-2xl cursor-pointer w-20 bg-modalBlack text-white font-semibold text-center"
        />
      </div>

      <div className="flex gap-1 ">
        <p className="text-xs flex items-center border-l-2 border-primary px-2">
          İade Tarihi
        </p>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          locale="tr-TR"
          showPopperArrow={false}
          monthsShown={2}
          dateFormat="dd MMMM"
          wrapperClassName="datePicker"
          className=" px-2 h-12 text-xl cursor-pointer w-28 bg-modalBlack text-white font-semibold text-center"
        />

        <DatePicker
          selected={endTime}
          onChange={(date) => setEndTime(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={60}
          timeCaption="Time"
          dateFormat="HH:mm"
          timeFormat="HH:mm"
          placeholderText="09:00"
          className="px-2 h-12 text-2xl cursor-pointer w-20 bg-modalBlack text-white font-semibold text-center "
        />
      </div>
    </div>
  );
}

export default DatePick;
