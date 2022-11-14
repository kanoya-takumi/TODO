import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").Value;
  alert(inputText);
};

document
  .getElementById("add-button") /*IDの取得 */
  .addEventListener("click", () => onClickAdd()); /*クリックしたときのイベント*/
