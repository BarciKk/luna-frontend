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
};
export type { ErrorInfo, GenericResponseType };
