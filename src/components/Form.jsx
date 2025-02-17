import RegularButton from "./RegularButton";

export default function Form({ handleSubmit }) {
  return (
    <form className="wrapper" role="form" onSubmit={handleSubmit}>
      <RegularButton>Start Game</RegularButton>
    </form>
  );
}
