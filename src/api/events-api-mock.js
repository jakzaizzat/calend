const events = [
  {
    id: "b6516cab-77fe-4f83-8464-fab12a201b72",
    title: "Personal consultation",
    description: "Lorem ipsum lorem ipsum",
    active: true,
    link: "http://google.com",
    duration: 15,
    days: ["Monday, Tuesday"],
    timeStart: "09:00 A.M",
    timeEnd: "03:00 P.M",
    submissions: [
      {
        id: 1,
        name: "Aizzat",
        email: "jakzaizzat@gmail.com",
        date: "Tue Jun 09 2020 11:41:48 GMT+0800 (Malaysia Time)",
        timeslot: "2016-08-10 18:30",
      },
      {
        id: 2,
        name: "David",
        email: "david@gmail.com",
        date: "Tue Jun 09 2020 11:41:48 GMT+0800 (Malaysia Time)",
        timeslot: "2016-08-10 18:30",
      },
    ],
  },
  {
    id: "5a13c83f-079a-44ec-ae22-ae8db461c11b",
    title: "Brand Review",
    description: "Lorem ipsum lorem ipsum",
    active: false,
    link: "http://google.com",
    duration: 30,
    days: ["Monday, Tuesday"],
    timeStart: "09:00 A.M",
    timeEnd: "03:00 P.M",
  },
];

export const findAll = () => {
  return new Promise((resolve) => setTimeout(() => resolve(events), 1000));
};

export function find(id) {
  const event = events.find((event) => event.id === id);
  return new Promise((resolve) => setTimeout(() => resolve(event), 0));
}
