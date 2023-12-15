export const testMenuItems = [
  {
    id: 1,
    name: "Burger",
    price: 5.99,
    description: "A delicious burger",
    image: "https://media.istockphoto.com/id/1141346679/photo/classic-cheeseburger-isolated-on-white.jpg?s=612x612&w=0&k=20&c=GC23o40q3jqcynN-RtS017yQEJDOja0khUUc2NhB3YQ="
  },
  {
    id: 2,
    name: "Pizza",
    price: 4.99,
    description: "A delicious pizza",
    image: "https://t4.ftcdn.net/jpg/00/18/66/99/360_F_18669964_Txz4BS0OErzj9v9DHM3N51d8yFVa85dR.jpg"
  }
];

export const testOrder = {
  id: 12345,
  name: "example",
  phone: "123-456-7890",
  address: "123 Main St",
  email: "example@email.com",
  items: [
    {
      item: {
        name: "Burger",
        id: 1,
        price: 5.99,
        description: "A delicious burger",
        image: "https://media.istockphoto.com/id/1141346679/photo/classic-cheeseburger-isolated-on-white.jpg?s=612x612&w=0&k=20&c=GC23o40q3jqcynN-RtS017yQEJDOja0khUUc2NhB3YQ="
      },
      quantity: 1
    }
  ]
};
