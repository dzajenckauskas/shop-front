const errorHandler = (e: any, res: any) => {
    if (typeof (e) === 'string') {
        // custom application error
        return res.status(400).json({ message: e });
    }

    if (e.status) {
        // status code set in error object
        return res.status(e.status).json({ message: e.message });
    }

    // default to 500 server error
    return res.status(500).json({ message: e.message });
}

export default errorHandler