import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/TopicsSlice';

const options = {
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
    // extra reducers here

};

// thunk to quizz to the related topic
export const addQuizThunk = quiz => {
    const { quizId, name, topicId, cardIds } = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(
            addQuizId({ 
                quizId: quizId, 
                topicId: topicId } ));
    }
};


export const quizzesSlice = createSlice(options);

// selector
export const selectQuizzes = state => state.quizzes.quizzes;
// actions + reducers
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;