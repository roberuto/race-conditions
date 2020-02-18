import { Resource, WrappedResource } from "./text.types";

export const fetchText = (txt: string) => {
  return fetch(`${process.env.REACT_APP_API}/text/${txt}`);
};

export const suspenseFetchText = (txt: string): WrappedResource => {
  const textPromise = fetchText(txt);
  return { text: wrapPromise(textPromise) };
};

function wrapPromise(promise: Promise<any>): Resource<any> {
  let status = "pending";
  let result: any;
  let suspender = promise
    .then(r => r.json())
    .then(r => {
      status = "success";
      result = r;
    })
    .catch(e => {
      status = "error";
      result = e;
    });

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}
