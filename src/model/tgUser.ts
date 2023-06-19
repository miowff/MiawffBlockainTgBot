export interface TgUserModel {
  currentState: string;
  userId: number;
  isSteamConnected: boolean;
  steamId: string | null;
  matchHistoryCode: string | null;
  lastCompetitiveMatchCode: string | null;
  steamUrl: string | null;
}
