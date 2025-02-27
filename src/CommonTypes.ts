import { ServiceProvider } from "./Communication";

export interface StringList {
    StringList: string[];
}
export interface String {
    String: string;
}

export interface Bool {
    bool: string;
}


export enum RecStatusType {
    Pending = -15,
    Failing = -14,
    MissedFuture = -11,
    Tuning = -10,
    Failed = -9,
    TunerBusy = -8,
    LowDiskSpace = -7,
    Cancelled = -6,
    Missed = -5,
    Aborted = -4,
    Recorded = -3,
    Recording = -2,
    WillRecord = -1,
    Unknown = 0,
    DontRecord = 1,
    PreviousRecording = 2,
    CurrentRecording = 3,
    EarlierShowing = 4,
    TooManyRecordings = 5,
    NotListed = 6,
    Conflict = 7,
    LaterShowing = 8,
    Repeat = 9,
    Inactive = 10,
    NeverRecord = 11,
    Offline = 12
}

export interface RecordingInfo {
    RecordedId: number;
    Status: RecStatusType;
    RecordId: number;
    RecGroup: string;
    PlayGroup: string;
    StorageGroup: string;
}
export interface ChannelInfo {
    ChanId: number;
    ChanNum: string;
    CallSign: string;
    ChannelName: string;
}
export interface Program {
    Recording: RecordingInfo;
    Title: string;
    Channel: ChannelInfo;
    Description: string;
    Category: string;
    CatType: string;
    Season: string;
    Episode: string;
    Airdate: string;
    ProgramId: string;
}


export async function BoolPost(serviceProvider: ServiceProvider, api: string, service: string, params?: any, data?: any): Promise<void> {
    const resp = await serviceProvider.post<Bool>(api, service, params, data);
    if (resp.bool == 'false') {
        throw 'Failed api:' + api + ' service:' + service;
    }
}

export async function StringGet(serviceProvider: ServiceProvider, api: string, service: string, params?: any): Promise<string> {
    const resp = await serviceProvider.get<String>(api, service, params);
    return resp.String;
}