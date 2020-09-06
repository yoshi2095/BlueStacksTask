import moment from "moment";

export const getDateString = date => {
  return moment(date).format("MMM YYYY, DD");
};

export const getTimeDifference = time => {
  return moment(time).fromNow();
};
