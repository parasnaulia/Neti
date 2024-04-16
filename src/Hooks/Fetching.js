import { options } from "../Constants/Constants";

const Fetching = async (link) => {
  const data = await fetch(link, options);
  const jsonData = await data.json();
  return jsonData;
};
export default Fetching;
