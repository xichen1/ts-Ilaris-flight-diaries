import diaries from "../../data/diaries";
import {DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry} from "../types";

const getEntries = (): Array<DiaryEntry> => {
    return diaries;
};

const getNonSensitiveEntries = (): Array<NonSensitiveDiaryEntry> => {
    return diaries.map(({id, date, weather, visibility}) => ({
        id,
        date,
        weather,
        visibility,
    }));
};

const findById = (id: number): DiaryEntry | undefined => {
    return diaries.find(d => d.id === id);
};

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {

    const newDiaryEntry = {
        ...entry,
        id: Math.max(...diaries.map(d => d.id)) + 1
    }

    diaries.push(newDiaryEntry);
    return newDiaryEntry;
};

export default {
    getEntries,
    addDiary,
    getNonSensitiveEntries,
    findById
};