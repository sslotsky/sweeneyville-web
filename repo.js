import uuidv4 from "uuid/v4";

const script = `
walk up
shoot right
`;

const scene = {
  title: "Never talk to me or my ninja again",
  bots: [
    {
      id: uuidv4(),
      avatar: "ninja",
      name: "ninja-0",
      x: 100,
      y: 150,
      script
    }
  ]
};

let scenes = [scene];

export const fetch = () => Promise.resolve(scenes);
