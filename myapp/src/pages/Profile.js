import { useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeVisible } from "../store/profile/action";

const Profile = () => {
    const {showName, name} = useSelector((state)=>state);
    const dispatch = useDispatch();

    const setShowName= useCallback( () => {
        dispatch(changeVisible);
    }, [dispatch]);

    return (
        <div > 
            <h1>Профиль</h1> 
            <div className='profile_name'>
            <input 
                className= 'checkbox'
                type ='checkbox' 
                checked={showName} 
                value = {showName} 
                onChange={setShowName} 
            />
            <span> Показать имя? </span>
            </div>
            <blockquote className="blockquote">{showName && <h3>{name}</h3>}</blockquote>
        </div>
    );
};
export default Profile;