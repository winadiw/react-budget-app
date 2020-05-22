import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from "moment";
import { SingleDatePicker } from 'react-dates';

test("should render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[2]} />);

  expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
  const value = "New description";
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find("input").at(0).simulate("change", {
    target: {
      value,
    },
  });
  expect(wrapper.state("description")).toBe(value);
});

test("should set description on note change", () => {
  const value = "New note value";
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find("textarea").simulate("change", {
    target: {
      value,
    },
  });
  expect(wrapper.state("note")).toBe(value);
});

test("should set amount if valid input", () => {
  const value = "23.50";
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find("input").at(1).simulate("change", {
    target: {
      value,
    },
  });
  expect(wrapper.state("amount")).toBe(value);
});

test("should not set amount if invalid amount input", () => {
  const value = "12.122";
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find("input").at(1).simulate("change", {
    target: {
      value,
    },
  });
  expect(wrapper.state("amount")).toBe("");
});

test("should call valid onSubmit prop for valid form submission", () => {
  const onSubmitSpy = jest.fn();

  const wrapper = shallow(
    <ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy} />
  );

  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });

  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenCalledTimes(1);
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[1].description,
    note: expenses[1].note,
    createdAt: expenses[1].createdAt,
    amount: expenses[1].amount,
  });
});

test("should set new date onDateChange", () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find(SingleDatePicker).prop('onDateChange')(now);

  expect(wrapper.state("createdAt")).toEqual(now);
})


test("should set focused onFocusChange", () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find(SingleDatePicker).prop('onFocusChange')({focused});

  expect(wrapper.state("calendarFocused")).toBe(focused);
})