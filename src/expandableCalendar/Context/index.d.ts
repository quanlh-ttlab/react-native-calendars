import { UpdateSources } from '../commons';
export interface CalendarContextProps {
    date: string;
    prevDate: string;
    setDate: (date: string, source: UpdateSources) => void;
    updateSource: UpdateSources;
    setDisabled: (disable: boolean) => void;
    numberOfDays?: number;
    timelineLeftInset?: number;
}
declare const CalendarContext: any;
export default CalendarContext;
