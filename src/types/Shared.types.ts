type ErrorInfo = {
  response?: {
    data: {
      message: string;
      error: string;
    };
  };
};
type ErrorInfoWithoutMessage = {
  response: {
    data: string;
  };
};

type GenericResponseType = {
  message: string;
  success: boolean;
};
export type { ErrorInfo, GenericResponseType, ErrorInfoWithoutMessage };
