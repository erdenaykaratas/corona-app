import propTypes from 'prop-types';

const MenuItem = ({title, active, onClick}) => {
    return (
        <li>
            <a onClick={() => {
                onClick(title)
            }} className={`block cursor-pointer border-0 py-2 pr-4 pl-3 ${active ? `text-gray-400` : `text-gray-200`} hover:text-blue-400`}>
                {title}
            </a>
        </li>
    )
}

MenuItem.prototype = {
    title : propTypes.string,
    active : propTypes.bool,
    onClick : propTypes.func
}

MenuItem.defaultProps = {
    title : 'Corona stats',
    active : false,
    onClick : () => null
}

export default MenuItem