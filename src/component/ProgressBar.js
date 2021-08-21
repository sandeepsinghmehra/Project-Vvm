import './ProgressBar.css';
const ProgressBar = (props) => {
  const { completed } = props;
  return (
    <>
    <div className="progressContainer">
        <div className="progress">
            <div className="progressFiller" style={{width: `${completed}%`}}></div>
            <div style={{color: '#fff', textAlign: 'center', padding: '10px'}}>{completed}%</div>
        </div>
    </div>   
    </>
  );
  
};

export default ProgressBar;