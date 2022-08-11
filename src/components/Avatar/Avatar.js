import './avatar.styles.scss';

const Avatar = ({ src, name }) => (
    <div title={name} className="avatar" data-src={src}/>
)

export default Avatar;