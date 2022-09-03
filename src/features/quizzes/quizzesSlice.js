import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/topicsSlice';

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { quizId, name, topicId, cardIds } = action.payload;
            state.quizzes[quizId] = {
                id: quizId,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            };
        }
    }
})

export const addQuizThunk = (payload) => {
    return (dispatch) => {
       dispatch(addQuiz(payload));
       dispatch(addQuizId({ quizId: payload.quizId, topicId: payload.topicId }))
    }
};


export const selectQuiz = state => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer