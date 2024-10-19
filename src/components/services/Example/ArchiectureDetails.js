const ArchitectureDetails = ({ architecture,onBack }) => {
    return (
      <div>
        <h3>{architecture} Details</h3>


        <button className="btn btn-primary" onClick={onBack}>
        Back
      </button>
      </div>
    );
  };

  export default ArchitectureDetails;
  