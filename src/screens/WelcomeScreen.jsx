// Project files
import Image from "../assets/images/urban-shopping.png";
import ButtonCreateItem from "../components/ButtonCreateItem";

export default function WelcomeScreen() {
  return (
    <div id="welcome-screen">
      <img src={Image} alt="Woman getting out of a store with shopping bags" />
      <h1>EIKA's shopping list</h1>
      <p>
        Welcome to EIKA’s shopping list. Here you will be able to create a todo
        list with for the furniture you want to buy.
      </p>
      <p>
        To get started press the Add new item button and a popup will ask you
        the name and the price of the item you want to add. You can also and an
        image after the item is added by touching the camera icon.
      </p>

      {/* Primary controls */}
      <ButtonCreateItem />
    </div>
  );
}
