import { register, ValueChangedEvent } from '@lwc/wire-service';
import { questions } from 'data/questions';

export default function getQuestions() {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
        resolve();
    });
}

register(getQuestions, eventTarget => {
    eventTarget.addEventListener('connect', () => {
        eventTarget.dispatchEvent(new ValueChangedEvent({ data: questions }));
    });
});
