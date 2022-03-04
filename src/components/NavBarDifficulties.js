function NavBarDifficulties(props) {
  const btnHandler = () => {
    props.setDifficulty(props.count);
  };

  return <button onClick={btnHandler}>{props.text}</button>;
}

export default NavBarDifficulties;
