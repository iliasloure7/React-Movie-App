import logo from '../../../assets/images/png/logo.png';

function Logo() {
  return (
    <div>
      <img src={logo} alt='logo' className='w-9' draggable={false} />
    </div>
  );
}

export default Logo;
