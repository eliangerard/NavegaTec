import { Navigate, useLocation, useParams, useSearchParams } from "react-router-dom";

export const Redirect = () => {
    const { hash } = useLocation();
    const params = new URLSearchParams(hash.substring(1));
    const paramsJson = {};
    for (const [key, value] of params.entries()) {
        paramsJson[key] = value;
    }
    console.log(paramsJson);
  return (
    <Navigate to='/' />
  )
}
