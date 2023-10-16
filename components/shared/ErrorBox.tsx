import { ServerError, ServerParseError } from "@apollo/client";
import React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { getTheme } from "../layout/Theme";

type Props = {
  errors?: ErrorsType | string | any;
}

export type ErrorsType = {
  message: string;
  // graphQLErrors: GraphQLErrors;
  clientErrors: ReadonlyArray<Error>;
  networkError: Error | ServerParseError | ServerError | null;
  extensions?: any;
}


type ValidationErrorsType = {
  validation: {
    [name: string]: any[];
  }
}
const theme = getTheme()
const ValidationErrors = ({ validation }: ValidationErrorsType) => {
  const renderErrors = Object.entries(validation).map(([key, value]) => {
    const renderValue = value?.map(o => (
      <Typography lineHeight={1.4} color={theme.palette.error.main} variant="caption" key={key}>{o}</Typography>
    ))

    return (
      <Typography lineHeight={1.4} color={theme.palette.error.main} variant="caption" key={key}>{renderValue}</Typography>
    )
  })

  return (
    <>
      {renderErrors}
    </>
  )
}

const ErrorBox = ({ errors }: Props) => {
  if (typeof errors === 'string') {
    return (<Typography lineHeight={1.4} color={theme.palette.error.main} variant="caption">{errors}</Typography>)
  }

  const renderGraphQLErrors = errors?.graphQLErrors?.map((error: any) => {
    return (
      <Typography lineHeight={1.4} color={theme.palette.error.main} variant="caption" key={error.message}>
        {!error.extensions?.validation && <Typography lineHeight={1.4} color={theme.palette.error.main} variant="caption">{error.message}</Typography>}
        {error.extensions?.validation && <ValidationErrors validation={error.extensions?.validation} />}
      </Typography>
    )
  })

  const serverError = (errors?.networkError as ServerError)?.result

  const renderNetworkError = !errors?.networkError ? null :
    (<Typography lineHeight={1.4} color={theme.palette.error.main} variant="caption">
      <Typography lineHeight={1.4} color={theme.palette.error.main} variant="caption">{errors?.networkError.name}: {errors.networkError.message}</Typography>
      <Typography lineHeight={1.4} color={theme.palette.error.main} variant="caption">{`${serverError}`}</Typography>
    </Typography>)

  return (
    <Stack sx={{ mt: 1 }}>
      {renderNetworkError && <Typography lineHeight={1.4} color={theme.palette.error.main} variant="caption">{renderNetworkError}</Typography>}

      {errors?.message && !errors?.graphQLErrors && <Typography lineHeight={1.4} color={theme.palette.error.main} variant="caption">{errors?.message}</Typography>}

      {errors?.graphQLErrors && <Typography lineHeight={1.4} color={theme.palette.error.main} variant="caption">{renderGraphQLErrors}</Typography>}
    </Stack>
  )

}

export default ErrorBox;
