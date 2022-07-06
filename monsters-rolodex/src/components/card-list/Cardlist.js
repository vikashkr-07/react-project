import "./card-list.css";
import Card from "../card/Card";

const Cardlist = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { id, name, email } = monster;
        return <Card id={id} name={name} email={email} />;
      })}
    </div>
  );
};
export default Cardlist;
