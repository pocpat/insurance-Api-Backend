export interface ValidationResultModel {
  valid: boolean;
  modelname?: string | (string & number);
  message?: string;
}

export interface ValidationResultYear {
  valid: boolean;
  year: number;
  message?: string;
}

export interface CarInfo {
  model: string;
  year: number;
  valid: boolean;
}
export interface ValidationResult {
  valid: boolean;
  year?: number;
  message?: string;
}

export interface QueryParams {
  model?: string;
  year?: number;
}

export interface CarInfoElement {
  model: string;
  year: number;
}
