import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <div className='logo'>Smart Store</div>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <li>Dashboard</li>
          <li>Dashboard</li>
          <li>Dashboard</li>
          <li>Dashboard</li>
        </ul>
      </div>
      <div className='bottom'>color options</div>
    </div>
  );
};

export default Sidebar;
