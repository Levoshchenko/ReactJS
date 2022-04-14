import { TextField } from "@mui/material";
import { useCallback, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeVisible, updateName } from "../store/profile/action";
import { Button } from '@mui/material';

const Profile = () => {
    const {showName, name} = useSelector((state)=> state.profile);
    const dispatch = useDispatch();
    const [value, setValue] = useState(name);


    const setShowName= useCallback( () => {
        dispatch(changeVisible);
    }, [dispatch]);

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const saveName = () => {
        dispatch(updateName(value));
    };
    return (
        <div > 
            <h1>Профиль</h1> 
            <div className='profile_name'>
            <Button onClick={setShowName}> Показать имя
            </Button>
            <blockquote>{showName && <h3>Текущее имя: {name}</h3>}</blockquote>
            <TextField
                name = 'name'
                label = 'name'
                placeholder='Введите Ваше имя'
                value = {value}
                onChange = {handleInput}
            />
            <Button className="button" onClick={saveName}>Сохранить</Button>
            </div>
        </div>
    );
};
export default Profile;