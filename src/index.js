var patientData = [
  { firstName: "Phantom", lastName: "Watcher", weight: 150, height: 70 },
  { firstName: "Arrogant", lastName: "Ambassador", weight: 132, height: 65 },
  { firstName: "Insane", lastName: "Contender", weight: 163, height: 62 },
  { firstName: "Vulgar", lastName: "Demon", weight: 140, height: 71 },
  { firstName: "Bittah", lastName: "Assassin", weight: 150, height: 66 },
  { firstName: "Mad", lastName: "Mastermind", weight: 250, height: 82 }
]

var PatientSelectionSideBar = React.createClass({
  render: function() {
    return (
      <div>
        <h4>Patients <small>(sorted alphabetically)</small></h4>
        <ul className="nav nav-pills nav-stacked">
          {this.props.patients.map(function(patient) {
            return <PatientButton patient={patient}/>;
          })}
        </ul>
      </div>
    );
  }
});

var PatientButton = React.createClass({
  render: function() {
    return (
      <li className="nav-item">
        <a href="#" className="nav-link">
          {this.props.patient.lastName}, {this.props.patient.firstName}
        </a>
      </li>
    );
  }
});

React.render(
        <PatientSelectionSideBar patients={patientData} />,
        document.getElementById('patientList')
      );
