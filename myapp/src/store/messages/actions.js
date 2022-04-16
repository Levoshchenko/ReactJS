import { AUTHOR } from "../../constants/common";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const ADD_MESSAGE_WITH_SAGA = 'MESSAGES::ADD_MESSAGE_WITH_SAGA';


export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload:{chatId, message}
});

export const addMessageWithSaga = (chatId, message) => ({
    type: ADD_MESSAGE_WITH_SAGA,
    payload:{chatId, message}
});

export const addMessageWithThunk = 
    (chatId, message) => (dispatch) => { //после dispatch еще нужно , getState здесь не используем, если напишу будет ошибка
    dispatch(addMessage(chatId, message));

    if (message.author !== AUTHOR.bot){
        const botMessage = {
            text: 'Здравствуйте! Чем могу помочь?',
            author: AUTHOR.bot
        };
        setTimeout (() => dispatch(addMessage(chatId, botMessage)), 1500);
    }
};