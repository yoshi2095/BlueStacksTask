import thumb1 from "../assets/images/Page 1/Dashboard/Row/Thumb/Bitmap.png";
import thumb2 from "../assets/images/Page 1/Dashboard/Row Copy 2-Row/Thumb/Bitmap.png";
import thumb3 from "../assets/images/Page 1/Dashboard/Row Copy 3-Row/Thumb/Bitmap.png";
import thumb4 from "../assets/images/Page 1/Dashboard/Row Copy 4-Row/Thumb/Bitmap.png";

export const response = {
  data: [
    {
      id: "one",
      name: "Test Whatsapp",
      region: "US",
      createdOn: 1559807714999,
      price: {
        monthly: "$ 100",
        halfYearly: "$ 500",
        yearly: "$ 900"
      },
      csv: "Some CSV link for Whatsapp",
      report: "Some report link for Whatsapp",
      image_url: thumb1
    },
    {
      id: "two",
      name: "Super Jewels Quest",
      region: "CA, FR",
      createdOn: 1559806715124,
      price: {
        monthly: "$ 200",
        halfYearly: "$ 1000",
        yearly: "$ 1800"
      },
      csv: "Some CSV link for Super Jewels Quest",
      report: "Some report link for Super Jewels Ques",
      image_url: thumb2
    },
    {
      id: "three",
      name: "Mole Slayer",
      region: "FR",
      createdOn: 1559806711124,
      price: {
        monthly: "$ 300",
        halfYearly: "$ 1500",
        yearly: "$ 2700"
      },
      csv: "Some CSV link for Mole Slayer",
      report: "Some report link for Mole Slayer",
      image_url: thumb3
    },
    {
      id: "four",
      name: "Mancala Mix",
      region: "JP",
      createdOn: 1559806680124,
      price: {
        monthly: "$ 400",
        halfYearly: "$ 2000",
        yearly: "$ 3600"
      },
      csv: "Some CSV link for Mancala Mix",
      report: "Some report link for Mancala Mix",
      image_url: thumb4
    }
  ]
};
