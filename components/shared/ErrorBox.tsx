// import { ServerError } from "@apollo/client";
import React from "react";


export interface ErrorsType {
    message: string;
    // graphQLErrors: GraphQLErrors;
    clientErrors: ReadonlyArray<Error>;
    networkError: Error | null;
    // networkError: Error | ServerParseError | ServerError | null;
    extensions?: any;
}

type Props = {
    errors?: ErrorsType | string | any;
}

type ValidationErrorsType = {
    validation: {
        [name: string]: any[];
    }
}

const ValidationErrors = ({ validation }: ValidationErrorsType) => {
    const renderErrors = Object.entries(validation).map(([key, value]) => {
        const renderValue = value?.map(o => (
            <div key={key}>{o}</div>
        ))

        return (
            <div key={key}>{renderValue}</div>
        )
    })

    return (
        <>
            {renderErrors}
        </>
    )
}

export const ErrorBox = ({ errors }: Props) => {
    if (typeof errors === 'string') {
        return (<div style={{ color: '#ff0032', paddingTop: '5px', fontSize: '0.8rem' }}>{errors}</div>)
    }

    const renderGraphQLErrors = errors?.graphQLErrors?.map((error: any) => {
        return (
            <div key={error.message} style={{ color: '#ff0032', paddingTop: '5px', fontSize: '0.8rem' }}>
                {!error.extensions?.validation && <div>{error.message}</div>}
                {error.extensions?.validation && <ValidationErrors validation={error.extensions?.validation} />}
            </div>
        )
    })

    //   const serverError = (errors.networkError as ServerError)?.result

    //   const renderNetworkError = !errors?.networkError ? null :
    //     (<div>
    //       <div>{errors?.networkError.name}: {errors.networkError.message}</div>
    //       <div>{typeof serverError === 'string' ? serverError : `${serverError}`}</div>
    //     </div>)

    return (<>
        {/* <div >{renderNetworkError}</div> */}

        {errors?.message && !errors?.graphQLErrors && <div >{errors?.message}</div>}

        {errors?.graphQLErrors && <div >{renderGraphQLErrors}</div>}
    </>)

}
