export interface Answer {
    id: string;
    content: string;
}

export interface QuestionProps {
    num: number;

    content: string;
    validAnswerId: string;
    answers: Answer[];
    comment: string;

}