import {
  SettingsOutlined,
  ManageAccountsOutlined,
  CollectionsBookmarkOutlined,
  NotificationsOutlined,
  FavoriteBorderOutlined,
  CalendarMonthOutlined,
  AccountBalanceWalletOutlined,
  PaymentOutlined,
  AssignmentOutlined,
  ClassOutlined,
} from "@mui/icons-material";

import {
  EditProfile,
  Security,
  Notification,
  Wishlists,
  Courses,
  MyClasses,
} from "../components/profile/setting";

export const accountSettings = [
  {
    id: 1,
    title: "Classroom",
    icon: <ClassOutlined sx={{ color: "#5475EB" }} />,
  },
  {
    id: 2,
    title: "Edit Profile",
    icon: <SettingsOutlined sx={{ color: "#5475EB" }} />,
  },
  {
    id: 3,
    title: "Security",
    icon: <ManageAccountsOutlined sx={{ color: "#5475EB" }} />,
  },
  {
    id: 4,
    title: "Courses",
    icon: <CollectionsBookmarkOutlined sx={{ color: "#5475EB" }} />,
  },
  {
    id: 5,
    title: "Notifications",
    icon: <NotificationsOutlined sx={{ color: "#5475EB" }} />,
  },
  /* {
      id: 6,
      title: "Wishlists",
      icon: <FavoriteBorderOutlined sx={{ color: "#5475EB" }} />,
    }, */
];

export const mySubscriptions = [
  {
    id: 7,
    title: "My Subscriptions",
    icon: <CalendarMonthOutlined sx={{ color: "#5475EB" }} />,
  },
  {
    id: 8,
    title: "Billing info",
    icon: <AccountBalanceWalletOutlined sx={{ color: "#5475EB" }} />,
  },
  {
    id: 9,
    title: "Invoice",
    icon: <PaymentOutlined sx={{ color: "#5475EB" }} />,
  },
  {
    id: 10,
    title: "Payment",
    icon: <AssignmentOutlined sx={{ color: "#5475EB" }} />,
  },
];
export const displayComponents = (step) => {
  switch (step) {
    case 1:
      return <MyClasses />;
    case 2:
      return <EditProfile />;
    case 3:
      return <Security />;
    case 4:
      return <Courses />;
    case 5:
      return <Notification />;
    case 6:
      return <Wishlists />;
    default:
      return null;
  }
};
export const regions = [
  { regionName: "Yangon", regionId: 1 },
  { regionName: "Mandalay", regionId: 2 },
  { regionName: "Magway", regionId: 3 },
  { regionName: "Bago", regionId: 4 },
  { regionName: "Sagaing", regionId: 5 },
  { regionName: "Kayar", regionId: 6 },
  { regionName: "Mon", regionId: 7 },
  { regionName: "Shan", regionId: 8 },
  { regionName: "Kachin", regionId: 9 },
  { regionName: "Kayin", regionId: 10 },
  { regionName: "Rakhaing", regionId: 11 },
];

export const dummyTable = [
  {
    firstName: "Warren",
    lastName: "Morrow",
    email: "sokyt@mailinator.com",
    age: "36",
  },
  {
    firstName: "Gwendolyn",
    lastName: "Galloway",
    email: "weciz@mailinator.com",
    age: "76",
  },
  {
    firstName: "Astra",
    lastName: "Wyatt",
    email: "quvyn@mailinator.com",
    age: "57",
  },
  {
    firstName: "Jasmine",
    lastName: "Wong",
    email: "toxazoc@mailinator.com",
    age: "42",
  },
  {
    firstName: "Brooke",
    lastName: "Mcconnell",
    email: "vyry@mailinator.com",
    age: "56",
  },
  {
    firstName: "Christen",
    lastName: "Haney",
    email: "pagevolal@mailinator.com",
    age: "23",
  },
  {
    firstName: "Tate",
    lastName: "Vega",
    email: "dycubo@mailinator.com",
    age: "87",
  },
  {
    firstName: "Amber",
    lastName: "Brady",
    email: "vyconixy@mailinator.com",
    age: "78",
  },
  {
    firstName: "Philip",
    lastName: "Whitfield",
    email: "velyfi@mailinator.com",
    age: "22",
  },
  {
    firstName: "Kitra",
    lastName: "Hammond",
    email: "fiwiloqu@mailinator.com",
    age: "35",
  },
  {
    firstName: "Charity",
    lastName: "Mathews",
    email: "fubigonero@mailinator.com",
    age: "63",
  },
];
