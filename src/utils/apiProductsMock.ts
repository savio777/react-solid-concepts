const apiGetListProductsMock = (): Promise<{ data: IProduct[] }> =>
  new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            id: "86c6481a-56d5-49e4-8ce4-8264ce8a4a0d",
            title: "product title",
          },
          {
            id: "d3420123-4728-48f3-a312-62a8f57aab10",
            title: "product title",
          },
          {
            id: "bc92f777-4aa1-4f0a-a95a-f8255b854227",
            title: "product title",
          },
        ],
      });
    }, 2000);
  });

export { apiGetListProductsMock };
