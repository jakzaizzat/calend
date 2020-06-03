const events = [
  {
    id: 1,
    title: "30 minutes consultation",
    active: true,
    link: "http://google.com"
  },
  {
    id: 2,
    title: "15 minutes consultation",
    active: false,
    link: "http://google.com"
  }
];

export const findAll = () => {
  return new Promise(resolve => setTimeout(() => resolve(events), 1500));
};
