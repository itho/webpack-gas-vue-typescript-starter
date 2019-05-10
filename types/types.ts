namespace WebApp {
  export interface HttpRequest {
    queryString: string,
    parameter: {
      [key: string]: string
    },
    parameters: {
      [key: string]: string[]
    },
    contextPath: string,
    contentLength: number,
    postData: {
      length: number,
      type: string,
      contents: string,
      name: string,
    },
  }
}
