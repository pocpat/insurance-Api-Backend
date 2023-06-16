export interface calculateRiskRating {
  (claimHistory: string): string | number;
}

export interface validateClaimHistory {
  (claimHistory: string): boolean;
}
