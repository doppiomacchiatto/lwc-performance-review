import { LightningElement, api, track } from 'lwc';
import { getReview, getQuestion } from 'data/simpleProvider';

export default class Review extends LightningElement {
    @api reviewId;
    @track review;

    connectedCallback() {
        this.review = getReview(this.reviewId)[0];
        this.review.Criteria.forEach(c => {
            const questionId = c.Question;
            const question = getQuestion(questionId)[0];
            c.QuestionText = question.QuestionText;
            c.QuarterRatings.forEach(q => {
                q.radioGroup =
                    'criteria_' + c.Id + '_quarterRating_' + q.Quarter;
                if (q.Answer === 'true') {
                    q.checkedYes = 'true';
                    q.checkedNo = 'false';
                } else if (q.Answer === 'false') {
                    q.checkedNo = 'true';
                    q.checkedYes = 'false;';
                }
            });
            const overallRating = c.QuarterRatings.reduce(
                (ratingSoFar, rating) => {
                    return ratingSoFar && rating.Answer === 'true';
                }
            );
            c.overallRating = overallRating ? 'Pass' : 'Fail';
            c.overallStyle =
                (overallRating ? 'pass' : 'fail') + ' col overall-rating-col';
        });
    }
}
