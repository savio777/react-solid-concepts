import { apiGetListProductsMock } from "../apiProductsMock";

const getAllProducts = async () => {
  return (await apiGetListProductsMock()).data;
};

export default getAllProducts;
