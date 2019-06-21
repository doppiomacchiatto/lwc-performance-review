import { questions } from 'data/questions';
import { reviews } from 'data/reviews';

export function getReview(searchKey) {
    if (!searchKey || searchKey.length === 0) {
        return;
    }
    const results = reviews.filter(item => item.Id === searchKey);
    // eslint-disable-next-line consistent-return
    return results;
}

export function getQuestion(searchKey) {
    if (!searchKey || searchKey.length === 0) {
        return;
    }
    const results = questions.filter(question => question.Id === searchKey);
    // eslint-disable-next-line consistent-return
    return results;
}
