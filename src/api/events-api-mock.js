const events = [
  {
    id: "b6516cab-77fe-4f83-8464-fab12a201b72",
    title: "30 minutes consultation",
    description: "Lorem ipsum lorem ipsum",
    active: true,
    link: "http://google.com",
    duration: 30,
    days: ["Monday, Tuesday"],
    timeStart: "09:00 A.M",
    timeEnd: "03:00 P.M"
  },
  {
    id: "5a13c83f-079a-44ec-ae22-ae8db461c11b",
    title: "15 minutes consultation",
    description: "Lorem ipsum lorem ipsum",
    active: true,
    link: "http://google.com",
    duration: 30,
    days: ["Monday, Tuesday"],
    timeStart: "09:00 A.M",
    timeEnd: "03:00 P.M"
  }
];

export const findAll = () => {
  return new Promise(resolve => setTimeout(() => resolve(events), 1500));
};

export function find(id) {
  const event = events.find(event => event.id === id);
  return new Promise(resolve => setTimeout(() => resolve(event), 1500));
}