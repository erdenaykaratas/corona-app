import propTypes from 'prop-types';

const Logo = ({logo,title}) => {
    return (
        <div className='flex items-center'>
            <img src={logo} alt='Virus' className='mr-3 h-6' />
            <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>
                {title}
            </span>
        </div>
    )
}

Logo.prototype = {
    title : propTypes.string,
    logo : propTypes.string
}

Logo.defaultProps = {
    title : 'Covid Stats',
    logo : 'https://www.un.org/sites/un2.un.org/files/2020/04/covid-19.svg'
}

export default Logo;