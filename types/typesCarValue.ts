export interface ValidationResultModel {
  valid: boolean;
  modelname?: string | (string & number);
  message?: string;
}

export interface ValidationResultYear {
  valid: boolean;
  year: number;
}
