type ErrorInfo = {
  response?: {
    data: {
      message: string;
      error: string;
    };
  };
};

type GenericResponseType = {
  message: string;
  success: boolean;
};
export type { ErrorInfo, GenericResponseType };
