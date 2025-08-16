export let tasks = [ // данные о задачах получим от сервера
  // { name: "Купить чай" },
  // { name: "Заварить чай" },
  // { name: "Выпить чай" },
];

export const updateTasks = (newTasks) => {
  // console.log(newTasks);
  tasks = newTasks;
}