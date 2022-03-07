const dayjs = require("dayjs");

const birthday = dayjs();

for (let i = 1; i < 14; i++) {
    console.log(birthday.subtract(i, "year").format("dddd"));
}
