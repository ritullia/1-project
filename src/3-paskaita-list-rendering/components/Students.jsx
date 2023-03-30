import "./style.css";

export const Students = ({ student }) => {
  const { image, name, surname, age, Id, team } = student;

  return (
    <>
      <div>
        <li>
          <div className="student-card-div">
            <img src={image} alt={name} />{" "}
            <p>
              {"  "}
              {name} {surname}, age: {age}, grupė: {team}
            </p>
          </div>
        </li>
      </div>
    </>
  );
};
