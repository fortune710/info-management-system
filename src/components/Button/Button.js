import './button.styles.scss';

const Button = ({ type, children, outline, color }) => {

    return(
        <button
            type={type}
            className={`${color === undefined? 'primary' : color} ${outline ? 'outline': 'fill'} btn`}
            >
                { children }
        </button>
    )
}

export default Button;