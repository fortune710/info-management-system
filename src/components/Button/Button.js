import './button.styles.scss';

const Button = ({ type, children, outline, color, onClick, ...otherProps }) => {

    return(
        <button
            {...otherProps}
            type={type}
            onClick={onClick}
            className={`${color === undefined? 'primary' : color} ${outline ? 'outline': 'fill'} btn`}
            >
                { children }
        </button>
    )
}

export default Button;