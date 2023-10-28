function Options({ question }) {
  return (
    <>
      {question.options.map((option) => (
        <button className="btn btn-option" key={option}>
          {option}
        </button>
      ))}
    </>
  );
}

export default Options;
