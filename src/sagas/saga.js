
import {delay} from 'redux-saga/effects';
import {takeLatest, put} from 'redux-saga/effects'


//async version of the ageUp action
function* ageUpAsync(){
    yield delay(4000)
    yield put({type:'AGE_UP_ASYNC', value:1})
}


//watch the age up action - whenever it gets triggered - call ageUPAsync function above
export function* watchAgeUp() {
    yield takeLatest('AGE_UP', ageUpAsync)
}