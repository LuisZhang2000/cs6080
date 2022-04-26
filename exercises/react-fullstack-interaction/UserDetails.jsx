import './UserDetails.css';

export default function UserDetails(props) {
    
    console.log(props.user);
    
    return (
        <div>
            <div>
                <a href={props.user.html_url}>{props.user.name}</a>
            </div>
            <img alt={`logo-${props.user.name}`} src={props.user.avatar_url}></img>
        </div>
    );
}