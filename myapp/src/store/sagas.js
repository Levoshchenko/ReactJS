import {takeEvery, put, delay} from 'redux-saga/effects';
import { addMessage, ADD_MESSAGE_WITH_SAGA } from './messages/actions';
import {AUTHOR} from '../constants/common';



function* onAddMessageWithSaga(action) {
    yield put(addMessage(action.payload.chatId, action.payload.message))
    if (action.payload.message.author !== AUTHOR.bot){
        const botMessage = {
            text: 'Здравствуйте! Чем могу помочь?',
            author: AUTHOR.bot
        };
    yield delay(2000);
    yield put(addMessage(action.payload.chatId, botMessage));
    }
}

function* mySaga () {
    yield takeEvery(ADD_MESSAGE_WITH_SAGA, onAddMessageWithSaga);
};

export default mySaga;