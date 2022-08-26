export interface ICalenderMarking {
    date: Date;
    type: 'event' | 'holiday';
    label: string;
    descriptions: string;
}

export interface ILeaveTypeWithCount {
    label: string;
    noOfDays: number;
    descriptions: string;
}
