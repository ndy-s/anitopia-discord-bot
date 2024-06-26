import { Schema, model } from "mongoose";
import { IWeeklySeriesModel } from "../../discord-bot/src/interfaces";

const weeklySeriesSchema = new Schema({
    seriesName: {
        type: String,
        required: true
    },
    endsDate: {
        type: Date,
        required: true
    },
});

export const WeeklySeriesModel = model<IWeeklySeriesModel>('WeeklySeries', weeklySeriesSchema);