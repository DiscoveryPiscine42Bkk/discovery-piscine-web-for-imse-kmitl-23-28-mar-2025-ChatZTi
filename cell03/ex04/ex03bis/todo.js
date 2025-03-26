let ft_list = document.getElementById("ft_list");

const create = () => {
  let txt = prompt("Please Enter TODO LIST:");
  if (txt && txt.trim() !== "") {
    const name = new Date().getTime();
    document.cookie = `${name}=${encodeURIComponent(txt)}; path=/`;
    addTodoToList(name, txt);
  }
};


const addTodoToList = (id, text) => {
  let node = document.createElement("div");
  node.onclick = () => {
    const check = confirm("Do you want to delete?");
    if (check) {
      node.remove();
      document.cookie = `${id}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    }
  };
  node.innerHTML = text;
  ft_list.prepend(node);
};


const loadTodos = () => {
  const cookies = document.cookie.split(";").map((c) => c.trim());
  cookies.forEach((cookie) => {
    const [id, value] = cookie.split("=");
    if (id && value) {
      addTodoToList(id, decodeURIComponent(value));
    }
  });
};


loadTodos();
