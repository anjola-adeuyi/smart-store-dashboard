import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'></div>
        <input type='text' placeholder='Search...' />
        <SearchOutlinedIcon />
      </div>
      <div className='items'>
        <div className='item'></div>
      </div>
    </div>
  );
};

export default Navbar;
