export interface Answer {
    id: string;
    content: string;
}
export interface Question {
    number: number;
    content: string;
    answers: Answer[];
    validAnswerId: string;
    comment: string;
}