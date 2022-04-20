import { Button, CircularProgress } from "@mui/material";
import { useCallback, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { selectGists, selectGistsError, selectGistsLoading } from "../store/gists/selectors";
import {getAllGists} from "../store/gists/actions"

const Gists = () => {
    const dispatch = useDispatch();
    const gists = useSelector(selectGists);
    const loading = useSelector(selectGistsLoading);
    const error = useSelector(selectGistsError);

    const requestGists = useCallback(async() => {
        dispatch(getAllGists());
    }, []);

    useEffect (() =>{
        requestGists();
    },[]);

    const renderGist = useCallback(
        (gist)=><li key={gist.id}>{gist.description || 'Без описания'}</li>, 
        []
    );

        if (loading){
            return<CircularProgress/>;
        }

        if (error) {
            return(
                <>
                    <h2>Ошибка</h2>
                    <Button onClick={requestGists}>Повторить</Button>
                </>
            )
        }

    return <ul>{gists.map(renderGist)}</ul>;
};

export default Gists;