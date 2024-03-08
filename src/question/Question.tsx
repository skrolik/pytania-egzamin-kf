import {QuestionProps} from "./types";

export const Question = (props: QuestionProps) => {
    const {num, content, comment, validAnswerId, answers} = props;


    return (
        <div>
            <title><span>${num}</span> ${content}</title>
            <fieldset>
                <input type={"radio"} />

            </fieldset>




        </div>
    );
}