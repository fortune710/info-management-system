import './avatar.styles.scss';

const Avatar = ({ src, name, zIndex }) => (
    <div 
        title={name} 
        className="avatar"
        style={{
            backgroundImage: `url(${src})`,
            zIndex: zIndex
        }}
    />
)

export default Avatar;